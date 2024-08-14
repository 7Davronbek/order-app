import React, { useEffect, useState } from 'react'
import HeadAbout from '../components/HeadAbout'
import Loader2 from './Loader2';

const About = () => {

    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoader(false)
        }, 1600);
    })
    return (
        <>
            {isLoader ? <>< Loader2 /> </> : <>
            
            <HeadAbout />

            </>}

        </>
    )
}

export default About