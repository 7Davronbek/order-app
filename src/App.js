import React from 'react'
import Cards from './components/Cards'
import Header from './components/Header'
import Order from './components/Order'
import Promokod from './components/Promokod'
import Individual from './components/Individual'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Order />
      <Promokod />
      <Cards />
      <Individual />
      <Footer />
    </>
  )
}

export default App