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
    <main>
      <section className='relative bg-gray-900 h-screen flex justify-center items-start'  >
          <Image className='absolute top-0 left-0  md:shrink-0' src={image1} alt='Decoration image' />
        
        <div className='absolute z-10 bg-yellow-500 content flex flex-col justify-items items-center gap-4 rounded-md p-12'>
          <h1 className='text-center inline text-gray-100 rounded-md text-5xl bg-gray-800 p-3 font-bold uppercase'>
            SoccerBets
          </h1>
          <h2 className="font-bold text-md text-2xl text-gray-800 p-3" >Play with your friends and family</h2>
          <p className="font-bold text-md text-2xl text-gray-800 w text-justify" style={{width:'50%'}} >
          Are you a die-hard football enthusiast seeking an all-in-one platform for the latest updates, insightful analysis, and interactive gaming experiences? Look no further than SoccerBets – your go-to app for all things football!
          </p>

          {/* <div>
            <h3>Content that we provide</h3>
            <div className='grid grid-cols-2 gap-4' >
              <div className='bg-gray-800 p-5 rounded-md text-lg'>
                <p className="text-center">Championships</p>
              </div>
              <div className='bg-gray-800 p-5 rounded-md text-lg'>
                <p className="text-center">Teams</p>
              </div>
              <div className='bg-gray-800 p-5 rounded-md text-lg'>
                <p className="text-center">Players</p>
              </div>
              <div className='bg-gray-800 p-5 rounded-md text-lg'>
              <p className="text-center" >Games</p>
              </div>
            </div>
          </div> */}

          <Link href="/login" className="text-2xl bg-green-700 hover:bg-green-600 p-5 w-100 rounded-md ">
            Learn more
          </Link>

        </div>
    
      </section>

      <section className="relative information bg-yellow-500 flex justify-center items-start h-[80vh]" >
            <div className='flex flex-col gap-5' >
              <h3 className="text-yellow-400 text-3xl font-bold text-center" >Content that we provide</h3>
              <div className='grid grid-cols-2 gap-4' >
                <div className='bg-yellow-400 p-5 rounded-md text-lg'>
                  <p className="text-center text-gray-900 font-bold">Championships</p>
                </div>
                <div className='bg-yellow-400 p-5 rounded-md text-lg'>
                  <p className="text-center text-gray-900 font-bold">Teams</p>
                </div>
                <div className='bg-yellow-400 p-5 rounded-md text-lg'>
                  <p className="text-center text-gray-900 font-bold">Players</p>
                </div>
                <div className='bg-yellow-400 p-5 rounded-md text-lg'>
                <p className="text-center text-gray-900 font-bold" >Games</p>
                </div>
              </div>
            </div>
      </section>
    </main>
  )

}
