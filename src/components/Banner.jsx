// import React from 'react'

function Banner() {
  return (
    <>
      <div className='container flex flex-col px-4 mx-auto my-10 md:flex-row max-w-screen-2xl md:px-20'>
        <div className='order-2 w-full md:order-1 md:w-1/2 md:mt-32'>
          <div className="space-y-12 ">
          <h1 className="text-4xl font-bold ">Hello, welcome here to learn something <span className="text-pink-500 ">new everyday!!!</span></h1>
          <p className="text-xl ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas doloremque fugiat itaque beatae ratione atque corrupti! Facilis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, libero. nim illum? Placeat.</p>
          <label className="flex items-center gap-2 input input-bordered">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-black opacity-70 "><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
        </div>
        <button className="mt-4 btn btn-secondary">Secondary</button>
        </div>
        <div className='order-1 w-full text-blue-500 md:w-1/2'> 
        <img className=" w-92 h-92" src="Banner1.png" alt="Img" />
        </div>
      
      </div>
    </>
  )
}

export default Banner
