import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import fetchData from '../api'
import CardSection from './CardSection'

function Recommendmovie() {
    const [Recommendmovie, setRecommendmovie] = useState(null)
    const { details } = useSelector(state => state.home)
    const { mediatype, id } = details
    const { Response, error } = fetchData(`/${mediatype}/${id}/recommendations`)

    useEffect(() => {
        if (Response && Response.data && Response.data.results.length > 0) {
            setRecommendmovie(Response.data.results)
        }
    }, [Response, mediatype, id])

    return (
        <>
            {Recommendmovie && Recommendmovie.length > 0 ? (
                <div className='w-[100%] h-[447px] pt-6'>
                    <CardSection movie={Recommendmovie} />
                </div>
            ) : ""}
        </>
    )
}

export default Recommendmovie