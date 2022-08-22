import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  return (
    <>
      <div className='container about-page'>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I’ve spent the past 12+ years leading teams focused on automation,
            cloud-native architectures, and emerging technologies. I’m driven
            by the desire to increase development velocity, developer happiness,
            and to help companies reach their goals.
          </p>
          <p>
            I believe in safety and security by design. I value psychological
            safety, self-service platforms, and socio-technical systems. I am
            currently seeking a role where I can leverage my experience to
            effect meaningful change for an important cause.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
