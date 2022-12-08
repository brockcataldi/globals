import { atom } from 'recoil'

import ITypeView from './models/ITypeView'

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

const externalsAtom = atom<string>({
    key: 'externalsAtom',
    default: '',
})

const typeViewsAtom = atom<ITypeView[]>({
    key: 'typeViewsAtom',
    default: [
        {
            label: 'base',
            families:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            weight: '400',
            style: 'normal',
            variant: 'normal',
        },
    ],
})

export {
    menuOpenAtom,
    spacingScalesAtom,
    externalsAtom,
    typeViewsAtom,
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
