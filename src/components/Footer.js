import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';
import '../styles/Footer.css';


function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://github.com/LinkinHuber'>
        <AiOutlineGithub />
        </a>
        <a href='https://www.linkedin.com'>
        <AiFillLinkedin />
        </a>
        <a href='https://stackoverflow.com/users/21368147/exzemd'>
        <BsStackOverflow />
        </a>
      </div>
    </div>
  )
}

export default Footer;
