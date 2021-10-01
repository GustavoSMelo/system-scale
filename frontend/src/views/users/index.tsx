import React, { useEffect, useState } from 'react'
import api from '../../api'
import Navbar from '../../components/navbar'
import { Container } from './style'
import profileInterface from '../../interfaces/profileInterface'
import loading from '../../assets/img/loading.gif'

const Users: React.FC = () => {
  const [users, setUsers] = useState<profileInterface[]>([])
  const [page, setPage] = useState(1)

  const getDatasFromApi = async () => {
    const response = await api.get<profileInterface[]>(`users/${page}`)
    setUsers(response.data)
  }

  const changePage = () => {
    page === 1 ? setPage(2) : setPage(1)
  }

  useEffect(() => {
    getDatasFromApi()
  }, [page])

  return (
    <>
      <Navbar />
      <Container>
        <h1>List of users</h1>
        {users.length > 0
          ? users.map(profile => (
            <section key={profile.id}>
              <figure>
                <img src={profile.avatar} alt='avatar' />
              </figure>
              <article>
                <span>
                    <p>{profile.first_name}</p>
                    <p>{profile.last_name}</p>
                </span>
                <p>{profile.email}</p>
              </article>
            </section>))
          : <img src={loading} alt='loading' />}
          <button onClick={() => changePage()}>{page === 1 ? 'avançar' : 'recuar'}</button>
      </Container>
    </>
  )
}

export default Users
