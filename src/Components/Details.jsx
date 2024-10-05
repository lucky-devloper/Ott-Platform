import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BsPlayCircle } from "react-icons/bs";
import DetailsContainer from './DetailsContainer';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import fetchData from '../api';

function Details() {
  const [movieDetails, setmovieDetails] = useState({})
  const { details, url } = useSelector(state => state.home)
  const { mediatype, id } = details
  // console.log(mediatype, id);

  const { Response, error } = fetchData(`/${mediatype}/${id}`)
  const year = new Date(movieDetails.release_date || movieDetails.first_air_date)
  // console.log(Response);
  

  useEffect(() => {
    if (Response && Response.data) {
      setmovieDetails(Response.data)
      // console.log(movieDetails);
    }
  }, [Response, url, details])



  return (
    <div className='text-white w-[100%] h-[100%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${url.backdrop + movieDetails.backdrop_path})` }}>
      <div className='w-[100%] h-[100%] bg-[#05152e] bg-opacity-[0.9] flex flex-col items-center'>
        <Navbar />
        <div className='w-[80%] h-[76%] absolute top-32'>
          <div className='w-[100%] h-[100%] flex gap-10 '>
            <div className='w-[28%] h-[520px] rounded-lg overflow-hidden'>
              <img src={movieDetails.poster_path ? url.backdrop + movieDetails.poster_path : "https://movix-eta.vercel.app/assets/no-poster-af8294eb.png"} alt="" className='w-[100%] h-[100%]' />
            </div>
            <div className='w-[70%] h-[100%]'>
              <h1 className='text-4xl'>{movieDetails.title || movieDetails.name} {year.getFullYear()}</h1>
              <p className='mt-1 text-xl text-gray-400 italic'>{movieDetails.tagline}</p>
              <div className='flex gap-1.5 mt-3'>
                {movieDetails.genres?.map((genres) => {
                  return <p key={genres.id} className='rounded px-1 text-[10px] text-center bg-pink-600 text-white'>{genres.name}</p>
                })}
              </div>
              <div className='flex items-center gap-6 mt-6'>
                <div className='w-[80px] h-[80px] bg-[#05152e] rounded-full'>
                  <CircularProgressbar
                    value={movieDetails.vote_average?.toFixed(1)}
                    maxValue={10}
                    text={movieDetails.vote_average?.toFixed(1)}
                    styles={buildStyles({
                      pathColor: "#008101", // Progress bar color
                      textColor: "white",   // Text color inside the circle
                      trailColor: "#05152e", // Background path color
                      textSize: "40px",     // Size of the inner text
                    })}
                  />
                </div>
                <BsPlayCircle fontSize='80px' className='hover:text-pink-600' />
                <p className='text-2xl'>Watch Trailer</p>
              </div>
              <div className='my-5 w-[650px]'>
                <h1 className='text-3xl pb-2'>Overview</h1>
                <p>{movieDetails.overview}</p>
              </div>
              <div className='flex items-center gap-5 mb-3'>
                <p className='text-[18px] font-semibold'>Status : <span className='font-normal text-gray-500 pl-2'>{movieDetails.status}</span></p>
                <p className='text-[18px] font-semibold'>Release Date : <span className='font-normal text-gray-500 pl-2'>{year.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
                {movieDetails.runtime ? <p className='text-[18px] font-semibold'>RunTime : <span className='font-normal text-gray-500 pl-2'>{`${(movieDetails.runtime / 60).toFixed(0)}h ${movieDetails.runtime % 60}min`}</span></p> : ""}
              </div>
              <hr />
              <p className='text-[18px] font-semibold my-3'>Director : <span className='font-normal text-gray-500 pl-2'>Philippe Lacote</span></p>
              <hr />
              {movieDetails.created_by?.map((writer) => {
                return <p key={writer.id} className='text-[18px] font-semibold my-3'>Writer : <span className='font-normal text-gray-500 pl-2'>{writer.name}</span></p>
              })}
              <hr />
            </div>
          </div>
        </div>
        <div className='w-[100%] h-[200px] absolute top-[72%] inset-0 bg-gradient-to-b from-transparent to-custom-blue opacity-100'></div>
      </div>
      <DetailsContainer />
      <Footer />
    </div>
  )
}

export default Details