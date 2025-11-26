import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'

function Home() {
  return (
    <>
      <Header/>
      <div>
        {/* landing part - search */}
        <div style={{height:'650px'}} className='flex justify-center items-center flex-col bg-[url(/bg-book.jpg)] bg-cover bg-center text-white '>
        <div style={{height:'650px',backgroundColor:'rgba(0,0,0,0.4)'}} className='w-full flex justify-center items-center flex-col'>
          <h1 className="text-5xl font-bold mb-2">Wonderful Gifts</h1>
          <p>Gift your family and friends a book</p>
          {/* search */}
          <div className="mt-9 flex">
            <input type="text" className="bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2" placeholder='Search Books Here' />
            <button className='text-gray-500' style={{marginLeft:'-40px'}}><FaSearch/></button>
          </div>
        </div>

        </div>
        {/* New arrival  */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
            <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
            <h2 className="text-2xl">Explore Our Latest Collection</h2>
            {/* Books row and cols */}
            <div className="md:grid grid-cols-4 w-full mt-10">
              {/* duplicate book card div */}
              <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/1280x1280/products/6929/17271/Weir_Project_Hail_Mary_cover__95757.1687451127.jpg?c=1" alt="book" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                  <h4 className="text-lg">title</h4>
                  <h4>$ price</h4>
                </div>
              </div>
              {/* duplicate book card div */}
              <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/1280x1280/products/6929/17271/Weir_Project_Hail_Mary_cover__95757.1687451127.jpg?c=1" alt="book" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                  <h4 className="text-lg">title</h4>
                  <h4>$ price</h4>
                </div>
              </div>
              {/* duplicate book card div */}
              <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/1280x1280/products/6929/17271/Weir_Project_Hail_Mary_cover__95757.1687451127.jpg?c=1" alt="book" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                  <h4 className="text-lg">title</h4>
                  <h4>$ price</h4>
                </div>
              </div>
              {/* duplicate book card div */}
              <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/1280x1280/products/6929/17271/Weir_Project_Hail_Mary_cover__95757.1687451127.jpg?c=1" alt="book" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                  <h4 className="text-lg">title</h4>
                  <h4>$ price</h4>
                </div>
              </div>
            </div>
        </section>
        {/* author */}
       <section className="md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10" >
         <div className='text-center'>
          <h1 className="text-2xl font-bold">FEATURED AUTHORS</h1>
          <h2 className='text-xl'>Captivates with every Wonderful</h2>
          <p className='text-justify mt-9'>Welcome to our humble online bookstore, a place born out of a simple yet powerful love for stories. Books have always been more than just paper and ink to me—they are memories, mentors, and quiet companions that shape who we become. Over the years, I realised something important: thousands of beautiful books sit forgotten on shelves, waiting for someone new to cherish them. And countless readers search for affordable, quality books but often feel limited by high prices or lack of availability. This bookstore was created to bridge that gap. </p>
          <p className='text-justify mt-5'>This space is built with the belief that reading should be accessible to everyone, regardless of age, background, or budget. By offering quality books at affordable prices, we hope to create an experience that is both sustainable for the planet and meaningful for readers. Choosing a pre-loved book not only saves money—it also helps reduce waste and gives stories a chance to live on.</p>
        </div>
        {/* author image */}
        <div className='p-5 flex justify-center items-center'>
          <img className='w-full' src="https://images.squarespace-cdn.com/content/v1/64bfd6aa127fba0754a78d65/1690617601186-7MS4W32UWBXKFKZTCQ14/authorphotos5-1024x683.jpg" alt="author" />
        </div>

       </section>
        {/* testimony */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
          <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
          <h2 className="text-2xl">See What Others Are Saying</h2>
          <div className="my-10 flex justify-center items-center flex-col">
            {/* user image */}
            <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://www.cecyteo.edu.mx/Nova/App_themes/Site2015/assets/admin/pages/media/profile/profile_user.jpg" alt="user" />
            <p className='mt-5'>Lucas Alexander</p>
            <p className='text-justify mt-4'><span className='font-bold'>“Eco-friendly and excellent quality.”</span> "Such a wonderful initiative! I found two textbooks I had been searching for everywhere. The quality was far better than I expected, and the packing was neat. Highly recommended for students."</p>
          </div>
        </section>
      </div>
      <Footer/>
      </>
  )
}

export default Home