import React from 'react'
import WorkExperiance from './WorkExperiance'
import { resumeContent } from '@/assets/data/mock'

const Rightcontent = () => {
  return (
    <div className="right flex-1">
    <div className="experiance">
      <h3 className="title">{resumeContent.experiance.title}</h3>
      <div className="content">
        {resumeContent.experiance.data.map((item) => (
          <WorkExperiance key={item.id} data={item} />
        ))}
      </div>
    </div>
    <div className="education">
    <h3 className="title">{resumeContent.education.title}</h3>
    <div className="content">
        {resumeContent.education.data.map((item) => (
          <WorkExperiance key={item.id} data={item} />
        ))}
      </div>
    </div>
    <div className="portfolio">
      <h3 className="title"></h3>
      <ul>
        <li></li>
      </ul>
    </div>
    <div className="referal">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
  )
}

export default Rightcontent