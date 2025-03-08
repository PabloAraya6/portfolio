import '/src/stylesheets/sections/Home.css'
import SocialLinks from '/src/components/elements/SocialLinks'

const Home = () => {
  const calculateYearsOfExperience = () => {
    const startDate = new Date(2019, 10)
    const currentDate = new Date()
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear()
    const monthsDiff = currentDate.getMonth() - startDate.getMonth()
    return yearsDiff + monthsDiff / 12
  }

  const yearsOfExperience = Math.floor(calculateYearsOfExperience())

  return (
    <section className='Home section' id='home'>
      <div className='container'>
        <div className='Home-caption'>
          <span className='Home-hi'>Hi I&apos;m</span>
          <h1 className='Home-h1'>Pablo Araya</h1>
          <h2 className='Home-h2'>Software Developer</h2>
          <p className='Home-description'>
            With over {yearsOfExperience} years of experience in software
            development,
            <br /> I am dedicated to pushing the limits of technology to create
            impactful solutions.
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}

export default Home
