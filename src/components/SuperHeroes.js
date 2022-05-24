import { useState, useEffect } from 'react'
import axios from 'axios'

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:5000/superheroes')
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        setError(error.message)
      })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </>
  )
}

export default SuperHeroes
