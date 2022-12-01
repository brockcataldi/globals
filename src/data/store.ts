import { atom } from 'recoil'

import IScale from './models/IScale'
import IScaleBounds from './models/IScaleBounds'

const menuOpenAtom = atom({
    key: 'menuOpenAtom',
    default: false,
})

const typeScaleAtom = atom<IScale>({
    key: 'typeScale',
    default: {
        base: {
            value: 16,
            suffix: 'px',
        },
        ratio: 1.2,
    },
})

const typeScaleBoundsAtom = atom<IScaleBounds>({
    key: 'typeScaleBounds',
    default: {
        upper: 6,
        lower: -1,
    },
})

const typeScaleSelectionsAtom = atom<number[]>({
    key: 'typeScaleSelections',
    default: [0],
})

export { menuOpenAtom, typeScaleAtom, typeScaleBoundsAtom, typeScaleSelectionsAtom }
