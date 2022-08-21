import { Loader } from 'react-loaders'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-j.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['e','r','e','m','y',' ','P','r','u','i','t','t', ',']
  const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r', '.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={11}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={17}
          />
        </h1>
        <h2>Infra & Platform Engineer / Architect / Manager / Leader</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
}

export default Home
