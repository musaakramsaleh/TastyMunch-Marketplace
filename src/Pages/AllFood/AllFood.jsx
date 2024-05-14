import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';

const AllFood = () => {
    const foo = useLoaderData();
    const [foods, setFoods] = useState(foo);
    const [search, setSearch] = useState('');

    console.log(foods);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/found?search=${search}`);
                setFoods(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [search]);

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text);
    };

    console.log(search);

    return (
        <div>
            <div className='relative h-[300px] md:h-[600px] bg-cover bg-center' style={{backgroundImage: `url(all-food.jpg)`}}>
                <h2 className='relative z-30 font-lexend text-center pt-20 font-bold text-6xl text-white'>All food items</h2>
                <h2 className='relative z-30 font-lexend text-center  font-bold text-3xl pt-5 text-white'>Home | All food items</h2>
                <div className='absolute top-0 right-0 left-0 bottom-0 bg-slate-950 opacity-40 z-20'></div>
            </div>
            <form className='max-w-[325px] my-10 mx-auto' onSubmit={handleSearch}>
                <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        name='search'
                        placeholder='Enter Food Title'
                        aria-label='Enter Food Title'
                    />
                    <button
                        type='submit'
                        className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-secondary rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'
                    >
                        Search
                    </button>
                </div>
            </form>
            <div>
                <div className='max-w-[1440px] mx-auto grid grid-cols-3 gap-5'>
           {
            foods.map(food=> <div key={food._id} className="card card-compact mr-5 gap-5 bg-base-100 shadow-xl">
  <figure><img className='w-full h-[300px]' src={food.FoodImage} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{food.FoodName}</h2>
    <p className='font-lexend text-black font-bold'>Category: {food.FoodCategory}</p>
    <p className='font-lexend text-black font-bold'>Price: {food.Price}</p>
    <p className='font-lexend text-black font-bold'>Quantity: {food.quantity}</p>
    <div className="card-actions justify-end">
      <Link to={`/allfood/${food._id}`}><button  className="btn btn-primary">See Details</button></Link>
    </div>
  </div>
</div>
            )
           }
        </div>
            </div>
        </div>
    );
};

export default AllFood;
