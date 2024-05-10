import React from 'react';
import client_1 from '../../assets/client-1.jpeg'
import client_2 from '../../assets/client-2.png'
import client_3 from '../../assets/client-3.webp'
import client_4 from '../../assets/client-4.jpeg'
import client_5 from '../../assets/client-5.png'
const Client = () => {
    return (
        <div className='mt-16 max-w-[1440px] mx-auto'>
            <h2 className='text-3xl font-bold font-lexend text-secondary text-center mb-10'>Meet the top partners:</h2>
            <div className='grid lg:grid-cols-5 text-center justify-center mx-auto items-center mt-10 mb-10'>
            <div className='w-[250px]'>
                <img className='w-full border rounded-full' src={client_1} alt="" />
                <p className='text-2xl font-lexend font-bold text-amber-400 mt-5'>Kacchi vai</p>
            </div>
            <div className='w-[250px]'>
                <img className='w-full border rounded-full' src={client_2} alt="" />
                <p className='text-2xl font-lexend font-bold text-amber-400 mt-5'>Coffee Lime</p>
            </div>
            <div className='w-[250px] h-[250px]'>
                <img className='h-full border rounded-full' src={client_3} alt="" />
                <p className='text-2xl font-lexend font-bold text-amber-400 mt-5'>Sultans Dine</p>
            </div>
            <div className='w-[250px]'>
                <img className='w-full border rounded-full' src={client_4} alt="" />
                <p className='text-2xl font-lexend font-bold text-amber-400 mt-5'>Swiss Charlet</p>
            </div>
            <div className='w-[250px]'>
                <img className='w-full border rounded-full' src={client_5} alt="" />
                <p className='text-2xl font-lexend font-bold text-amber-400 mt-5'>Brown Pie</p>
            </div>
        </div>
        </div>
    );
};

export default Client;