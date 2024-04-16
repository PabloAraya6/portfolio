import React, { useState } from 'react'
import Icon from '/src/components/elements/Icon.jsx'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import '/src/stylesheets/elements/List.css'

const List = ({ list }) => {
  const [visibleDetail, setVisibleDetail] = useState(false)

  const toggleDetails = () => {
    setVisibleDetail(!visibleDetail)
  }

  return (
    <div className='timeline-container'>
      <div className='timeline-block' onClick={toggleDetails}>
        <p className='timeline-dates'>
          <span>{list.endDate}</span> <br />
          <span>{list.startDate}</span>
        </p>
        <h2>
          {list.name.split(' at ')[0]}{' '}
          {visibleDetail ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
        </h2>
        <p className='timeline-date'>{list.name.split(' at ')[1]}</p>
        <div id='details' className={`details${visibleDetail ? ' open' : ''}`}>
          {list.description.map((desc, idx) => (
            <p key={idx}>
              <li id='list-item'>{desc}</li>
            </p>
          ))}
          <div className='icons'>
            {list.items.map((item, idx) => (
              <>
                <span key={idx} className='item'>
                  <Icon icon={item.icon} />
                  &nbsp;{item.name}
                </span>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
