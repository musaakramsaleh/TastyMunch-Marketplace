import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllFood = () => {
    const foo = useLoaderData()
    const [foods,setfoods] = useState(foo)
    return (
        <div className=''>
            <div className='relative h-[300px] md:h-[600px] bg-cover bg-center' style={{backgroundImage: `url(all-food.jpg)`}}>
            <h2 className='relative z-30 font-lexend text-center pt-20 font-bold text-6xl text-white'>All food items</h2>
            <h2 className='relative z-30 font-lexend text-center  font-bold text-3xl pt-5 text-white'>Home | All food items</h2>
            <div className='absolute top-0 right-0 left-0 bottom-0 bg-slate-950 opacity-40 z-20'></div>
            </div>
            <form className='max-w-[325px]  my-10 mx-auto'>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                name='search'
                placeholder='Enter Food Title'
                aria-label='Enter Food Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-secondary rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
        
        <div className='max-w-[1440px] mx-auto grid grid-cols-3 gap-5'>
           {
            foods.map(food=> <div key={food._id} className="card card-compact mr-5 gap-5 bg-base-100 shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{food.FoodName}</h2>
    <p>Category: {food.FoodCategory}</p>
    <p>Price: {food.price}</p>
    <p>Quantity: {food.quantity}</p>
    <div className="card-actions justify-end">
      <Link to={`/allfood/${food._id}`}><button  className="btn btn-primary">See Details</button></Link>
    </div>
  </div>
</div>
            )
           }
        </div>
        </div>
    );
};
//_id,FoodName,FoodImage,FoodCategory,Price,quantity
export default AllFood;