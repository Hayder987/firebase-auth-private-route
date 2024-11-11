import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import AuthProvider from './routes/AuthProvider.jsx'
import Profile from './pages/Profile.jsx'
import DashBord from './pages/DashBord.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:"/dashboard",
        element:<PrivateRoute><DashBord></DashBord></PrivateRoute>
      }
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)
