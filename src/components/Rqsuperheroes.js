import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:5000/superheroes')
}

const Rqsuperheroes = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    'super-heroees',
    fetchSuperHeroes
  )
  console.log('isLoading :', isLoading, 'isFetching :', isFetching)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      {data?.data.map((item) => {
        return <div key={item.name}>{item.name}</div>
      })}
    </div>
  )
}

export default Rqsuperheroes
