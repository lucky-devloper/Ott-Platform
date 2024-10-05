import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTranding, getpopular, gettoprated } from '../Store/homeSlice'

function Catagory({ section, category }) {
    const [addbg, setaddbg] = useState('buttonbg')
    const [selected, setselected] = useState(category[0])
    const dispatch = useDispatch()
    // console.log(category, section);
    


    const changebg = (value) => {
        setselected(value)
        // console.log(selected);
    }

    useEffect(() => {
        if ((selected === 'Day' || selected === "Week") && section === "Tranding") {
            dispatch(getTranding(selected))
        } else if ((selected === 'Movies' || selected === "Tv Shows") && section === "What's Popular") {
            dispatch(getpopular(selected))
        }
        else if ((selected === 'Movies' || selected === "Tv Shows") && section === "Top Rated") {
            dispatch(gettoprated(selected))
        }
    }, [selected])


    return (
        <div className='w-[98%] h-[40px] text-white flex justify-between'>
            <h1 className='text-3xl'>{section}</h1>
            <div className='relative flex justify-between p-1 bg-white w-[220px] rounded-full'>
                <button onClick={() => changebg(category[0])} className={`${selected === category[0] ? addbg : ""} text-black w-[100px] rounded-full`}>{category[0]}</button>
                <button onClick={() => changebg(category[1])} className={` ${selected === category[1] ? addbg : ""} text-black w-[100px] rounded-full`}>{category[1]}</button>
            </div>
        </div>
    )
}

export default Catagory