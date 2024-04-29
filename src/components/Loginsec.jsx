import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Loginsec() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
    // Close the modal after successful submission
    setIsModalOpen(false);
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='dark:text-white dark:bg-slate-800 shadow-slate-400'>
        <div className="p-5 text-black border-black shadow-md shadow-slate-800 rounded-xl dark:text-white dark:bg-slate-800">
          {isModalOpen && (
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <div className='relative border-yellow-300'>
              <Link to='/' className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</Link>
                <h3 className='text-2xl font-bold text-center uppercase'>Login</h3>
                <div className='grid justify-center mt-2'>
                  <label className='font-bold text-center'>Email</label>
                  <input
                    {...register('email', { required: true })}
                    className='p-2 border rounded outline-none dark:text-white dark:bg-slate-800 w-80 boder'
                    type="email"
                    name="email" 
                    placeholder='Enter Your Email'
                  />
                  {errors.email && (
                    <span className='text-red-500'>Email is required</span>
                  )}
                  <label className='pt-2 font-bold text-center'>Password</label>
                  <input
                    type="password"
                    {...register('password', { required: true })}
                    name="password" 
                    className='p-2 border rounded outline-none dark:text-white dark:bg-slate-800 w-80 boder'
                    placeholder='Enter Your Password'
                  />
                  {errors.password && (
                    <span className='text-red-500'>Password is required</span>
                  )}
                </div>
                <div className='flex items-center justify-around mt-4'>
                  <button type='submit' className='px-5 py-2 text-white duration-200 bg-black border-white rounded hover:bg-pink-500'>Login</button>
                  <p>Not Registered? <NavLink to="/Signup" className='text-blue-700'>Signup</NavLink></p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Loginsec
