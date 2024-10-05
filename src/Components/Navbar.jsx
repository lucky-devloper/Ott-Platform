import React, { useState } from 'react'
import { MdOutlineSearch } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getsearch } from '../Store/homeSlice';

function Navbar() {
    const [addclass, setaddclass] = useState('active')
    const [toggleSearch, settoggleSearch] = useState(false)
    const [searchquary, setsearchquary] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const Opensearch = () => {
        if (toggleSearch) {
            setaddclass('active')
            settoggleSearch(false)
        } else {
            setaddclass('')
            settoggleSearch(true)
        }
    }

    const getsearchdata = (e) => {
        if (e.key === 'Enter' && searchquary.length > 0) {
            navigate(`/search/${searchquary}`)
            dispatch(getsearch(searchquary))
        }
    }

    return (
        <div className='w-[100%] h-[60px] absolute top-0'>
            <div className={`w-[100%] h-[100%] bg-black bg-opacity-[0.4] flex justify-between items-center px-20`}>
                <img src="https://movix-eta.vercel.app/assets/movix-logo-d720c325.svg" alt="" className='w-[200px]' />
                <div className='text-white flex items-center gap-5'>
                    <button>Movie</button>
                    <button>TV Shows</button>
                    <MdOutlineSearch onClick={() => Opensearch()} fontSize='25px' />
                </div>
            </div>
            <div className={`${addclass} w-[100%] h-[55px] bg-white text-black flex justify-between items-center px-20`}>
                <input type="text" value={searchquary} onChange={(e) => setsearchquary(e.target.value)} onKeyUp={getsearchdata} placeholder='Search for a movie or tv show...' className='w-[60%] h-[50px] px-7 outline-none text-xl' />
                <RxCross2 onClick={() => Opensearch()} fontSize='30px' />
            </div>
        </div>
    )
}

export default Navbar