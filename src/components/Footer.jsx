import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="text-center">
        <div className="logo">
          <a href="/">
            <img src="img/footer.png" alt="" />
          </a>
        </div>
        <a className='d-flex align-items-center justify-content-center' style={{color: '#fff'}}>Сделано с любовью ♥</a>
      </div>
    </div>
  )
}

export default Footer