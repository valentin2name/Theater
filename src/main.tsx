import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage'
import Layout from './Components/Layout/Layout'
import NewsTheaterPage from './Components/NewsTheaterPage/NewsTheaterPage'
import AfishaPage from './Components/AfishaPage/AfishaPage'
import AboutPage from './Components/AboutPage/AboutTheaterPage'
import TicketPage from './Components/TicketPage/TicketPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/news' element={<NewsTheaterPage />}></Route>
        <Route path='/afisha' element={<AfishaPage />}></Route>
        <Route path='/ticket' element={<TicketPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
