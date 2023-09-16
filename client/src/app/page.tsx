"use client"
import Image from 'next/image'
import Navbar from './components/navbar'
import Login from './components/forms/login'
import {useState} from 'react'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false)

  
  return(
      loggedIn ? <h1>Logged </h1> : <Login/>
  )

}
