import React from 'react'
import {Image} from '../index'
import FooterImage from '../../assets/Footer.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-footer-blue mt-48 w-full relative text-white '>
      <Image imageSrc={FooterImage} className='w-96 absolute z-[10] top-[-200px]'/>
      <div className='flex p-32 mt-40 justify-center'>
            <div className='p-4'>Home</div>
            <div className='p-4'>About Me</div>
            <div className='p-4'>Project</div>
            <div className='p-4'>Contact</div>
      </div>
      <div className='flex justify-center mx-5 my-5'>
        <hr className='w-11/12 bg-footer-rgba'/>
      </div>
      <div className='flex justify-center pb-7'>
          <p>Terms of Service - Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer