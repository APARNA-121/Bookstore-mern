import React from 'react'
import { FaArrowCircleRight, FaArrowRight, FaFacebook, FaForward, FaInstagram, FaLinkedin, FaSearch } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <>
    <div className="bg-black text-white grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-6 md:px-12">

  {/* ABOUT US */}
  <div>
    <h4 className="font-semibold text-lg mb-2">ABOUT US</h4>
    <p>
      We are a second-hand bookstore dedicated to making reading affordable and sustainable. 
      Our mission is to give pre-loved books a new life by offering quality-checked titles 
      at budget-friendly prices. From academic textbooks to novels and non-fiction, we provide 
      a wide range of books for every reader. By choosing second-hand, you not only save money 
      but also support an eco-friendly way of reading.
    </p>
  </div>

  {/* NEWSLETTER */}
  <div>
    <h4 className="font-semibold text-lg mb-2">NEWS LETTER</h4>
    <p className="mb-3">Stay updated with our latest trends</p>

    <div className="flex items-center w-full max-w-xs mx-auto md:mx-0">
      <input 
        type="text" 
        className="bg-white text-black px-3 py-2 rounded-l-md w-full outline-none"
        placeholder="Email ID"
      />
      <button 
        className="bg-yellow-300 text-gray-700 px-3 py-3 rounded-r-md flex items-center justify-center"
      >
        <FaArrowRight />
      </button>
    </div>
  </div>

  {/* FOLLOW US */}
  <div>
    <h4 className="font-semibold text-lg mb-2">FOLLOW US</h4>
    <p className="mb-3">Let us be social</p>

    <div className="flex items-center space-x-3 text-xl">
      <FaInstagram />
      <FaFacebook />
      <FaXTwitter />
      <FaLinkedin />
    </div>
  </div>
</div>
<div className='flex justify-center items-center text-white' style={{backgroundColor:'gray'}}><p>Copyright 2023 All rights reserved | This website is made with 🤍 By Luminar Technolab</p></div>

    </>
  )
}

export default Footer