import React from 'react'
import HomeHeader from '../Components/HomeHeader'
import HomeCatalog from '../Components/HomeCatalog'
import Primushestva from '../Components/Primushestva'
import SectionForm from '../Components/SectionForm'
import FAQ from '../Components/FAQ'

export default function Home() {
  return (
    <div className='Home'>
      <HomeHeader/>
      <HomeCatalog/>
      <Primushestva/>
      <SectionForm/>
      <FAQ/>
    </div>
  )
}
