import '/src/stylesheets/sections/Footer.css'

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='container'>
        <p className='Footer-brand'>
          Portfolio <span>© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
