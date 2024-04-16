import { stack } from '/src/data.js'
import List from '../elements/List.jsx'
import '/src/stylesheets/sections/Stack.css'

const Stack = () => {
  return (
    <section className='Stack section' id='experience'>
      <div className='container'>
        <h2 className='Stack-h2 section-head'>Experience.</h2>
        <div className='container-sm'>
          <div className='Stack-wrapper'>
            {stack.map((list, index) => (
              <List list={list} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stack
