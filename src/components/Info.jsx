import React from 'react'

const Info = () => {
  return (
    <div className='text-white font-bold font-sans justify-center flex w-96 m-36 p-4 text-4xl flex-wrap'>
        <div className='' >
            <p>Hi, I am Hitesh Wadile</p>
        </div>
        <div>
            <p>Full Stack Developer Based in India</p>
        </div>
        <div className='flex items-center text-sm py-8'>
              <button className='px-10 m-3 py-2 bg-slate-700 rounded-full'>Hire Me</button>
              <button className='px-10 m-3 py-2 rounded-full bg-gradient-to-r from-violetPink to-darkBlue'>Dowload Cv</button>
        </div>


    </div>
  )
}

export default Info