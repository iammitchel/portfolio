
import React from 'react';
import './Skills.css'

const frontendSkills=[
     {
        title: 'HTML',
        width: '85%',
        percentage: '85%'
    },

     {
        title: 'CSS',
        width: '85%',
        percentage: '85%'
    },

    {
        title: 'JavaScript',
        width: '65%',
        percentage: '65%'
    },

     {
        title: 'Reactjs',
        width: '65%',
        percentage: '65%'
    },
]

const Skills = () => {
  return <div className="skills__wrapper d-flex gap-5">
      <div className="frontend__skill w-50">
          {
          frontendSkills.map((item, index)=>(
             <SkillItem key={index} title={item.title} percentage={item.percentage} />
          ))
}
      </div>
  </div>
}

const SkillItem = ({title, percentage})=>{
    return <div className="skill__data mb-3">
                  <div className="skill__title d-flex align-items-center justify-content-between">
                      <h6>{title}</h6>
                      <span>{percentage}</span>
                  </div>
                  <div className="skill__bar">
                      <span className="skill__bar-percentage" style={{width: `${percentage}`}}></span>
                  </div>
              </div>
}

export default Skills