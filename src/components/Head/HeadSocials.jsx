import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/jha-nikita' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/NikitaJhaOfficial' target='_blank'><BsGithub/></a>
        {/* <a href='https://www.instagram.com/n.i.k.i.t.a.j.h.a/' target='_blank'><BsInstagram/></a> */}
    </div>
    
  )
}

export default HeaderSocials