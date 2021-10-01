import React, { useState, useEffect } from 'react'
import api from '../../api'
import Navbar from '../../components/navbar'
import countriesInterface from '../../interfaces/countriesInterface'
import { Container } from './styled'
import loading from '../../assets/img/loading.gif'

const Countries: React.FC = () => {
  const [countries, setCountries] = useState<countriesInterface[]>([])

  const getDataFromApi = async () => {
    const response = await api.get('/countries')
    setCountries(response.data)
    // console.log(countries)
  }

  useEffect(() => {
    getDataFromApi()
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        <table>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Borders</th>
            </tr>
            {countries.length > 0
            // eslint-disable-next-line array-callback-return
              ? countries.map(item => (
                <tr key={item.code}>
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                <td className='borders'>{item.fronteiras.map(border => <span key={`${item.code} - ${border}`}>{border},</span>)} </td>
                </tr>
              ))
              : <img src={loading} alt='loading' />}
        </table>
      </Container>
    </>
  )
}

export default Countries
