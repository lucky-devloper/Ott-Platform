import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import fetchData from '../api'
import CardSection from './CardSection'

function Simillarmovie() {
    const [Similarmovie, setSimilarmovie] = useState(null)
    const { details } = useSelector(state => state.home)
    const { mediatype, id } = details
    const { Response, error } = fetchData(`/${mediatype}/${id}/similar`)

    useEffect(() => {
        if (Response && Response.data && Response.data.results.length > 0) {
            setSimilarmovie(Response.data.results)
        }
    }, [Response, mediatype, id])



    return (
        <>
            {Similarmovie && Similarmovie.length > 0 ? (
                <div className='w-[100%] h-[450px] pt-6'>
                    <CardSection movie={Similarmovie} />
                </div>
            ) : ""}
        </>
    )
}

export default Simillarmovie