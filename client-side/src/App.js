import React from 'react'
import { Root, Routes } from 'react-static'
import { Link, Router } from '@reach/router'
// import Dynamic from 'containers/Dynamic'

import logo from 'img/icon-sprout.png'

import 'bootstrap/dist/css/bootstrap.css';
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
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            {/* <Dynamic path="dynamic" /> */}
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
