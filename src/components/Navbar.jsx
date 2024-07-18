import React from 'react'


const Navbar = () => {
  return (
    <div className='h-[40px] sm:h-[60px] border-2 rounded-md border-black w-screen bg-gradient-to-b from-purple-900 via-purple-500 to-purple-300 flex absolute top-0 gap-5 p-4  text-center justify-center'>
      <div className="flex gap-2 items-center  " >
        
         <img className= "  h-[50px] w-[45px] " src="src\assets\keet.svg " alt="" />
         <div className="flex font-bold text-black text-lg ">
          Keet - Copyright Free Images  
         </div>
        
      </div>
      
    </div>
  )
}

export default Navbar
