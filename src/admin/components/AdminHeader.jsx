import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
  <>
  {/* Header upper part */}
    <div className='flex justify-between items-center p-3 md:px-20'>
      {/* logo with title */}
      <div className="flex items-center">
         <img width={'60px'} height={'60px'} src="https://cdn3d.iconscout.com/3d/premium/thumb/book-stack-3d-icon-png-download-6704029.png" alt="logo" />
         <p className='font-bold text-2xl'>BOOKSTORE</p>
      </div>
      {/* logout */}
      <button className="bg-black px-3 py-2 border rounded text-white flex items-center hover:bg-white hover:text-black"><FaPowerOff className='me-2'/>LOG OUT</button>
    </div>
    {/* header lower part */}
    <div className="bg-black p-2">
      <marquee><p className="text-white">Welcome, Admin! You're all set to manage and monitor the system. Let's get into work!</p></marquee>
    </div>
  </>
  )
}

export default AdminHeader