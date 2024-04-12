import React, { useState } from 'react'
import Icon from '/src/components/elements/Icon.jsx'
import '/src/stylesheets/elements/List.css'

const List = ({ list, key }) => {
  const [visibleDetail, setVisibleDetail] = useState('')

  const toggleDetails = (id) => {
    setVisibleDetail(visibleDetail === id ? '' : id)
  }

  return (
    <div>
      <div key={key} className='timeline-container'>
        <div
          className='timeline-block'
          onClick={() => toggleDetails(`details-${key}`)}
        >
          <h2>{list.name.split(' at ')[0]}</h2>
          <span className='timeline-date'>{list.name.split(' at ')[1]}</span>
          <div
            id={`details-${key}`}
            className='details'
            style={{
              display: visibleDetail === `details-${key}` ? 'block' : 'none',
            }}
          >
            {list.items.map((item, idx) => (
              <p key={idx}>
                <Icon icon={item.icon} />
                &nbsp;
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
