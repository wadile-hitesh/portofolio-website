import React from 'react'
import { Input, Image } from '../index'
import Illustration from '../../assets/Illustration.svg'

const Contact = () => {
    return (
        <div className='w-full h-100vh static flex items-start'>

            <div className='flex m-auto my-10 bg-blue-rgba box-border backdrop-blur w-4/6 h-3/4 rounded-[30px] text-white'>
                <div className='w-1/2 text-white mt-6'>
                    <div className='w-1/2 mx-auto'>

                    <h3 className='text-xl font-bold'>Get in Touch</h3>
                    <p className='my-4'>I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.</p>
                    </div>
                </div>
                <div className='w-1/2 text-white block mt-6'>
                    <h3 className='text-xl font-bold'>Send me a Message</h3>
                    <form className=''>
                        <Input type='text' className='' placeholder='Name' />
                        <Input type='email' className='' placeholder='Email Address' />
                        <Input type='text' className='' placeholder='Subject' />
                        <textarea rows="5" className=" w-3/4 rounded-[10px] placeholder-white font-medium  items-start shadow-in backdrop-blur mt-5 py-[10px] px-5 bg-white-rgba text-white box-border" placeholder="Write your thoughts here..." />
                        
                        <button className='px-10 my-3 py-2 rounded-xl bg-gradient-to-r from-violetPink to-darkBlue'>Send Message</button>
                        
                            
                    </form>
                </div>
            </div>
            <Image className="absolute right-0 top-96 z-[-1]" imageSrc={Illustration} />
        </div>

    )
}

export default Contact