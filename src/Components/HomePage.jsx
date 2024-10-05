import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getsearch } from '../Store/homeSlice'
import fetchData from '../api'
import CardContainer from './CardContainer'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function HomePage() {
  const [bgImage, setbgImage] = useState('')
  const { Response, error } = fetchData('/movie/popular')
  const { url } = useSelector(state => state.home)
  const dispatch = useDispatch()
  const [quary, setquary] = useState('')
  const Navigate = useNavigate()

  useEffect(() => {
    if (Response && Response.data && Response.data.results.length > 0) {
      const response = Response.data;
      const random = Math.floor(Math.random() * response.results.length);
      let bg = url.backdrop + (response.results[random]?.backdrop_path || "");
      setbgImage(bg);
    }
  }, [Response, url]);


  const searchquaryHandler = (e) => {
    if (e.key === 'Enter' && quary.length > 0) {
      dispatch(getsearch(quary))
      Navigate(`/search/${quary}`)
    }
  }

  return (
    <div className='text-white w-[100%] h-[100%] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='w-[100%] h-[100%] bg-[#05152e] bg-opacity-[0.5]'>
        <Navbar />
        <div className='w-[100%] h-[100%] flex flex-col justify-center items-center text-center'>
          <h1 className='text-8xl font-semibold'>Welcome .</h1>
          <p className='text-2xl font-semibold'>Millions of movies, TV shows and people to discover. Explore now.</p>
          <div className='w-[55%] h-[60px] flex items-center  rounded-full overflow-hidden mt-7'>
            <input type="text" value={quary} onChange={(e) => setquary(e.target.value)} onKeyUp={searchquaryHandler} placeholder='Search for a movie or tv show...' className='w-[100%] h-[100%] px-5 outline-none text-black text-xl' />
            <button className='w-[150px] h-[100%] text-[18px] bg-gradient-to-r from-yellow-500 to-orange-600'>Search</button>
          </div>
        </div>
      </div>
      <div className='w-[100%] h-[200px] absolute top-[73%] inset-0 bg-gradient-to-b from-transparent to-custom-blue opacity-100'></div>
      <CardContainer />
      <Footer />
    </div>
  )
}

export default HomePage