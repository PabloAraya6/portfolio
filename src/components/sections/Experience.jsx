import React, { useEffect, useState } from 'react'
import '/src/stylesheets/sections/Experience.css' // Asegúrate de crear este archivo CSS

const Experience = () => {
  const [experience, setExperience] = useState({ years: 0, months: 0, days: 0 })

  useEffect(() => {
    const calculateExperience = () => {
      const startDate = new Date('2019-12-01')
      const now = new Date()
      let years = now.getFullYear() - startDate.getFullYear()
      let months = now.getMonth() - startDate.getMonth()
      let days = now.getDate() - startDate.getDate()

      if (days < 0) {
        months--
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate()
      }

      if (months < 0) {
        years--
        months += 12
      }

      setExperience({ years, months, days })
    }

    calculateExperience()
    const interval = setInterval(calculateExperience, 86400000) // Actualizar cada día

    return () => clearInterval(interval) // Limpieza al desmontar el componente
  }, [])

  return (
    <section className='Experience section' id='experience'>
      <div className='container'>
        <h2 className='Experience-h2 section-head'>Experience.</h2>
        <div className='container-sm'>
          <h3 className='Experience-h3'>Professional Journey</h3>
          <p className='Experience-description'>
            I have been working professionally in the field since
          </p>
          <p className='Experience-time'>
            <span>{experience.years}</span> years,
            <span>{experience.months}</span> months, and
            <span>{experience.days}</span> days.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience
