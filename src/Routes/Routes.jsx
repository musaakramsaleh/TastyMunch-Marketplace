import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/Root/Root';
import Errorpage from '../Components/Errorelement/Errorpage';
import Home from '../Pages/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';


const router = createBrowserRouter([
    {
        element:<Root></Root>,
        path:'/',
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
])

export default router;