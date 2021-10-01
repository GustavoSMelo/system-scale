import React from 'react'
import { Container } from './styled'
import { FaUser, FaGlobeAmericas } from 'react-icons/fa'
import Logo from '../../assets/img/logo.png'
import { useHistory } from 'react-router-dom'

const Navbar: React.FC = () => {
  const history = useHistory()

  return (
    <Container>
      <figure onClick={() => history.push('/')}>
          <img src={Logo} alt='Scale Systems' />
      </figure>
      <nav>
          <span onClick={() => history.push('/users')}>
            <p><FaUser /> <span className='navbar-text'>Users</span></p>
          </span>
          <span onClick={() => history.push('/countries')}>
            <p>
                <FaGlobeAmericas /> <span className='navbar-text'>Countries</span>
            </p>
          </span>
      </nav>
    </Container>
  )
}

export default Navbar
