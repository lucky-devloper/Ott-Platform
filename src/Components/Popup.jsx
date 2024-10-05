import React from 'react'
import ReactPlayer from 'react-player';

function Popup({ show, toggle, videoID }) {

    return (
        <>
            {show && <div className='w-[600px] h-[300px] bg-black absolute left-[35%]'>
                <button onClick={() => toggle()} className=' absolute text-xl text-red-500 pr-2'>Close</button>
                <ReactPlayer
                    url={`https://wwww.youtube.com/watch?v=${videoID}`}
                    width='100%'
                    height='100%'
                />
            </div>}
        </>
    )
}

export default Popup