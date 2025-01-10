import React from 'react'
import Header from '../Components/Header'
import GotovyProduct from '../Components/GotovyProduct'
import Partners from '../Components/Partners'
import Primushestva from '../Components/Primushestva'
import Form from '../Components/Form'
import HomeAbout from '../Components/HomeAbout'

export default function Home() {
  return (
    <div className='Home'>
      <Header/>
      <GotovyProduct/>
      <HomeAbout/>
      <Partners/>
      <Primushestva/>
      <Form/>
    </div>
  )
}
