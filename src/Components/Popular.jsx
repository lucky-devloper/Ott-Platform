import React, { useState, useEffect } from 'react'
import Catagory from './Catagory'
import CardSection from './CardSection'
import fetchData from '../api'
import { useSelector } from 'react-redux'

function Popular() {
  const { category } = useSelector(state => state.home)
  const quary = category.popular.toLowerCase()
  const [populatquary, setpopulatquary] = useState('tv')
  const { Response, error } = fetchData(`/${populatquary}/popular`)
  const [PopularShow, setPopularShow] = useState(null)

  useEffect(() => {
    if (quary === 'movies') {
      setpopulatquary('movie')
    } else {
      setpopulatquary('tv')
    }
  }, [quary])

  useEffect(() => {
    if (Response && Response.data && Response.data.results.length > 0) {
      const popularshow = Response.data.results
      setPopularShow(popularshow)
      // console.log(trandingmovie);
    }

  }, [Response])
  return (
    <div className='w-[100%]'>
      <Catagory section={"What's Popular"} category={["Movies", "Tv Shows"]} />
      <CardSection movie={PopularShow} />
    </div>
  )
}

export default Popular