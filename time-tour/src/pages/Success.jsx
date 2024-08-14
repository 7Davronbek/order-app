import React, { useEffect, useState } from 'react'
import { getText } from '../locales'
import { useNavigate } from 'react-router-dom';
import Home from './Home';



const Success = () => {

    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoader(false)
        }, 4000);
    })

    return (
        <>
            {isLoader ? <><div className="success">{getText("card_7")}</div></> : <>
                <Home />
            </>}

        </>
    )
}

export default Success