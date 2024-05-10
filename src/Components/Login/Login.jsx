import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseAuth from '../../Routes/Hook/UseAuth';




const Login = () => {
    const {user,loginUser,googleLogin,githubLogin} = UseAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state || '/'
    const handlesociallogin = socialProvider =>{
        socialProvider()
        .then(result=>{
          if(result.user){
            navigate(from)
            toast('Successfully login')
          }
        })
    }
   
    const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {email,password} =data
    loginUser(email,password)
    .then(result=>{
      if(result.user){
        toast('Successfully login')
        navigate(from)
      }
    })
    .catch(error=>{
      toast("Invalid credentials")
    }) 
};
    if(user){
      return  navigate('/')
    }
    return (
      
        <div className='min-h-screen'>
          <h2 className='text-center mt-10 text-2xl font-bold'>Login</h2>
            <div className="hero max-w-[1440px] mx-auto pb-10  mt-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="p-16">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
          type="email" 
          name='email' 
          placeholder="email" 
          className="input input-bordered"
          {...register("email", { required: true })} 
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type="password" 
          name='password' 
          placeholder="password" 
          className="input input-bordered"
          {...register("password", { required: true })} 
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gradient-to-r  from-[rgba(225,139,70,255)] to-[rgba(242,184,115,255)] text-white font-semibold">Login</button>
          <p>Do not have an account?<Link to='/Register' className='text-blue underline text-blue-700'>Register</Link></p>
        </div>
      </form>
      <div className='flex justify-around'>
                            <button onClick={()=>handlesociallogin(googleLogin)} className='p-2 bg-gradient-to-r  from-[rgba(225,139,70,255)] to-[rgba(242,184,115,255)] rounded-lg text-white font-semibold mb-4 text-[16px]'>Google Login</button>
                            <button onClick={()=>handlesociallogin(githubLogin)} className='p-2 bg-gradient-to-r  from-[rgba(225,139,70,255)] to-[rgba(242,184,115,255)] rounded-lg text-white font-semibold mb-4 text-[16px]'>Github</button>
                        </div>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default Login;