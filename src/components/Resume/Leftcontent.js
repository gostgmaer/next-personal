import { resumeContent } from '@/assets/data/mock'
import React from 'react'

const Leftcontent = () => {
  return (
    <div className="left flex-1">
    <div className="summery">
      <h4>Summery</h4>
      <p>{resumeContent.profile.summery}</p>
    </div>
    <div className="technical-skills">
      <h4>{resumeContent.technical_skills.title}</h4>
      <ul>
        {resumeContent.technical_skills.skills.map((skill) => (
          <li key={skill.id}>
            <span>{skill.skill}</span>
            <span>{skill.scale}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="professional-skills">
      <h4>{resumeContent.profession_skills.title}</h4>
      <ul>
        {resumeContent.profession_skills.skills.map((skill) => (
          <li key={skill.id}>
            <span>{skill.skill}</span>
            <span>{skill.scale}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="language-known">
      <h4>{"Language Known"}</h4>
      <ul>
        {resumeContent.profile.language.map((item) => (
          <li key={item.id}>
            <span>{item.language}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="Interest">
    <h4>Other Activity</h4>
      <ul>
        {resumeContent.others_activity.map((item) => (
          <li key={item.id}>
            <span>{item.activity}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default Leftcontent