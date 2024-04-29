// import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';

function Contact() {
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

            {isModalOpen && (<div className='flex items-center justify-center h-screen '>
                <div className='p-5 text-black bg-white rounded shadow-md shadow-slate-500 dark:bg-red shadow-emerald-950 box dark:text-white dark:bg-slate-800 boder-white' >
                    <h1 className='text-2xl font-bold text-center uppercase'>Contact Us</h1>
                    <form action="" className='grid ' onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="" className='font-bold text-center'>Name</label>
                        <input className='p-2 border rounded outline-none dark:text-white dark:bg-slate-800 w-80 boder'              {...register('name', { required: true })}
                            type="text" name="name" placeholder='Enter Your Name' id="" />
                        {errors.name && <span className='text-red-500'>Name is required</span>}

                        <label className='font-bold text-center' htmlFor="">Email</label>
                        <input className='p-2 border rounded outline-none dark:text-white dark:bg-slate-800 w-80 boder'                {...register('email', { required: true })}
                            type="email" name="email" placeholder='Enter Your Email' id="" />
                        {errors.email && <span className='text-red-500'>Email is required</span>}

                        <label className='font-bold text-center' htmlFor="">Message</label>
                        <textarea className='w-full p-2 border rounded outline-none dark:text-white dark:bg-slate-800 w-80 boder text-start ' type="text" name="text"                     {...register('text', { required: true })}
                            placeholder='Type your message' id="" > </textarea>
                        {errors.text && <span className='text-red-500'>Message is required</span>}
                        <button type='submit' className='p-2 mt-5 text-white bg-black border-none rounded-lg hover:bg-pink-500'>Send</button>

                    </form>
                </div>
            </div>
            )}
        </>

    )
}

export default Contact
