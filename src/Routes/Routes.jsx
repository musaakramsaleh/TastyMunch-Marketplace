import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/Root/Root';
import Errorpage from '../Components/Errorelement/Errorpage';
import Home from '../Pages/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import AllFood from '../Pages/AllFood/AllFood';
import Gallery from '../Pages/Gallery/Gallery';
import FoodDetails from '../Pages/AllFood/FoodDetails';
import Addfood from '../Components/Profile/Addfood';
import Myfood from '../Components/Profile/Myfood';
import Myorder from '../Components/Profile/Myorder';
import Buyfood from '../Components/buyfood/Buyfood';
import Update from '../Components/Update/Update';


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
            {
                path:'/allfood',
                element:<AllFood></AllFood>,
                loader:()=> fetch(`${import.meta.env.VITE_API_URL}/food`)
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            },
            {
                path:'/addfood',
                element:<Addfood></Addfood>
            },
            {
                path:'/myfood',
                element:<Myfood></Myfood>
            },
            {
                path:'/myorder',
                element:<Myorder></Myorder>
            },
            {
                path:'/allfood/:id',
                element:<FoodDetails></FoodDetails>,
                loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`)
            },
            {
                path:'/buyfood/:id',
                element:<Buyfood></Buyfood>,
                loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/foo/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/update/${params.id}`)
            }
        ]
    }
])

export default router;