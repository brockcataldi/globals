import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'

import IndexRoute from './routes/IndexRoute'
import TypeFamiliesRoute from './routes/TypeFamiliesRoute'
import TypeScaleRoute from './routes/TypeScaleRoute'
import ExportRoute from './routes/ExportRoute'

const Root = () : ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<IndexRoute />} />
          <Route path='type-families' element={<TypeFamiliesRoute />} />
          <Route path='type-scale' element={<TypeScaleRoute />} />
          <Route path='export' element={<ExportRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Root
