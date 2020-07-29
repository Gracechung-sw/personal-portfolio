import React from 'react'

import Nav from './Nav'
import About from './About'
import Project from './Project'
import Blog from './Blog'
import Footer from './Footer'

import '../App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="total">
        <div>
          <div className="intro">
            <Nav />
          </div>
        </div>

        <body>body</body>
        <button>
          <Footer>Github, Blog, Gmail</Footer>
        </button>
      </div>
    )
  }
}

export default App

{
  /* <BrowserRouter>
            <div>
              <Link to="/About">About</Link>
              <Link to="/Project">Project</Link>
              <Link to="Blog">Blog</Link>
              <Link to="Contact">Contact</Link>
            </div>
    </BrowserRouter>  */
}
