import React from 'react'
import { projectData } from '../projectData'

const Project = () => (
  <div className="project_compo">
    {/* <h3 className="Project-header">PROJECT</h3> */}
    <nav className="projectbar">
      <ul className="projectbar-menu">
        <li className="project-menu">Deep Learning</li>
        <li className="project-menu">Front-end</li>
        <li className="project-menu">Back-end</li>
        <li className="project-menu">Brain-Cognitive Science</li>
      </ul>
    </nav>
    <nav className="projectcontent">
      {projectData.map((project) => (
        <div className="each-project">
          <img className="project-image" src={project.snippet.thumbnails.default.url} />
          <div className="project-item">
            <div className="project-item-title">{project.snippet.title}</div>
            <div className="project-item-desc">{project.snippet.description}</div>
          </div>
          <a href={project.snippet.thumbnails.default.post} target="_new"></a>
        </div>
      ))}
    </nav>
  </div>
)

export default Project
