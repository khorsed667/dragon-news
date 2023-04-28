import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Category from './Pages/Home/Category/Category';
import NewsLayout from './Pages/Home/Home/NewsLayout';
import News from './Pages/News/News/News';

const routes = createBrowserRouter([
  {
      path:'/',
      element: <Home></Home>,
      children:[
        {
          path:`/categorie/:id`,
          element:<Category></Category>
        }
      ]
  },
  {
    path: 'news',
    element:<NewsLayout></NewsLayout>,
    children:[
      {
        path:':id',
        element:<News></News>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
