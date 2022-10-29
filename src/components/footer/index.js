import React from 'react'
import { Link } from "react-router-dom";

//styles
import './style.css'
import fabIcon from "../../assets/social/facebook-white.svg"
import twitterIcon from "../../assets/social/twitter-white.svg"
import instaIcon from "../../assets/social/instagram-white.svg"
import appStore from '../../assets/store/app-store.svg'
import playStore from '../../assets/store/play-store.svg'
import windowStore from '../../assets/store/windows-store.svg'

export default function Footer() {
  const menu = [
    { id: 1, name: "Home |", path: "/" },
    { id: 2, name: "Term and Conditions |", path: "/" },
    { id: 3, name: "Privacy Policy |", path: "/" },
    { id: 4, name: "Collection Statement |", path: "/" },
    { id: 5, name: "Help |", path: "/" },
    { id: 6, name: "Manage Account", path: "/" }

  ]
  return (
    <div className='footer-container'>
      {/* menu list section */}
      <div className='menu-links-footer'>
        {menu.map((el, index) => {
          return (
            <div key={el.id} >
              <Link style={{ textDecoration: "none", color: "#fff", margin: "0px 5px" }} to={el.path}>{el.name}</Link>
            </div>
          )
        })}
      </div>

      {/* copyright section */}
      <p className='copyright'>Copyright © 2016 DEMO Streaming. All rights reserved.</p>

      <div className='social-store'>
        {/* social media */}
        <div className='social-icons'>
          <img src={fabIcon} width="10px" alt="fb" />
          <img style={{ margin: "0px 10px" }} src={twitterIcon} width="20px" alt="twitter" />
          <img src={instaIcon} width="20px" alt="instagram" />
        </div>
        {/* app store */}
        <div className='play-store'>
          <img src={appStore} width="70px" alt="app" />
          <img style={{ margin: "0px 10px" }} src={playStore} width="70px" alt="play" />
          <img src={windowStore} width="60px" alt="window" />
        </div>
      </div>
    </div>
  )
}
