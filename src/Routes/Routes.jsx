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
                loader:()=> fetch('http://localhost:5000/food')
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            },
            {
                path:'/allfood/:id',
                element:<FoodDetails></FoodDetails>,
                loader:({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
        ]
    }
])

export default router;