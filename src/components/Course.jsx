// import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import Home from '../Home/Home'
import {Link} from 'react-router-dom'
function Course() {
    console.log("hello Friend")
    console.log("This is list\n",list)
  return (
    <div className="container px-4 mx-auto max-w-screen-2xl md:px-20 ">
<div className='items-center justify-center pt-32 text-center'>
  <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-pink-500'>Here:)</span> </h1>
  <p className='mt-12 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint deserunt porro at? Maiores itaque explicabo eius praesentium neque aliquid enim. Dolor illum porro error. Distinctio eum amet nemo praesentium exercitationem, quasi optio deserunt nesciunt quo similique unde et facere, odio aliquid saepe velit cumque! Eveniet rem placeat, esse minus corporis, nihil est laboriosam alias consectetur eligendi distinctio maxime, minima provident. Vel maxime accusamus illo necessitatibus officia atque molestiae est pariatur nemo modi, reprehenderit mollitia non dicta voluptates odit eaque accusantium soluta iusto harum nesciunt molestias provident, similique tenetur repellendus! Vero laudantium incidunt obcaecati, quaerat laboriosam blanditiis eum voluptatem autem dignissimos!</p>
<Link to='/'>

<button className='px-4 py-2 mt-3 text-white duration-300 bg-pink-600 rounded-lg hover:bg-pink-700'><a href={<Home/>}>Back</a></button>

</Link>
</div>
<div className='grid grid-cols-1 mt-12 space-x-2 md:grid-cols-3 '>
  {
    list.map((item)=>(
      <Cards item={item} key={item.id} className=" w-52" />
    ))
  }
</div>
    </div>
  )
}

export default Course
