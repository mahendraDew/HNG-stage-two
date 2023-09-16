import React from "react"
import { homeData } from "../../dummyData"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
            <div className='social'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-youtube'></i>
            </div>
            <ul className='flex'>
              <li>Conditions of use</li>
              <li>Privacy & Policy</li>
              <li>Press Room</li>
            </ul>
            <p>© 2021 MovieBox by Mahendra Dewangan</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
