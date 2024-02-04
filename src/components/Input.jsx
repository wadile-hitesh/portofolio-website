import React from 'react'

const Input = ({
    className = '',
    ...props
}) => {
  return (
    <div> 
      <input className={`${className} w-3/4 rounded-[10px] placeholder-white font-medium  items-start shadow-in backdrop-blur mt-5 py-[10px] px-5 bg-white-rgba text-white box-border`} {...props} />
    </div>
  )
}

export default Input