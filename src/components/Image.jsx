import React from 'react'

const Image = ({
    className = '',
    imageSrc,
    width = "20px"
}) => {
  return (
    <div className={`${className}`}>
        <img src={imageSrc} className={`${width}`}></img>
    </div>
  )
}

export default Image