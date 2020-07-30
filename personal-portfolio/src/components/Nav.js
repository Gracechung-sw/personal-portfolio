import React, { Component } from 'react'
import Linkbar from './Linkbar'
import { Carousel } from 'react-responsive-carousel'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="mySlides">
          <li className="brainSlide"></li>
          <li className="programmingSlide"></li>
          <li className="dataSlide"></li>
        </ul>

        <div className="navtitle">
          <div className="maintitle">Hyeonjeong Portfolio</div>
          <div className="sendMe">Resume sending</div>
        </div>

        <ul className="navlink">
          <Linkbar></Linkbar>
        </ul>
      </nav>
    )
  }
}

export default Nav
