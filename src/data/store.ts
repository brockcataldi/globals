import { atom } from 'recoil'

import {
    marginScaleAtom,
    marginScaleBoundsAtom,
    marginScaleSelectionsAtom,
} from './atoms/marginScale'

import {
    paddingScaleAtom,
    paddingScaleBoundsAtom,
    paddingScaleSelectionsAtom,
} from './atoms/paddingScale'

import { typeScaleAtom, typeScaleBoundsAtom, typeScaleSelectionsAtom } from './atoms/typeScale'

const menuOpenAtom = atom<boolean>({
    key: 'menuOpenAtom',
    default: false,
})

const spacingScalesAtom = atom<string>({
    key: 'spacingScalesAtom',
    default: 'shared',
})

export {
    menuOpenAtom,
    spacingScalesAtom,
    typeScaleAtom,
    typeScaleBoundsAtom,
    typeScaleSelectionsAtom,
    marginScaleAtom,
    marginScaleBoundsAtom,
    marginScaleSelectionsAtom,
    paddingScaleAtom,
    paddingScaleBoundsAtom,
    paddingScaleSelectionsAtom,
}
