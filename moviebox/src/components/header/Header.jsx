import React, { useState } from "react"
import "./header.css"

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      {/* <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='./images/logo.png' alt='' />
            </div>
         
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i class='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header> */}
      <header >
        <div className="container flexSB">
          <nav className='flexSB navbar'>
            <div className="logo">
              <img src="./images/assests/logo.png" alt="" className="header_logo" />
            </div>
            <div className="search-bar">
              <input type="text" placeholder='What do you want to watch?' />
              <i className="fa fa-search search-magnifying-glass" ></i>

            </div>
            <div className='flexSB menu'>
              <div className="signInBtn">
                <a href="/">Sign in</a>
              </div>
              <div>
                <button className='toggle'>
                  <i className='fa fa-bars'></i>
                </button>
              </div>
            </div>
          </nav>

        </div>
      </header>
    </>
  )
}

export default Header
