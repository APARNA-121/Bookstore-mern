import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import SellBook from '../components/SellBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'
import Edit from '../components/Edit'

function Profile() {

  const [tab,setTab] = useState(1)

  return (
    <>
    <Header/>
    {/* black div */}
    <div style={{height:'200px'}} className="bg-black"></div>
    {/* profile image */}
    <div style={{width:'230px',height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}} className="bg-white p-3">
        <img style={{width:'200px',height:'200px', borderRadius:'50%'}} src="https://www.cecyteo.edu.mx/Nova/App_themes/Site2015/assets/admin/pages/media/profile/profile_user.jpg" alt="profile" />
    </div>
    {/* name with edit block */}
    <div className="md:flex justify-between items-center px-20 my-5">
      <h1 className="text-2xl font-bold flex items-center">Username <FaCircleCheck className='text-blue-400 ms-5'/> </h1>
       <Edit/>
    </div>

    <p className="text-justify md:px-20 px-5 my-5">Welcome to your personal bookstore profile!
      Here, you can manage everything related to your reading journey in one place. Whether you're an avid reader, a student looking for academic books, or simply someone exploring new genres, your profile helps you keep things organized and accessible.Your profile is designed to make your bookstore experience smoother, faster, and more enjoyable. Dive in and discover books that truly match your taste!
    </p>
    {/* tabs with contents */}
    <div className="md:px-40">
      {/* tabs */}
      <div className="flex justify-center items-center my-8 font-medium text-lg">
        <p onClick={()=>setTab(1)} className={tab==1?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer':'border-gary-200 border-b p-4 cursor-pointer'}>Sell Books</p>
        <p onClick={()=>setTab(2)} className={tab==2?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer':'border-gary-200 border-b p-4 cursor-pointer'}>Book Status</p>
        <p onClick={()=>setTab(3)} className={tab==3?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer':'border-gary-200 border-b p-4 cursor-pointer'}>Purchase History</p>
      </div>
      {/* contents */}
      {
        tab==1 &&
        <SellBook/>
      }
      {
        tab==2 &&
        <BookStatus/>
      }
      {
        tab==3 &&
        <Purchase/>
      }
    </div>
    <Footer/>
    </>
  )
}

export default Profile