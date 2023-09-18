"use client"
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/navbar'
import Login from './components/forms/signin'
import {useState, useEffect} from 'react'
import image1 from './assets/image1.jpg'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false)
  
  return(
    <section className='relative bg-gray-900 h-screen flex justify-center items-start'  >
        <Image className='absolute top-0 left-0  md:shrink-0' src={image1} alt='Decoration image' />
      

      <div className='absolute z-10 bg-yellow-500 content flex flex-col justify-items items-center gap-4 rounded-md p-12'>
        <h1 className='text-center inline text-yellow-400 rounded-md text-5xl bg-blue-700 p-1 font-bold uppercase'>
          SoccerBets
        </h1>
        <h2 className="font-bold text-md text-2xl text-gray-800 p-3" >Play with your friends and family</h2>

        <div>
          <h3>Content that we provide</h3>
          <div className='grid grid-cols-2 gap-4' >
            <div className='bg-gray-800 p-5 rounded-md text-lg'>
              
              
              
              Championships</div>
            <div className='bg-gray-800 p-5 rounded-md text-lg'>
              

              Times
            </div>
            <div className='bg-gray-800 p-5 rounded-md text-lg'>Jogadores</div>
            <div className='bg-gray-800 p-5 rounded-md text-lg'>Jogos</div>
          </div>
        </div>

        <Link href="/login" className="text-2xl bg-gray-800 p-5 w-50 rounded-full">Start now</Link>

      </div>
  
    </section>
  )

}
