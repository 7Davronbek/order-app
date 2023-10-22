import React from 'react'
import Header from '../components/Header'
import HeadAuct from '../components/HeadAuct'
import HeadNews from '../components/HeadNews'
import HeadMessage from '../components/HeadMessage'
import HeadFoot from '../components/HeadFoot'

const Home = () => {
    return (
        <>
            <Header />
            <HeadAuct />
            <HeadNews />
            <HeadMessage />
            <HeadFoot />
        </>
    )
}

export default Home