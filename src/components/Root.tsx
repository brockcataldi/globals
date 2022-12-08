import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'

import IndexRoute from './routes/IndexRoute'
import TypeViewsRoute from './routes/TypeViewsRoute'
import TypeScaleRoute from './routes/TypeScaleRoute'
import SpacingRoute from './routes/SpacingRoute'
import ExportRoute from './routes/ExportRoute'

const Root = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<IndexRoute />} />
                    <Route path={'type-views'} element={<TypeViewsRoute />} />
                    <Route path={'type-scale'} element={<TypeScaleRoute />} />
                    <Route path={'spacing'} element={<SpacingRoute />} />
                    <Route path={'export'} element={<ExportRoute />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Root
