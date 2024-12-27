import React from 'react'
import Results from '../components/Home/Results'
import SiteLinks from '../components/Home/SiteLinks'
import HeaderCarusel from '../components/HeaderCarusel'

export default function Home() {
  return (
    <div className='Home'>
      <HeaderCarusel/>    
      <Results/>          
      <SiteLinks/>
    </div>
  )
}
