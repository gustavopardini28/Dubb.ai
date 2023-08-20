'use client'
import { InputContext } from '@/contexts/inputContext'
import { useContext, useState } from 'react'
import Image from 'next/image'

import { Button, LinkSection, UploadSection, ResponseData, Loading } from '@/components'
import Svg from '../../assets/mega-creator.svg'

import './globals.css'

export default function Home() {

  const { response } = useContext(InputContext);

  const [section, setSection] = useState(1)
  const onSelectLink = () => {
    setSection(1)
  }

  const onUploadArchive = () => {
    setSection(2)
  }

  return (
    <div className='flex w-screen h-screen'>
      {!response && (
        <>
          <Image className='absolute inset-x-36 inset-y-16 '
            src={Svg}
            alt='Background Image'
            width='600'
            height='600'

          />
          <div className='h-24 w-24 absolute bg-gradient-to-t from-gray-400 via-gray-100 to-gray-600 rounded-full blur-3xl ' />
          <div className='flex justify-between w-93.75 m-auto z-10 '>
            <section className='flex flex-col ps-16 translate-y-60 text-gray-400'>
              <span className='inline-block font-bold text-8xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-800 to-emerald-500'>Mama.AI</span>
              <div className='flex '>
                <p className='text-2xl font-medium'>
                  Use that app to convert
                  <span className='m-1 text-white p-1 font-bold text-lg rounded-md bg-red-600'>YouTube</span>
                  videos and files (.mp3,.mp4,.wav) <br></br> into translated audio  </p>
              </div>
            </section>
            <main className='animate-fade-right animate-once animate-normal flex flex-col gap-4 w-72 h-60 items-center justify-center p-8 bg-gray-800 rounded-md '>
              <div className=''>
                {section === 1 ? <LinkSection /> : <UploadSection />}
              </div>
              <div className=' flex justify-between gap-4 p-auto'>
                <Button onClick={() => onSelectLink()}>
                  Link
                </Button>
                <Button onClick={() => onUploadArchive()} >
                  Upload
                </Button>
              </div>
            </main>
          </div>

        </>
      )}
      {response && (
        <ResponseData />
      )}
    </div>
  )

}
