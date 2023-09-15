import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header >
            <div className="container flexSB">
                <nav className='flexSB navbar'>
                    <div className="logo">
                        <img src="./assests/logo.png" alt="" className="header_logo" />
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

    )
}

export default Header;
