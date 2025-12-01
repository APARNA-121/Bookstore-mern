import React, { useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
  const [offcanvasStatus,setOffcanvasStatus] = useState(false)
  return (
    <div>
        <button onClick={()=>setOffcanvasStatus(true)} className="flex items-center text-blue-600 border p-2 rounded hover:text-white hover:bg-blue-600">Edit <FaEdit className='ms-3'/></button>
        {/* offcanvas */}
       {
        offcanvasStatus &&
         <div>
            <div className="fixed inset-0 bg-gray-500/75 z-50 w-full h-full"></div>
            <div className="bg-white h-full w-90 z-52 fixed top-0 left-0">
                {/* header */}
                <div className="bg-black p-3 flex justify-between text-white">
                  <h3 className="text-xl">Update profile</h3>
                  <button onClick={()=>setOffcanvasStatus(false)}><FaX/></button>
                </div>
                {/* body */}
                <div className="flex justify-center items-center flex-col mt-10 mb-5">
                  {/* image */}
                  <label htmlFor="uploadImg">
                    <input type="file" id='uploadImg' hidden />
                    <img style={{width:'150px',height:'150px',borderRadius:'50%'}} src="https://www.cecyteo.edu.mx/Nova/App_themes/Site2015/assets/admin/pages/media/profile/profile_user.jpg" alt="profile" />
                  </label>
                  <button style={{marginTop:'-20px'}} className="bg-yellow-300 p-2 text-white rounded"><FaPen/></button>
                  {/* name */}
                  <div className="mb-3 mt-10 w-full px-5">
                    <input type="text" placeholder='Username' className="border border-gray-200 p-2 rounded w-full" />
                  </div>
                  {/* password */}
                  <div className="mb-3 w-full px-5">
                    <input type="text" placeholder='Password' className="border border-gray-200 p-2 rounded w-full" />
                  </div>
                  <div className="mb-3 w-full px-5">
                    <input type="text" placeholder='Confirm Password' className="border border-gray-200 p-2 rounded w-full" />
                  </div>
                  {/* bio */}
                   <div className="mb-3 w-full px-5">
                    <input type="text" placeholder='Bio' className="border border-gray-200 p-2 rounded w-full" />
                  </div>
                  {/* button */}
                  <div className="mb-3 flex justify-end px-5 w-full mt-5">
                    <button className="px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600">RESET</button>
                     <button className="px-3 py-2 rounded border bg-green-600 text-white hover:bg-white hover:border-green-600 hover:text-green-600">UPDATE</button>
                  </div>
                </div>
            </div>
        </div>
       }
    </div>
  )
}

export default Edit