'use client'
import { LinkSection, UploadSection } from '@/components'
import Svg from '../../assets/mega-creator.svg'
import cube from '../../assets/cube.svg'
import Image from 'next/image'
import { useState } from 'react'
import './globals.css'


export default function Home() {

  const [section, setSection] = useState(1)
  return (
    <div className='flex w-screen h-screen'>
      <Image className='absolute inset-x-36 inset-y-16 '
        src={Svg}
        alt='Background Image'
        width='600'
        height='600'

      />
      <div className='h-24 w-24 absolute bg-gradient-to-t from-gray-400 via-gray-100 to-gray-600 rounded-full blur-3xl ' />
      <div className='flex justify-between w-93.75 m-auto z-10 '>
        <section className='flex flex-col ps-24 translate-y-60 text-gray-400'>
          <span className='inline-block font-bold text-8xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-800 to-emerald-500'>Mama.AI</span>
          <div className='flex '>
            <p className='text-2xl font-medium'>
              Use that app to convert
              <span className='m-1 text-white p-1 font-bold text-lg rounded-md bg-red-600'>YouTube</span>
              videos and files (.mp3,.mp4,.wav) <br></br> into translated audio  </p>
          </div>
        </section>
        <main className='flex flex-col gap-4'>
          {section === 1 ? <LinkSection /> : <UploadSection />}
          <div className='flex justify-between mx-8'>
            <button className=' px-8 py-2 text-black bg-gray-500 border-2 hover:border-button-color transition-duration: 500ms rounded-full'>
              link
            </button>
            <button className='bg-gray-800 px-8'>
              upload
            </button>
          </div>
        </main>
      </div>
    </div >
  )
}
