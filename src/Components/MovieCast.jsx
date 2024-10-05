import React from 'react'
import { useSelector } from 'react-redux';

function MovieCast({ Cast }) {
    const { url } = useSelector(state => state.home)

    return (

        <div className='w-[100%] h-[300px] mt-4 flex gap-4'>
            {Cast?.map((cast) => {
                return <div key={cast.id} className='w-[190px] h-[100%] flex flex-col items-center'>
                    <img src={cast.profile_path ? url.profile + cast.profile_path : "https://movix-eta.vercel.app/assets/avatar-bd5ec287.png"} alt="" className='w-[180px] h-[180px] object-cover rounded-full' />
                    <h1 className='text-xl'>{cast.original_name}</h1>
                    <p className='text-[17px] text-center text-gray-500 w-[160px]'>{cast.character}</p>
                </div>
            })}
        </div>
    )
}

export default MovieCast