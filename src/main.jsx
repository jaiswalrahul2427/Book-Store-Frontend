import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './Home/Home.jsx'
import Courses from './Courses/Courses.jsx'
import Loginsec from './components/Loginsec.jsx'
import Signupf from './Signup/Signupf.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>

      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/course",
        element:<Courses/>
      },
      {
        path:"/signup",
        element:<Signupf/>
      },
      {
        path:"/login",
        element:<Loginsec/>
      },
      // {
      //   // loader: {githubInfolder },
      //   path:"/Github",
      //   element:<GitHub/>
      // }
    ]
  }
])
// </BrowserRouter>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='dark:bg-slate-900 dark:text-white'>
    <RouterProvider router={router}/>
    </div>
  </React.StrictMode>,
)
