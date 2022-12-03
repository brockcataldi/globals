import { atom } from 'recoil'

import IScale from '../models/IScale'
import IScaleBounds from '../models/IScaleBounds'

const paddingScaleAtom = atom<IScale>({
    key: 'paddingScale',
    default: {
        base: {
            value: 16,
            suffix: 'px',
        },
        ratio: 1.2,
    },
})

const paddingScaleBoundsAtom = atom<IScaleBounds>({
    key: 'paddingScaleBounds',
    default: {
        upper: 6,
        lower: -1,
    },
})

const paddingScaleSelectionsAtom = atom<number[]>({
    key: 'paddingScaleSelections',
    default: [0],
})

export { paddingScaleAtom, paddingScaleBoundsAtom, paddingScaleSelectionsAtom }
