import React, { useState } from 'react'
import Icon from '/src/components/elements/Icon.jsx'
import '/src/stylesheets/elements/List.css'

const List = ({ name }) => {
  const [visibleDetail, setVisibleDetail] = useState('')

  const toggleDetails = (id) => {
    setVisibleDetail(visibleDetail === id ? '' : id)
  }

  return (
    <div className='List'>
      <h3 className='List-name'>{name}</h3>
      <div className='timeline-container'>
        <div
          className='timeline-block'
          onClick={() => toggleDetails('xepelin-details')}
        >
          <h2>Software Engineer SSR at Xepelin</h2>
          <span className='timeline-date'>Jan 2022 - Present</span>
          <div
            id='xepelin-details'
            className='details'
            style={{
              display: visibleDetail === 'xepelin-details' ? 'block' : 'none',
            }}
          >
            <p>React, TypeScript, Redux, Material UI, Jest</p>
          </div>
        </div>
        <div
          className='timeline-block'
          onClick={() => toggleDetails('mggroup-details')}
        >
          <h2>Full Stack Developer at MG Group</h2>
          <span className='timeline-date'>Sep 2021 - Jan 2022</span>
          <div
            id='mggroup-details'
            className='details'
            style={{
              display: visibleDetail === 'mggroup-details' ? 'block' : 'none',
            }}
          >
            <p>
              .NET CORE 3.1, C#, Node.js, React, AWS, Serverless, GitHub Actions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
/* <ul className='List-items'>
{items.map((item, index) => (
  <li className='List-item' key={index}>
    <span className='List-tooltip'>{item.name}</span>
    <Icon icon={item.icon} />
  </li>
))}
</ul> */

export default List
