import React, { useEffect, useState } from 'react'
import HeadContact from '../components/HeadContact'
import Loader2 from './Loader2'

const Contact = () => {

    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoader(false)
        }, 1600);
    })

    return (
        <>
            {isLoader ? <>< Loader2 /> </> : <>

                <HeadContact />


            </>}
        </>
    )
}

export default Contact