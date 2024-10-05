import React,{useState, useEffect} from 'react'
import Catagory from './Catagory'
import CardSection from './CardSection'
import fetchData from '../api'
import { useSelector } from 'react-redux'

function Tranding() {
  const {category} = useSelector(state => state.home)
  const quary = category.tranding.toLowerCase()
  const { Response, error } = fetchData(`/trending/all/${quary}`)
  const [TrandingMovie, setTrandingMovie] = useState(null)


  useEffect(() => {
    if (Response && Response.data && Response.data.results.length > 0) {
      const trandingmovie = Response.data.results
      setTrandingMovie(trandingmovie)
      // console.log(trandingmovie);
    }

  }, [Response, quary])
  return (
    <div className='w-[100%]'>
      <Catagory section={"Tranding"} category={["Day", "Week"]} />
      <CardSection movie={TrandingMovie} />
    </div>
  )
}

export default Tranding