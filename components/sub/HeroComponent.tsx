'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import mainIcon from '../../public/mainIconsdark.svg'

function HeroComponent() {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className='welcome-box py-[8px] px-[7px] flex border border-[#7042f88b] opacity-[0.9]'>
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>Fullstack Developer Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col text-white max-w-[600px] h-auto font-bold text-6xl w-auto gap-6'
        >
          <span>
          Providing
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
          project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          I am a Full Stack Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        >
Learn More!
        </motion.a>
      </div>
      <motion.div
      variants={slideInFromRight(0.8)}
      className='w-full h-full items-center flex justify-center'
      >
        <Image src={mainIcon} alt="work icons" height={650} width={650}/>
      </motion.div>

    </motion.div>
  )
}

export default HeroComponent