import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import Logo from '../../images/logo.png'

function Navbar() {
  const [nav, setNav]= useState(false)
  return (
    <header className={styles.navbar}>
      <div className="container dis-flex hspace vmiddle">
      <img src={Logo} alt="/" />
      <nav>
        <ul className={ nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
          <li>
            <a href="/">Learn More</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{marginTop:'6px'}}/>
          </li>
          <li>
            <AiOutlineUser size={25} style={{marginTop:'6px'}}/>
          </li>
        </ul>
      </nav>
      <div className={styles.mobile_btn} onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose size={25}/> :  <AiOutlineMenu size={25}/> }
      </div>
      </div>
      </header>
  )
}

export default Navbar