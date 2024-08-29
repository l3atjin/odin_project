import React from 'react'
import ExperienceCard from './ExperienceCard'

export default function ExperienceList({ experiences }) {
  return (
    <div className='experiences'>
      <ul>
        {experiences.map((experience, idx) => {
          return <ExperienceCard key={idx} experience={experience}/>
        })}
      </ul>
    </div>
  )
}
