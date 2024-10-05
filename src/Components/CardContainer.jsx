import React from 'react'
import Tranding from './Tranding'
import Popular from './Popular'
import TopRated from './TopRated'

function CardContainer() {

    return (
        <div className='w-[100%] bg-[#05152e] flex flex-col items-center pt-8'>
            <div className='w-[82%] flex flex-col gap-10 mb-10'>
                <Tranding />
                <Popular />
                <TopRated />
            </div>
        </div>
    )
}

export default CardContainer