import React from 'react'
import Nav from './Nav'
import About from './About'
import Project from './Project'
import Blog from './Blog'
import Footer from './Footer'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

const Linkbar = () => (
  <nav className="linkbar">
    <div>
      <BrowserRouter>
        <ul className="linkbar_menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Project">Project</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        {/* 위에서 Link까지 하면 주소창에 해당 요청이 보내진다. (그리고 그게 url로 보인다.)
        이제 아래에서 Switch와 그 안에 Route를 사용해서 이 요청으 받아야한다.  */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Project" component={Project}></Route>
          <Route path="/Blog" component={Blog}></Route>
          <Route path="/Contact" component={Footer}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  </nav>
)

function Home() {
  return <div>This is Home</div>
}

export default Linkbar
