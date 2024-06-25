import React from 'react'
import "../Navbar/Navbar.css"
import logo from "../../assets/logo.png"

export default function Navbar() {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button>Contact us</button></li>
        </ul>
    </nav>
  )
}
