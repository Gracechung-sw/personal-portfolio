import React from 'react'
import { projectData } from '../projectData'

const Project = () => (
  <div className="project_compo">
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
    <div> This is Project</div>
  </div>
)

export default Project
