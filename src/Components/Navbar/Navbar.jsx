import React, { useContext } from 'react';

import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../Routes/Hook/UseAuth';
import { Tooltip } from 'react-tooltip';


const Navbar = () => {
    const {user,logout} = UseAuth()
   const handleSignout =()=>{
    logout()
    .then()
    .catch()
  
} 
    const navItems = ()=>{
        return <>
         <li><NavLink to='/' className={({isActive})=>isActive?'text-yellow-600 font-bold':'text-secondary'}>Home</NavLink></li>
         <li><NavLink to='/allfood' className={({isActive})=>isActive?'text-yellow-600 font-bold':'text-secondary'}>All Foods</NavLink></li>
         <li><NavLink to='/gallery' className={({isActive})=>isActive?'text-yellow-600 font-bold':'text-secondary'}>Gallery</NavLink></li>
         </>
    }
    return (
        <div>
            <div className="navbar bg-slate-950">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 ">
        {navItems()}
      </ul>
    </div>
    <Link to='/' className='text-yellow-400 text-xl  md:text-2xl ml-0 md:ml-10 font-bold'><span className='text-red-600 font-lexend'>TastyMunch</span><br />Marketplace</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl font-lexend">
      {navItems()}
    </ul>
  </div>
  <div className="navbar-end">
    {
     user? <div className='dropdown dropdown-end z-50'>
     <div
       tabIndex={0}
       role='button'
       className='btn btn-ghost btn-circle avatar'
     >
       <div className='w-10 rounded-full' title=''>
         <img
           referrerPolicy='no-referrer'
           alt='User Profile Photo'
           src={user.photoURL}
         />
       </div>
     </div>
     <ul
       tabIndex={0}
       className='menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52'
     >
       <li>
         <Link to ='/myfood'><div className='justify-between'>My added food items</div></Link>
       </li>
       <li>
         <Link to = '/addfood'><div>Add a food item</div></Link>
       </li>
       <li>
         <Link to ='/myorder'><div>My ordered food items</div></Link>
       </li>
       <li className='mt-2'>
         <button onClick={()=>handleSignout()} className='bg-gray-200 block text-center'>Logout</button>
       </li>
     </ul>
   </div> :<>
  <Link to='/login'  className="p-3 rounded-lg ml-3 text-white font-bold bg-yellow-300">Login</Link>
    <Link to='/register'  className="p-3 rounded-lg ml-3 text-white font-bold bg-yellow-300">Register</Link>
  </>
   
  
  }
  </div>
</div>
        </div>
    );
};

export default Navbar;