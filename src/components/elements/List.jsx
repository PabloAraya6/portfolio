import React, { useState } from 'react'
import Icon from '/src/components/elements/Icon.jsx'
import '/src/stylesheets/elements/List.css'

const List = ({ list }) => {
  const [visibleDetail, setVisibleDetail] = useState(false)

  const toggleDetails = () => {
    setVisibleDetail(!visibleDetail)
  }

  return (
    <div className='timeline-container'>
      <div className='timeline-block' onClick={toggleDetails}>
        <h2>{list.name.split(' at ')[0]}</h2>
        <span className='timeline-date'>{list.name.split(' at ')[1]}</span>
        <div id='details' className={`details${visibleDetail ? ' open' : ''}`}>
          {list.items.map((item, idx) => (
            <>
              <span key={idx} className='item'>
                <Icon icon={item.icon} />
                &nbsp;
                {item.name}
              </span>
              <br />
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default List
