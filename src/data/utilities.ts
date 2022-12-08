import { RecoilState, useRecoilValue } from 'recoil'

import IScale from './models/IScale'
import ITypeView from './models/ITypeView'

export const calculateScaleEntry = (nth: number, scale: IScale) => {
    const {
        base: { value, suffix },
        ratio,
    } = scale

    let a = value

    if (nth < 0) {
        for (let i = 0; i > nth; i--) {
            a = a / ratio
        }
    } else {
        for (let i = 0; i < nth; i++) {
            a = a * ratio
        }
    }
    return [a.toFixed(2), suffix]
}

export const tee = (nth: number): string => {
    const m: { [key: string]: string } = {
        '-2': 'XS',
        '-1': 'S',
        '0': 'M',
        '1': 'L',
        '2': 'XL',
    }

    if (nth < -2) {
        return `-${Math.abs(nth) - 2 + 1}XS`
    }

    if (nth > 2) {
        return `${Math.abs(nth) - 2 + 1}XL`
    }

    const sNth = String(nth)
    return Object.hasOwn(m, sNth) ? m[sNth] : 'M'
}

export const nameScaleEntry = (
    index: number,
    selections: number[],
    type: 'numeric' | 'tee' | 'hundreds' = 'numeric',
) => {
    const c =
        index >= 0
            ? [...selections].filter((v) => v >= 0).sort((a, b) => a - b)
            : [...selections].filter((v) => v < 0).sort((a, b) => b - a)

    const i = index >= 0 ? c.indexOf(index) : (c.indexOf(index) + 1) * -1

    switch (type) {
        case 'tee':
            return tee(i)

        case 'hundreds':
            return String(i * 100)

        case 'numeric':
        default:
            return String(i)
    }
}

export const between = (upper: number, lower: number): number[] => {
    const value = []

    for (let i = lower; i <= upper; i++) {
        value.push(i)
    }

    return value.reverse()
}

export const objectifyScale = (
    scaleAtom: RecoilState<IScale>,
    selectionsAtom: RecoilState<number[]>,
) => {
    const scale = useRecoilValue(scaleAtom)
    const selections = useRecoilValue(selectionsAtom)

    return [...selections]
        .sort((a, b) => a - b)
        .reverse()
        .reduce(
            (
                base: { [key: string]: string },
                value: number,
                index: number,
                selections: number[],
            ) => {
                return {
                    ...base,
                    [nameScaleEntry(value, selections, 'tee')]: calculateScaleEntry(
                        value,
                        scale,
                    ).join(''),
                }
            },
            {},
        )
}

export const objectifyView = (viewsAtom: RecoilState<ITypeView[]>) => {
    const views = useRecoilValue(viewsAtom)

    return views.reduce(
        (
            base: {
                [key: string]: {
                    families: string
                    weight: string
                    style: string
                    variant: string
                }
            },
            view: ITypeView,
        ) => {
            const { label, families, weight, style, variant } = view
            return {
                ...base,
                [label]: {
                    families,
                    weight,
                    style,
                    variant,
                },
            }
        },
        {},
    )
}
