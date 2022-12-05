import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    <header>
        <div className="container header__container">

          <h5>Hello I'm</h5>
          <h2>Aniket Chakkarwar</h2>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="container about__container">

<div className="me">
  <div className="me-image">
    <img src={ME} alt="Me Image"/>
  </div>
</div>
</div>


{/* 
          <div className="me">
            <img src={ME} alt="me"/>
          </div> */}

          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header