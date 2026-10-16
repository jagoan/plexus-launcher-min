import React from 'react'

const Navbar = (props) => {
    const { topLeftElementRef, topRightElementRef, leftElementRef, rightElementRef } = props
    return (
        <div className="fixed w-full z-30 ">
            <div className="flex flex-row h-[59px] sm:h-[147px]">
                <div className='flex bg-transparent bg-no-repeat bg-center bg-navbar-left bg-[length:90px_59px] sm:bg-[length:220px_147px] w-[90px] sm:w-[220px]' />
                <div ref={topLeftElementRef} className="relative top-0 left-[-90px] sm:left-[-220px]">
                    <div ref={leftElementRef} className='absolute inset-0 bg-transparent bg-no-repeat bg-center bg-navbar-yellow-left bg-[length:90px_59px] sm:bg-[length:220px_147px] w-[90px] sm:w-[220px]' />
                </div>
                <div className='flex flex-1 bg-transparent bg-repeat-x bg-top bg-navbar-repeat bg-contain' />
                <div className='flex bg-transparent bg-no-repeat bg-top bg-navbar-center  bg-[length:200px_auto]  sm:bg-[length:496px_73px] w-[200px] sm:w-[496px]' />
                <div className='flex flex-1 bg-transparent bg-repeat-x bg-top bg-navbar-repeat bg-contain' />
                <div ref={topRightElementRef} className="relative top-0 right-[45px]">
                    <div ref={rightElementRef} className='absolute inset-0 bg-transparent bg-no-repeat bg-center bg-navbar-yellow-right bg-[length:90px_59px] sm:bg-[length:220px_147px] w-[90px] sm:w-[220px]' />
                </div>
                <div className='flex bg-transparent bg-no-repeat bg-center bg-navbar-right  bg-[length:90px_59px]  sm:bg-[length:220px_147px] w-[90px] sm:w-[220px]' />
            </div>
        </div>

    )
}

export default Navbar