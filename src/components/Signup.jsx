import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Footer from './Footer';

function Signup() {
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
    <>
    <div className='flex items-center justify-center h-screen dark:text-white dark:bg-slate-800'>
      
      {isModalOpen && (
        <dialog id='my_modal_3' className='modal' open>
          <div id="my_modal_3" className="p-0 m-0 border-2 rounded">
            <div className="p-5 m-0 text-black bg-white rounded shadow-md shadow-slate-500 dark:bg-red h-2/4 shadow-emerald-950 box dark:text-white dark:bg-slate-800">
              <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                <div className='relative grid text-center shadow-md'>
                  <button className="absolute text-xl font-bold text-slate-200 hover:border-slate-950 -top-5 -right-5 hover:bg-black hover:text-white btn btn-sm btn-circle btn-ghost right-2 top-2">
                    <Link to='/'>✕</Link>
                  </button>
                  <h1 className='text-2xl font-bold uppercase'>Signup</h1>
                  <label htmlFor="name">Name</label>
                  <input
                    {...register('name', { required: true })}
                    className='p-2 border rounded outline-none dark:text-white dark:bg-slate-800 w-80 boder'
                    type="text"
                    id="name"
                    placeholder='Enter Your Name'
                  />
                  {errors.name && <span className='text-red-500'>Name is required</span>}
                  <label htmlFor="email" className='mt-3'>Email</label>
                  <input
                    {...register('email', { required: true })}
                    className='p-2 border rounded outline-none dark:text-white dark:bg-slate-800 w-80 boder'
                    type="email"
                    id="email"
                    placeholder='Enter Your Email'
                  />
                  {errors.email && <span className='text-red-500'>Email is required</span>}
                  <label htmlFor="password" className='mt-3'>Password</label>
                  <input
                    {...register('password', { required: true })}
                    className='p-2 border rounded outline-none dark:text-white dark:bg-slate-800 w-80 boder'
                    type="password"
                    id="password"
                    placeholder='Enter Your Password'
                  />
                  {errors.password && <span className='text-red-500'>Password is required</span>}
                  <div className='flex items-center justify-between px-3 mt-3'>
                    <button type='submit' className='p-2 text-white bg-black border-none rounded-lg hover:bg-pink-500'>Signup</button>
                    <p>Have an account? <NavLink to="/login" className='text-blue-500 underline cursor-pointer'>Login</NavLink></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      )}
      
    </div>
    <Footer/>
    </>
    
  );
}

export default Signup;
