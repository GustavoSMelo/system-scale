import React from 'react'
import Navbar from '../../components/navbar'
import { Container } from './styled'
import Background from '../../assets/img/background.png'
import { useHistory } from 'react-router'

const Home: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <Navbar />
      <Container>
        <figure>
            <img src={Background} alt='Illustration' />
        </figure>
        <aside>
            <h1>Welcome to Scale System</h1>
            <p>I am glad to see you in our website 😄. lets me introduce ourself. We are a company that create solutions with high scalability and performance. If you are interest in our project, click below to see the list of all users </p>
            <button type='button' onClick={() => history.push('/users')}>Access users</button>
        </aside>
      </Container>
    </>
  )
}

export default Home
