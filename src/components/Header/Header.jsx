import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const navElements = [
    {
      title: "Home",
      to:""
    },
    {
      title: "About",
      to:""
    },
    {
      title: "My Projects",
      to:""
    },
    {
      title: "Contact",
      to:""
    }  
  ]

  return (
    <div className='text-white flex font-sans justify-center mt-2'>
      {navElements.map((item)=>(
        <div key={item.title} className='px-10 py-2 hover:bg-slate-700 hover:rounded-full hover:px-10 hover:py-2'>
          {/* <Link to=''> */}
            <ul>
              <li>{item.title}</li>
            </ul>
          {/* </Link> */}
        </div>
      ))
      }
  </div>
  )
}

export default Header