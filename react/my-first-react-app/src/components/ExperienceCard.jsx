import React from 'react'

export default function ExperienceCard({ experience }) {
  return (
    <div className='experienceCard'>
      <div className='row'>
        <p className='text'>{experience.company}</p>
        <div className='date'>
          <p className='text'>{experience.dateFrom}- </p>
          <p className='text'>{experience.dateTo}</p>
        </div>
        
      </div>
      <p className='position text'>{experience.position}</p>
      <p className=''>{experience.duty}</p>
    </div>
  )
}
