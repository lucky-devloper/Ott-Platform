import React, { useState } from 'react'
import { BsPlayCircle } from "react-icons/bs";
import ReactPlayer from 'react-player';
import Popup from './Popup';

function MovieTrailer({ video }) {
    const [videoId, setvideoId] = useState('')
    const [show, setshow] = useState(false)
    const toogle = () => {
        setshow(prev => !prev)
    }

    return (
        <div className='w-[100%] h-[200px] flex gap-5 items-center relative'>
            {video?.map((vid) => {
                return <div key={vid.id} className='w-[290px] h-[170px] rounded-md relative'>
                    <React.Fragment>
                        <div onClick={() => { setshow(prev => !prev), setvideoId(vid.key) }} className='w-[100%] h-[100%] bg-black bg-opacity-[0.3] absolute'>
                        </div>
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${vid.key}`}
                            width='100%'
                            height='100%'
                        />
                        <p>{vid.name}</p>
                    </React.Fragment>
                </div>
            })}
            <Popup show={show} toggle={toogle} videoID={videoId} />
        </div>
    )
}

export default MovieTrailer