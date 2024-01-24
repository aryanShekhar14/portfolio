import React from 'react'
import Hero from '../assets/heroImage.png'
import { TbArrowRightCircle } from 'react-icons/tb'
import { Link } from 'react-scroll'


const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-6xl font-bold text-white'>
            I'm a Software Engineer
          </h2>
          <p className=' text-gray-500 py-4 max-w-md'>
            A highly motivated final year student pursuing Bachelor of Technology degree in Computer Science from VIT Vellore.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-purple-950 to-cyan-900 cursor-pointer' >Portfolio<span className='px-2 group-hover:rotate-90 duration-300'>
              <TbArrowRightCircle size={25} />
            </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={Hero} alt="profile"
            className=' rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  )
}

export default Home



