import React from 'react'
import { Link } from "react-router-dom";

//style
import './style.css'

export default function Header() {
  return (
    <div className='header-container'>
      <div>
        <Link to="/" className='title'>
          DEMO Streaming
        </Link>
      </div>
      <div>
        <Link to="/" className="login">Login</Link>
        <Link to="/" className="trial">Start your free trial</Link>
      </div>
    </div>
  )
}
