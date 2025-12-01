import React from 'react'

function BookStatus() {
  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
        {/* book div duplicate */}
        <div className="bg-gray-200 p-5 rounded">
            <div className="md:grid grid-cols-[3fr_1fr]">
                <div>
                    <h2 className='text-2xl'>Title </h2>
                    <h3 className="text-xl">Author</h3>
                    <h4 className="text-lg text-red-500">$ 400</h4>
                    <p className="text-justify">Abstract</p>
                    <div className="flex mt-5">
                        {/* pending */}
                        <img width={'130px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending" />
                        {/* approved */}
                         <img width={'100px'} src="https://pngimg.com/d/approved_PNG13.png" alt="approved" />
                        {/* sold */}
                         <img width={'90px'} src="https://static.vecteezy.com/system/resources/previews/021/432/975/non_2x/sold-out-grunge-rubber-stamp-free-png.png" alt="sold" />
                    </div>
                </div>
                 <div className="px-4 mt-4 md:mt-0">
                        <img className='w-50' src="https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg" alt="book" />
                        <div className="flex justify-end"><button className="p-2 bg-red-600 text-white mt-5">DELETE</button></div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default BookStatus