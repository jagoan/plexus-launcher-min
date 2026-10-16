import React from 'react'
import spinner from '/images/content/spinner.gif'
const LoadingLaunch = () => {
    return (
        <div className={`loading-screen-launch`}>
            <div className="flex flex-col items-center">
                <p className='text-white fw-bold bahnschrift text-2xl'>The application will run immediately</p>
                <img src={spinner} className='w-[120px]' />
                <p className='text-white fw-bold bahnschrift text-2xl'>Loading...
                </p>
            </div>

        </div>
    )
}

export default LoadingLaunch