import React from 'react'

const Footer = () => (
  <div className="footbar_logo">
    {console.log('footer')}
    {/* github icon */}
    <a href="https://github.com/Gracechung-sw">
      <i className="fab fa-github-square"></i>
    </a>

    {/* blog icon */}
    <a href="https://libertegrace.tistory.com/">
      <i className="fab fa-blogger"></i>
    </a>

    {/* gmail icon */}
    <a href="mailto:hjngy0511@gmail.com" title="email contact">
      <i className="fas fa-envelope-square"></i>
    </a>
  </div>
)

export default Footer
