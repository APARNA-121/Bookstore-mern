import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationDot } from 'react-icons/fa6'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
import { GrSend } from "react-icons/gr";

function Contact() {
  return (
    <>
    <Header/>
     <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
       <div>
        <h2  className="text-2xl font-bold text-center mt-5 mb-3">Contacts</h2>
        <p className='text-justify'>If you have any questions about our collection, need help placing an order, or are looking for a specific book, our team is always ready to assist you. At our bookstore, we believe every reader deserves personal attention and a smooth shopping experience. Whether you're a student searching for academic titles, a casual reader exploring new genres, or a collector hunting for rare books, feel free to reach out to us. Send us a message with your inquiry, and our support team will get back to you at the earliest with accurate information and friendly guidance.</p>
        <div className='md:grid grid-cols-3 w-full mt-5 justify-center items-center'>
          <div className='flex p-3 mx-4'>
            <FaLocationDot/>
            <p className=''
            >123 Booklane Street,<br />
Greenview District,<br />
Bangalore, Karnataka – 560102</p>
          </div>

          <div className='flex p-3 mx-4'>
            <FaPhone/>
            <p className=''
            >+91 9999077771</p>
          </div>

          <div className='flex p-3 mx-4'>
            <FaMailBulk/>
            <p className=''
            >bookstore@gmail.com</p>
          </div>
        </div>

        <div className="md:px-40 p-5 my-2 md:grid grid-cols-2 items-center gap-10" >
         <div className='text-center'>
          
          <div style={{width:'400px'}} className="bg-gray-300 text-black p-5 flex flex-col justify-center items-center my-5">
                   
                    <h2 className="text-2xl">Send me Message</h2>
                    <form className="my-5 w-full">
                      {/*Name*/}
                     
                         <input type="text" placeholder='Name' className="bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5" />
                      
                      {/* email */}
                      <input type="text" placeholder='Email ID' className="bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5" />
                      {/* Message */}
                      <div className="flex items-center">
                         <input type="text" placeholder='Message' className="bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-5" />
                      </div>
                       <button type='button' className="bg-gray-800 p-2 w-full rounded cursor-pointer text-white">Send <GrSend style={{marginLeft:'190px', marginTop:'-20px'}} />
</button>
                       </form>
                       </div>

        </div>
        {/* author image */}
        <div className='p-5 flex justify-center items-center'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236536.96600125602!2d77.63093949999997!3d12.953997400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1764215652358!5m2!1sen!2sin" width="400" height="320" style={{border:0}} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

       </div>

      </div>
     </section>
    <Footer/>
    </>
  )
}

export default Contact