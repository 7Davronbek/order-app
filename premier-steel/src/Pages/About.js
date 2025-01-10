import React from 'react'
import AboutHead from '../Components/About/AboutHead'
import AboutBlock from '../Components/About/AboutBlock'
import AboutBlock2 from '../Components/About/AboutBlock2'
import Partners from '../Components/Partners'
import Form from '../Components/Form'
import Personal from '../Components/About/Personal'

export default function About() {
  return (
    <div className='About'>
      <AboutHead/>
      <AboutBlock/>
      <AboutBlock2/>
      <Personal/>
      <Partners/>
      <Form/>
    </div>
  )
}
