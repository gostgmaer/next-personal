import React from 'react'

const WorkExperiance = ({data}) => {
  return (
    <div className='workExperiance'>
        <h5 className="position">{data.position}</h5>
        <h6 className="company">{data.company}</h6>
        <p className="timeline">{data.start_time} - {data.end_time}</p>
        <ul><li>Designing and developing user-friendly websites basis client requirements</li></ul>
    </div>
  )
}

export default WorkExperiance