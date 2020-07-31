import React from 'react'
import { skillData } from '../skillData'

const SkillIntro = () => (
  <div className="skill_compo">
    {skillData.map((skill) => (
      <div className="each-skill">
        <div className="skill-image">
          <i className={skill.About.image}></i>
        </div>
        <div className="skill-item">
          <div className="skill-item-field">{skill.About.field}</div>
          <ul className="skill-item-skills">
            {skill.About.skills.map((tech) => (
              <li className="skill-item-skills-each">{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
)

export default SkillIntro
