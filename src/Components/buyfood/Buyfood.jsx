import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseAuth from '../../Routes/Hook/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Buyfood = () => {
    const {user} = UseAuth()
    const data = useLoaderData()
    console.log(data)
    const handleSubmit = async e => {
       e.preventDefault()
       const form = e.target
       const FoodName = form.FoodName.value
       const Price = form.price.value
       const BuyerName = form.BuyerName.value
       const BuyerEmail = form.BuyerEmail.value
       const quantity = parseInt(form.quantity.value)
       const newquantity = data.quantity - quantity 
       const product = {FoodName,Price,BuyerName,BuyerEmail,quantity}
       console.log(product)
       if(quantity>data.quantity){
        return alert("sorry cannot give this. We donot have sufficient product")
       }
       if(user?.email === data.AddBy.email){
        return alert("sorry cannot buy your own product")
       }
       try {
        // First Axios request to add data in a collection
        const response1 = await axios.post(`${import.meta.env.VITE_API_URL}/addproduct`, product);
        console.log(response1.data);
        // Handle response1 if needed
    
        // Second Axios request to update the value of another collection
        const response2 = await axios.put(`${import.meta.env.VITE_API_URL}/updatefood/${data._id}`, product);
        console.log(response2.data);
        // Handle response2 if needed
    
        // Show success message or perform other actions
        Swal.fire({
          title: "Success!",
          text: "Data added and collection updated Successfully!",
          icon: "success"
        });
        form.reset();
      } catch (err) {
        console.error(err);
        // Handle errors
      }
    };
    
    
    return (
        <div>
        <div className='pb-10'>
             <h2 className='text-center mt-10 font-lexend text-2xl text-secondary font-bold'>Buy the item</h2>
            <div className='max-w-[1000px] mx-auto'>
            <form onSubmit={handleSubmit} >
             <div className=''>
            <label className='font-lexend font-bold my-3'>Food Name:</label><br />
             <input disabled defaultValue={data.FoodName} type="text" name='FoodName' placeholder="Type here" className="input input-bordered w-full" /><br />
             </div>
             <div className=''>
            <label  className='font-lexend font-bold my-3'>Food price:</label><br />
             <input disabled defaultValue={`$ ${data.Price}`} type="text" name='price' placeholder="Type here" className="input input-bordered w-full " /><br />
             <label  className='font-lexend font-bold my-3'>Food quantity:</label><br />
             <input defaultValue={data.quantity} type="text" name='quantity' placeholder="Type here" className="input input-bordered w-full " />
             </div>
             <label  className='font-lexend font-bold my-3'>Buyer Name:</label><br />
             <input disabled defaultValue={user?.displayName} type="text" name='BuyerName' placeholder="Type here" className="input input-bordered w-full " />
             <label  className='font-lexend font-bold my-3'>Buyer email:</label><br />
             <input disabled defaultValue={user?.email} type="text" name='BuyerEmail' placeholder="Type here" className="input input-bordered w-full " />
            <input  className='w-full bg-secondary font-lexend font-bold text-xl py-3 rounded-xl text-white cursor-pointer mt-3' type="Submit" value='Buy food' />
            </form>
            </div>
        </div> 
          
        </div>
    );
};

export default Buyfood;