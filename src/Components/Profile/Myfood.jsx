import React, { useEffect, useState } from 'react';
import UseAuth from '../../Routes/Hook/UseAuth';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Myfood = () => {
    const {user} = UseAuth()
    const [food,setfood] =useState([])
    useEffect(()=>{
        const getData = async ()=>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/food/${user?.email}`)
            setfood(data)
        }
        getData()
    },[user])
      console.log(food)
    return (
       <div>
        <h2 className='font-lexend font-bold text-2xl text-secondary text-center mt-5'>My Added items</h2>
        <div className='max-w-[1440px] mx-auto grid grid-cols-3 gap-3 mt-5'>
        {
            food.map(foods=><div className='border w-[400px] border-solid shadow-xl p-5' key={foods._id}>
               <img className='h-[270px] w-[full]' src={foods.FoodImage} alt="" />
               <h2 className='font-lexend text-black font-bold'>{foods.FoodName}</h2>
               <h2 className='font-lexend text-black font-bold'>Price: ${foods.Price}</h2>
               <h2 className='font-lexend text-black font-bold'>items sold: {foods.purchaseCount}</h2>
               <h2 className='font-lexend text-black font-bold'>Quantity left: {foods.quantity}</h2>
               <Link to={`/update/${foods._id}`}><button className='btn btn-secondary font-lexend font-bold mt-3'>Update</button></Link>
            </div>)
        }
       </div>
       </div>
    );
};

export default Myfood;