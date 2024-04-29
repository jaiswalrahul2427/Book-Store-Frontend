import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Signup from './Signup';
import { useForm } from 'react-hook-form';
import Home from '../Home/Home';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onSubmit = (data, event) => {
    console.log(data);
    event.preventDefault(); // Prevent default form submission
    // Your form submission logic here
  };

  return (
    <div className=' dark:text-white dark:bg-slate-800'>
      <button className="font-bold text-white bg-black btn hover:bg-pink-500" onClick={toggleModal}>LOGIN</button>
      {isModalOpen && (
        <dialog id="my_modal_3" className="modal" open>
          <div className="text-black modal-box dark:text-white dark:bg-slate-800">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <NavLink to="/" className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2" onClick={toggleModal}>✕</NavLink>
              <h3 className='text-2xl font-bold text-center uppercase'>Login</h3>
              <div className='grid justify-center mt-2'>
                <label className='font-bold text-center'>Email</label>
                <input {...register("email", { required: true })} className='p-2 border rounded outline-none dark:text-white dark:bg-slate-800 w-80 boder' type="email" name="email" placeholder='Enter Your Email' />
                {errors.email && <span className="text-red-500">Email is required</span>}
                <label className='pt-2 font-bold text-center'>Password</label>
                <input type="password" {...register("password", { required: true })} name="password" className='p-2 border rounded outline-none dark:text-white dark:bg-slate-800 w-80 boder' placeholder='Enter Your Password' />
                {errors.password && <span className="text-red-500">Password is required</span>}
              </div>
              <div className='flex items-center justify-around mt-4'>
                <input type='submit' className='px-5 py-2 text-white duration-200 bg-black border-white rounded hover:bg-pink-500' />
                <p>Not Registered? <NavLink to="/signup" className='text-blue-700'>Signup</NavLink></p>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Login;
