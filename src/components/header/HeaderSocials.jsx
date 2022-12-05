import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
 
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aniket-chakkarwar-a7558a1ab/" target="_blank"><BsLinkedin/></a>
        <a href="https://leetcode.com/Aniket_Chakkarwar/" target="_blank"><SiLeetcode/></a>
        <a href="https://github.com/Aniket-222000" target="_blank"><BsGithub/></a>
    </div>

  )
}

export default HeaderSocials
