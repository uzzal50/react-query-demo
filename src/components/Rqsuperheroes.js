import { useSupperHeroesData } from '../hooks/useSuperHeroesData'
import RepeatRQsuperheroes from './RepeatRQsuperheroes'

const onSuccess = (data) => {
  console.log('performs side effcts after success of fetching data', data)
}

const onError = (error) => {
  console.log('performs side effcts after error of fetching data', error)
}

const Rqsuperheroes = () => {
  //isFetching ley background refetch garcha
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSupperHeroesData(onSuccess, onError)

  console.log('isLoading :', isLoading, 'isFetching :', isFetching)

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <button onClick={refetch}>click</button>
      {/* {data?.data.map((item) => {
        return <div key={item.name}>{item.name}</div>
      })} */}
      {data?.map((item) => {
        return <div key={item}>{item}</div>
      })}

      <br />
      <br />
      {/* <RepeatRQsuperheroes /> */}
    </div>
  )
}

export default Rqsuperheroes
