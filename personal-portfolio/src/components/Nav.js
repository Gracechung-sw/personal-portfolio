import React from 'react'
import Linkbar from './Linkbar'
import { Carousel } from 'react-responsive-carousel'
import { navData } from '../navData'
// import {projectData} from '../projectData'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currPage: navData[0],
    }
    console.log('currPage: ', this.state.currPage)
    this.i = 0
  }

  changeNextPage() {
    setInterval(this.setState({ currPage: navData[this.i++] }), 100)
    if (this.i >= navData.length) {
      this.i = 0
    }
  }
  changePrePage() {
    setInterval(this.setState({ currPage: navData[this.i--] }), 100)
    if (this.i <= 0) {
      this.i = 0
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="slide-container">
          <ul className="mySlides">
            <li className={this.state.currPage.About.imageName}>
              <h1 className="introduction"> {this.state.currPage.About.intro}</h1>
            </li>
          </ul>
          <a
            href="#"
            id="prev"
            onClick={() => {
              console.log('onLoad')
              this.changePrePage()
            }}
          ></a>
          <a
            href="#"
            id="next"
            onClick={() => {
              console.log('onLoad')
              this.changeNextPage()
            }}
          ></a>
        </div>

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
