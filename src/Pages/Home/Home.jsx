import React from 'react';
import UseAuth from '../../Routes/Hook/UseAuth';
import { Slide } from 'react-awesome-reveal';
import Client from './Client';
const Home = () => {
    const {user} = UseAuth()
    return (
        <div>
        <div className='relative h-[300px] md:h-[600px] bg-cover bg-center' style={{backgroundImage: `url(banner.jpg)`}}>

            <div className='relative z-50'>
            <Slide>
            <h2 className='md:text-4xl text-2xl lg:text-6xl  text-white font-lexend font-bold relative z-40 pt-16 md:pt-40 mx-auto text-center'>"Welcome to TastyMunch <br /> Marketplace Where Every <br /> Bite Tells a Story"</h2>
            <div className='text-center mx-auto w-[130px] mt-5 z-40 relative'>
            <button className='btn btn-secondary font-bold font-lexend'>See Products</button>
            </div>
            </Slide>
            </div>
            <div className='absolute top-0 right-0 left-0 bottom-0 bg-slate-950 opacity-40 z-20'>
            </div>
        </div>
        <Client></Client>
        </div>
    );
};

export default Home;