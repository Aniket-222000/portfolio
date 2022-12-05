import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>

        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Freshers</small>
            </article>

            <article className="about__card">
              <FiUsers className='about_icon'/>
              <h5>Education</h5>
              <small>BE Computer Engineering</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>I am a coding enthusiast having problem solving skills with a good knowledge of 
            Data Structures & Algorithms, skilled in C++,Java,Docker,Jenkins,Kubernates. Solved more than 
            200+ Algorithmic problems. And highly interested in Web Development and Cloud Computing</p>    

          <a href='#contact' className='btn btn-primary'> Lets Talk</a>      
        </div>
      </div>

    </section>
  )
}

export default About