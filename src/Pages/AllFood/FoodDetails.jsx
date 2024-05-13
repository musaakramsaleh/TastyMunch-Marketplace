import React from 'react';

const FoodDetails = () => {
    
    return (
        <div className='max-w-[1440px] mx-auto mt-5'>
            {/* <img src={single.image} className='md:w-2/3  md:h-[600px] h-[300px]' alt="" /> */}
           <div className='text-black font-bold'>
           <p className='text-2xl mt-3'></p>
           <p className='mt-2 lg:w-3/4'></p>
           <p className='mt-2'>Price: </p>
           <p>Processing_time: </p>
           <p>Stock status:</p>
           <p>Rating: </p>
           <p>Category: </p>
           <p>Customization: </p>
           <p>Processing Time:</p>
           </div>
        </div>
    );
};

export default FoodDetails;