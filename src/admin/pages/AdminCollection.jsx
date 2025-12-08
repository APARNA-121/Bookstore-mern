import React, { useState } from 'react'
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";
import Footer from "../../components/Footer";

function AdminCollection() {

const [tab,setTab] = useState(1)

  return (
     <>
    <AdminHeader/>
    <div className="md:grid grid-cols-5">
      <div className="col-span-1">
        <AdminSideBar/>
      </div>
      <div className="col-span-4 p-10">
        <h1 className="my-10 text-center text-2xl font-bold">
          All Collections
        </h1>
        {/* tabs */}
        <div className="flex my-10 justify-center items-center">
          <p onClick={()=>setTab(1)} className={tab==1?"text-blue-600 font-bold border-gray-200 text-xl border-t border-l border-r p-3 cursor-pointer":"border-b font-bold border-gray-200 text-xl p-3"}>Books</p>
          <p onClick={()=>setTab(2)} className={tab==2?"text-blue-600 font-bold border-gray-200 text-xl border-t border-l border-r p-3 cursor-pointer":"border-b font-bold border-gray-200 text-xl p-3"}>Users</p>
        </div>
        {/* tab contents */}
        {
          tab==1 &&
          <div className='md:grid grid-cols-4 w-full my-5'>
            {/* duplicate book card */}
            <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/1280x1280/products/6929/17271/Weir_Project_Hail_Mary_cover__95757.1687451127.jpg?c=1" alt="book" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                  <h4 className="text-lg">title</h4>
                  <h4>$ price</h4>
                   <div className='grid mt-3 w-full'> <button className="bg-green-600 p-2 text-white">APPROVE</button></div>
                </div>
              </div>
                {/* duplicate book card */}
            <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/1280x1280/products/6929/17271/Weir_Project_Hail_Mary_cover__95757.1687451127.jpg?c=1" alt="book" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                  <h4 className="text-lg">title</h4>
                  <h4>$ price</h4>
                </div>
              </div>
                {/* duplicate book card */}
            <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/1280x1280/products/6929/17271/Weir_Project_Hail_Mary_cover__95757.1687451127.jpg?c=1" alt="book" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                  <h4 className="text-lg">title</h4>
                  <h4>$ price</h4>
                </div>
              </div>
                {/* duplicate book card */}
            <div className="shadow rounded p-3 mx-4">
                <img width={'300px'} height={'300px'} src="https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/1280x1280/products/6929/17271/Weir_Project_Hail_Mary_cover__95757.1687451127.jpg?c=1" alt="book" />
                <div className="flex justify-center items-center flex-col mt-4">
                  <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                  <h4 className="text-lg">title</h4>
                  <h4>$ price</h4>
                 <div className='grid mt-3 w-full'> <button className="bg-green-600 p-2 text-white">APPROVE</button></div>
                </div>
              </div>
          </div>
        }
        {
          tab==2 &&
          <div className='md:grid grid-cols-3 w-full my-5'>
            {/* duplicate users card */}
            <div className="rounded bg-gray-200 p-3 m-2 text-wrap">
              <p className="text-red-600 font-bold">ID : drd1230e112</p>
              <div className="flex items-center text-wrap mt-2">
                {/* user image */}
                <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://www.cecyteo.edu.mx/Nova/App_themes/Site2015/assets/admin/pages/media/profile/profile_user.jpg" alt="user" />
                {/* content */}
                <div className="ms-5">
                  <h4 className="font-bold text-2xl text-blue-800">Name</h4>
                  <p>demo@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminCollection