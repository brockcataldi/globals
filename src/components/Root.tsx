import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'

import IndexRoute from './routes/IndexRoute'
import ExportRoute from './routes/ExportRoute'
import TypeScaleRoute from './routes/TypeScaleRoute'
import TypeSheetRoute from './routes/TypeSheetRoute'
import TypeViewsRoute from './routes/TypeViewsRoute'
import SpacingRoute from './routes/SpacingRoute'

const Root = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<IndexRoute />} />
                    <Route path={'type-scale'} element={<TypeScaleRoute />} />
                    <Route path={'type-sheet'} element={<TypeSheetRoute />} />
                    <Route path={'type-views'} element={<TypeViewsRoute />} />
                    <Route path={'spacing'} element={<SpacingRoute />} />
                    <Route path={'export'} element={<ExportRoute />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Root
