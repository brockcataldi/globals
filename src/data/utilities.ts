import IScale from './models/IScale'

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

export const between = (upper: number, lower: number): number[] => {
    const value = []

    for (let i = lower; i <= upper; i++) {
        value.push(i)
    }

    return value.reverse()
}
