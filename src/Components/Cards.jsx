import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getDetails } from '../Store/homeSlice';

function Cards({ moviedel }) {
    const [mediatype, setmediatype] = useState(null)
    const { url, category } = useSelector(state => state.home)
    const releaseDate = moviedel.release_date ? moviedel.release_date : moviedel.first_air_date
    const mydate = new Date(releaseDate)
    const dateString = mydate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (category.popular === "Movies") {
            setmediatype('movie')
        } else {
            setmediatype('tv')
        }
    }, [category])



    const getMovieDetails = (id) => {
        dispatch(getDetails({ id, mediatype }))
        navigate(`/${mediatype}/${id}`)
    }

    return (
        <div>
            <div className='w-[230px] h-[390px] overflow-hidden rounded-lg text-white z-0'>
                <div onClick={() => getMovieDetails(moviedel.id)} className='relative bg-cover bg-center bg-no-repeat h-[300px]' style={{ backgroundImage: `url(${moviedel.poster_path ? url.backdrop + moviedel.poster_path : "https://movix-eta.vercel.app/assets/no-poster-af8294eb.png"})` }}>
                    <div className='flex gap-1 absolute bottom-2 right-2'>
                        <p className='rounded w-[50px] text-[10px] text-center bg-pink-600 text-white'>Action</p>
                        <p className='rounded w-[50px] text-[10px] text-center bg-pink-600 text-white'>Comedy</p>
                    </div>
                    <div className='w-[50px] h-[50px] bg-[#ffff]  absolute font-semibold bottom-[-20px] left-2 p-1 rounded-full'>
                        <CircularProgressbar
                            value={moviedel.vote_average.toFixed(1)}
                            maxValue={10}
                            text={moviedel.vote_average.toFixed(1)}
                            styles={buildStyles({
                                pathColor: "#f8a60c", // Progress bar color
                                textColor: "black",   // Text color inside the circle
                                trailColor: "#d6d6d6", // Background path color
                                textSize: "35px",     // Size of the inner text
                            })}
                        />
                    </div>
                </div>
                <p className='mt-6 text-2xl'>{moviedel.original_title ? moviedel.original_title : moviedel.name}</p>
                <p className='text-gray-400'>{dateString === ' ' ? "" : dateString}</p>
            </div>
        </div>
    )
}

export default Cards