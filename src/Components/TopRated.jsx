import React, { useState, useEffect } from 'react'
import Catagory from './Catagory'
import CardSection from './CardSection'
import fetchData from '../api'
import { useSelector } from 'react-redux'

function TopRated() {
    const { category } = useSelector(state => state.home)
    const quary = category.toprated.toLowerCase()
    const [Topratedquary, setTopratedquary] = useState('tv')
    const { Response, error } = fetchData(`/${Topratedquary}/top_rated`)
    const [TopRatedMovie, setTopRatedMovie] = useState(null)
    
    useEffect(() => {
      if (quary === 'movies') {
        setTopratedquary('movie')
      }else{
        setTopratedquary('tv')
      }
    }, [quary])
    

    useEffect(() => {
        if (Response && Response.data && Response.data.results.length > 0) {
            const topmovie = Response.data.results
            setTopRatedMovie(topmovie)
            // console.log(trandingmovie);
        }

    }, [Response])
    return (
        <div className='w-[100%]'>
            <Catagory section={"Top Rated"} category={["Movies", "Tv Shows"]} />
            <CardSection movie={TopRatedMovie} />
        </div>
    )
}

export default TopRated