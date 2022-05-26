import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:5000/superheroes')
}

export const useSupperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroees', fetchSuperHeroes, {
    // cacheTime: 5000,
    //data doesnot change often we use stale time
    // staleTime: 30000,
    // refetchOnMount: true,
    // refetchOnMount : 'always'
    //update data with ui
    // refetchOnWindowFocus: true,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    // enabled: false,
    // onSuccess,
    // onError,
    select: (data) => {
      const superNames = data.data.map((hero) => hero.name)
      return superNames
    },
  })
}
