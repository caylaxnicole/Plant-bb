import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.css';
import logo from 'img/icon-sprout.png'
import './app.css'

function App() {
  return (
    <Root>
      <nav>
        <div> Plant bb
          <img className='logo' src={logo} alt='plant logo'/>
        </div>
        <Link to="/">Home</Link>
        <Link to="/sign-up">Sign-up</Link>
        <Link to="/blog">Sign-in</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </Root>
  )
}

export default App
