import  { useEffect, useState } from 'react'
import Header from '../components/Header'
import HeadPro from '../components/HeadPro'
import HeadPopular from '../components/HeadPopular'
import HeadAbout from '../components/HeadAbout'
import HeadInfo from '../components/HeadInfo'
import HeadContact from '../components/HeadContact'
import Loader2 from './Loader2'
import Loader from '../components/Loader'

const Home = () => {

  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false)
    }, 1600);
  })


  return (
    <>
      {isLoader ? <>< Loader2 /> </> : <>
        <Loader />
        <Header />
        <HeadPro />
        <HeadPopular />
        <HeadAbout />
        <HeadInfo />
        <HeadContact />
      </>}

    </>
  )
}

export default Home