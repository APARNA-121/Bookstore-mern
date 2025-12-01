import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
   <div style={{height:'90vh'}} className='flex justify-center items-center flex-col'>
      <img width={'40%'} src="https://miro.medium.com/v2/resize:fit:1400/0*GUYQoLJ08bNdTigR.gif" alt="page not found" />
      <h4>Oh No !!!</h4>
      <h2 className='text-4xl font-bold'>Look Like You're Lost</h2>
      <p>The page you are looking for is not available</p>
      <button type='button' style={{width:'110px'}} className="bg-blue-400 text-white p-2 mt-5 rounded"><Link to={'/'} >Back Home</Link></button>
     
    </div>
  )
}

export default Pnf