import { atom } from 'recoil'

import IScale from '../models/IScale'
import IScaleBounds from '../models/IScaleBounds'

const marginScaleAtom = atom<IScale>({
    key: 'marginScale',
    default: {
        base: {
            value: 16,
            suffix: 'px',
        },
        ratio: 1.2,
    },
})

const marginScaleBoundsAtom = atom<IScaleBounds>({
    key: 'marginScaleBounds',
    default: {
        upper: 6,
        lower: -1,
    },
})

const marginScaleSelectionsAtom = atom<number[]>({
    key: 'marginScaleSelections',
    default: [0],
})

export { marginScaleAtom, marginScaleBoundsAtom, marginScaleSelectionsAtom }
