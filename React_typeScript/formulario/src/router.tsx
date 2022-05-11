import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {Form1} from './pages/Form1'
import {Form2} from './pages/Form2'
import {Form3} from './pages/Form3'

export const Router = () => {
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form1 />}></Route>
          <Route path='/step2' element={<Form2 />}></Route>
          <Route path='/step3' element={<Form3 />}></Route>
        </Routes>
      </BrowserRouter>
  )
}