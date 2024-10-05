import React, { useEffect, useState } from 'react'
import MovieCast from './MovieCast'
import MovieTrailer from './MovieTrailer'
import Simillarmovie from './Simillarmovie';
import Recommendmovie from './Recommendmovie';
import { useSelector } from 'react-redux';
import fetchData from '../api';

function DetailsContainer() {
    const [movietrailler, setmovietrailler] = useState(null)
    const [Moviecast, setMoviecast] = useState(null)
    const { details } = useSelector(state => state.home)
    const { mediatype, id } = details
    const { Response, error } = fetchData(`/${mediatype}/${id}/credits`)
    const { Response: video, error: loding } = fetchData(`/${mediatype}/${id}/videos`)
    const trailler = video
    console.log(trailler);

    useEffect(() => {
        if (trailler && trailler.data && trailler.data.results.length > 0) {
            const movievideo = trailler.data.results
             console.log(movievideo);
            if (movievideo.length > 4) {
                const slicepart = movievideo.splice(0, 4)
                setmovietrailler(slicepart)
            } else {
                setmovietrailler(movievideo)
            }
        }
    }, [trailler, mediatype, id])

    useEffect(() => {
        if (Response && Response.data && Response.data.cast.length > 0) {
            const moviecast = Response.data.cast
            if (moviecast.length > 6) {
                const sliceCast = moviecast.splice(0, 6)
                setMoviecast(sliceCast)
                // console.log(sliceCast)
            } else {
                setMoviecast(moviecast)
            }
        }
    }, [Response, mediatype, id])


    return (
        <div className='w-[100%] bg-[#05152e] flex flex-col items-center'>
            <div className='w-[80%] h-[100%]'>
                <h1 className='text-2xl'>Top Cast</h1>
                {Moviecast && MovieCast.length > 0 ? <MovieCast Cast={Moviecast} /> : ""}
                <h1 className='text-2xl'>Official Videos</h1>
                {movietrailler && movietrailler.length > 0 ? <MovieTrailer video={movietrailler} /> : ""}
                <h1 className='text-2xl'>Similar Movies</h1>
                <Simillarmovie />
                <h1 className='text-2xl'>Recommendations</h1>
                <Recommendmovie />
            </div>
        </div>
    )
}

export default DetailsContainer