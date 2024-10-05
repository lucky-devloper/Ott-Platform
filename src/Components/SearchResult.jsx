import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getDetails } from '../Store/homeSlice'

function SearchResult() {
  const { quary, url } = useSelector(state => state.home)
  const [pageNum, setpageNum] = useState(1)
  const [Data, setData] = useState(null)
  const [message, setmessage] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${quary}&api_key=423801dedaa5350fb56e70d482474185&page=${pageNum}`)
        if (response) {
          const fetchdata = await response.json()
          setData(fetchdata.results)
          setmessage(quary)
          console.log(fetchdata.results);
        }
      } catch (error) {
        console.log("Fetching error : ", error);
      }
    }

    if (quary) {
      fetchSearchData()
    }
  }, [quary, url, pageNum])

  const movieDetails = (id, mediatype) => {
    dispatch(getDetails({ id, mediatype }))
    navigate(`/${mediatype}/${id}`)
  }

  return (
    <div className='w-[100%] bg-[#05152e] text-white pt-16 flex justify-center'>
      <div className='w-[80%]'>
        {Data && Data.length > 0 ? <h1 className='text-2xl'>Search result of '{message}'</h1> : <h1 className='text-2xl'>Sorry results not found !</h1>}
        <div className='w-[100%] flex flex-wrap items-center gap-5 justify-between my-8'>
          {Data?.map((searchdata) => {
            return <div onClick={() => movieDetails(searchdata.id, searchdata.media_type)} key={searchdata.id} className='w-[210px] h-[400px] text-white'>
              <img src={searchdata.poster_path ? url.backdrop + searchdata.poster_path : "https://movix-eta.vercel.app/assets/no-poster-af8294eb.png"} alt="" className='h-[320px] w-[100%] object-cover rounded-lg' />
              <p className='mt-3 text-xl'>{searchdata.name ? searchdata.name : searchdata.title}</p>
              <p className='text-gray-400'>{new Date(searchdata.first_air_date ? searchdata.first_air_date : searchdata.release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchResult