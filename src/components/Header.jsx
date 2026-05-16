import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h2 >
            <Link to={"/"} className="title">Where in the world ??</Link>
         </h2>

        <p className='theme' >
         <i className="fa-solid fa-globe" style={{
            fontWeight:'bolder',
            cursor:'pointer',
            fontSize:'30px'
         }}></i>
          &nbsp;
        </p>
      </div>
    </header>
  )
}