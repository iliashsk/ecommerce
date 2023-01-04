import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import Header from './components/nav/Header'
const Ecommerce=()=>{
	return(<BrowserRouter>
		<Routes>
		<Route path='/' element={<><Header/><Home/><Layout/></>} />
		<Route path='/login' element={<><Header/><Login/></>} />
		<Route path='/regist' element={<><Header/><Register/></>} />
		</Routes>
		</BrowserRouter>)
}
export default Ecommerce;