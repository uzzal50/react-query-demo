import React from 'react'
import { useSupperHeroesData } from '../hooks/useSuperHeroesData'

const onSuccess = (data) => {
  console.log('performs side effcts after success of fetching data', data)
}

const onError = (error) => {
  console.log('performs side effcts after error of fetching data', error)
}

const RepeatRQsuperheroes = () => {
  const { isLoading, data } = useSupperHeroesData(onSuccess, onError)
  console.log(data)
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      {data.map((item) => {
        return <div key={item}>{item}</div>
      })}
    </div>
  )
}

export default RepeatRQsuperheroes
