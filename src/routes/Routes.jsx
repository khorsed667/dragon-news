import React from 'react';
import { Route, createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        childern:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default router;