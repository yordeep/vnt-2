import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./components/user/home/Home.jsx"
import Contact from "./components/user/contact/Contact.jsx"
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/user/about/About.jsx'
import MyAccount from './components/user/myaccount/MyAccount.jsx'
import Signup from './components/user/myaccount/Signup.jsx'
import ProductInfo from './components/user/productinfo/ProductInfo.jsx'



const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}> 
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='about/contact' element={<Contact/>}/>
    <Route path="/my-account" element={<MyAccount/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home/productinfo" element={<ProductInfo/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
)
