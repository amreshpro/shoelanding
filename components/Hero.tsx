"use client"


import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Hero = () => {

    const isDarkModeEnable= useSelector((state) => state.darkMode)

  return (
    <div  className={`${
        isDarkModeEnable ? "DarkColor" : "LightColor"
      }  h-screen flex justify-between px-2 py-2  `}>
        
        <div className="text-content w-1/2 flex flex-col gap-5 px-8 py-4 sm:px-2 ">
<h1 className='text-xl font-semibold '>Nike
</h1>
<p> Nike is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion</p>
      <Link href="/" className={`DarkButton m-1 px-4 py-4 sm:text-xl sm:py-2 sm:px-2 text-2xl`}>Shop Now</Link>
        </div>
<div className="image">
    <img src="/shoe1.jpeg" alt="shoe"  className='w-[450px] h-[450px] rounded-full' />
</div>



        </div>
  )
}
export default Hero