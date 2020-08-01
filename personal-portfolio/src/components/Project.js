import React from 'react'
import { projectData } from '../projectData'

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currProjects: projectData,
    }
    // console.log('projectData:', projectData)
    // console.log('currProjects: ', this.state.currProjects)
    this.desc = ''
  }

  onSelectProjects(fieldName) {
    let newList = []
    if (fieldName.toString() === 'All') {
      for (let i = 0; i < projectData.length; i++) {
        newList.push(projectData[i])
      }
    } else {
      for (let i = 0; i < projectData.length; i++) {
        if (projectData[i].snippet.field === fieldName.toString()) {
          newList.push(projectData[i])
        }
      }
    }

    this.setState({
      currProjects: newList,
    })
  }

  render() {
    return (
      <div className="project_compo">
        {/* <h3 className="Project-header">PROJECT</h3> */}
        <nav className="projectbar">
          <ul className="projectbar-menu">
            <li
              className="All"
              onClick={(e) => {
                this.onSelectProjects(e.target.className)
              }}
            >
              All
            </li>
            <li
              className="DeepLearning"
              onClick={(e) => {
                this.onSelectProjects(e.target.className)
              }}
            >
              Deep Learning
            </li>
            <li
              className="FrontEnd"
              onClick={(e) => {
                this.onSelectProjects(e.target.className)
              }}
            >
              Front-end
            </li>
            <li
              className="BackEnd"
              onClick={(e) => {
                this.onSelectProjects(e.target.className)
              }}
            >
              Back-end
            </li>
            <li
              className="BrainCognitive"
              onClick={(e) => {
                this.onSelectProjects('BrainCognitive')
              }}
            >
              Brain-Cognitive Science
            </li>
          </ul>
        </nav>
        <nav className="projectcontent">
          {this.state.currProjects.map((project) => (
            <div className="each-project">
              {/* <img className="project-image" src={project.snippet.thumbnails.default.url}></img> */}
              <a
                className="project-image"
                style={{
                  backgroundImage: 'url(' + project.snippet.thumbnails.default.url + ')',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
                href={project.snippet.thumbnails.default.post}
                target="_blank"
              ></a>
              <div className="project-item">
                <div className="project-item-title">{project.snippet.title}</div>
                <div className="project-item-desc">{project.snippet.description}</div>
              </div>
              {/* <a
                className="project-page"
                href={project.snippet.thumbnails.default.post}
                target="_new"
              ></a> */}
            </div>
          ))}
        </nav>
      </div>
    )
  }
}

export default Project
