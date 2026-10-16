import React from 'react'

const WrapperAbout = ({ children, except }) => {

    return (
        <div className="h-auto w-full lg:w-[70%] mx-auto relative">
            <div className='flex flex-row h-[25px] lg:h-[30px]'>
                <div className='flex bg-transparent bg-repeat-y bg-center bg-ab1 bg-auto lg:bg-[length:29px_auto] w-[20px] lg:w-[29px]'></div>
                <div className='flex flex-1 bg-transparent bg-repeat bg-top bg-ab2 bg-contain '></div>
                <div className='flex bg-transparent bg-repeat-y bg-center bg-ab3 bg-auto lg:bg-[length:29px_auto] w-[20px] lg:w-[29px]'></div>
            </div>
            <div className='flex flex-row h-auto'>
                <div className='flex bg-transparent bg-repeat-y bg-center bg-ab4 bg-[length:25px_auto] lg:bg-[length:29px_auto] w-[20px] lg:w-[29px]'></div>
                <div className='flex flex-1 bg-transparent bg-repeat bg-top bg-ab5 bg-contain '>
                    <div className={`relative w-full ${except === true ? '' : 'bg-so-white p-4 rounded-xl'}`}>
                        {children}
                    </div>
                </div>
                <div className='flex bg-transparent bg-repeat-y bg-center bg-ab6 bg-[length:25px_auto] lg:bg-[length:29px_auto] w-[20px] lg:w-[29px]'></div>
            </div>
            <div className='flex flex-row h-[25px] lg:h-[30px]'>
                <div className='flex bg-transparent bg-repeat-y bg-center bg-ab7 bg-auto lg:bg-[length:29px_auto] w-[20px] lg:w-[29px]'></div>
                <div className='flex flex-1 bg-transparent bg-repeat bg-top bg-ab8 bg-contain '></div>
                <div className='flex bg-transparent bg-repeat-y bg-center bg-ab9 bg-auto lg:bg-[length:29px_auto] w-[20px] lg:w-[29px]'></div>
            </div>
        </div>
    )
}

export default WrapperAbout