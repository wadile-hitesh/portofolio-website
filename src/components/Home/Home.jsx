// import Header from "./index"
// import Footer from "./index"
import IllustrationTop from "../../assets/Illustrationtop.svg"
import IllustrationBottom from "../../assets/Illustrationbottom.svg"
import {Image,Header,Info} from '../index'
import React from 'react'

const Home = () => {
  return (
    <div className="static w-full overflow-hidden">
      <Image imageSrc={IllustrationTop} className="absolute p-0 top-0 left-0 z-0" width="w-72" />
      <Image imageSrc={IllustrationBottom} className="absolute p-0 bottom-0 right-0" width="w-[800px]" />
      <Header />
      <Info />
    </div>
  )
}

export default Home