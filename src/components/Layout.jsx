import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from './Navbar'
import { Provider } from 'react-redux'
import store from '../store/store'

const Layout = () => {
  return (
    <Provider store={store}>
        <Navbars/>
        <main>
            <Outlet/>
        </main>
    </Provider>
  )
}

export default Layout