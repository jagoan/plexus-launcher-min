import React, { useEffect, useState } from 'react'
import Modals from './Modals'
import axios from 'axios'

const Cards = (props) => {
    const { cardsCategory, ip, ga, mobile, isLoadingLaunch, setIsLoadingLaunch } = props
    const [open, setOpen] = useState(false)
    const [index, setIdx] = useState()
    const handleModals = (isOpen, index) => {
        setOpen(isOpen);
        setIdx(index);
        if (ga) {
            ga(cardsCategory[index].name);
        }
    };
    useEffect(() => {
        const video = document.getElementById('boxVideo');
        if (!open) {
            // Stop YouTube video
            const iframe = document.querySelector('iframe');
            if (iframe) {
                const iframeSrc = iframe.src;
                iframe.src = iframeSrc;
            }

            const img = document.querySelector('img');
            if (img) {
                img.src = '';
            }

            // Stop HTML5 video
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        }
        else {
            // Set volume to 70% when modal opens
            const video = document.getElementById('boxVideo');
            if (video) {
                video.volume = 0.4;

                const sourceVideo = document.getElementById('sourceVideo');
                if (sourceVideo && cardsCategory[index] && cardsCategory[index].video) {
                    sourceVideo.src = cardsCategory[index].video;
                    video.load(); // Reload the video with the new source

                }
            }
        }
    }, [open, cardsCategory, index]);



    const handleLaunch = async (event, path) => {
        event.preventDefault();
        setIsLoadingLaunch(true);
        try {
            const result = await axios.get('php/OpenApp.php?GameName=' + path);
            console.log(result, "success running");
            setIsLoadingLaunch(false);
        } catch (error) {
            console.error('Error launching executable:', error);
            setResponse('Error launching executable.');
        }
    };
    return (
        <>
            <div className="flex justify-center mt-7">
                <div className={`cards ${ip ? 'h-auto' : 'overflow-y-auto overflow-x-hidden h-[640px]'} sm:overflow-hidden sm:h-auto`} >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  content-center justify-center items-center gap-3" >
                        {cardsCategory.map((data, index) => (
                            <div key={index} className="mx-auto">
                                <div className={`cards   text-center bg-no-repeat ${ip ? 'bg-cards-ip bg-cover h-[343px] w-[296px]' : `${mobile ? 'bg-cards-disabled' : 'bg-cards-categories'} bg-[length:260px_315px] 3xl:bg-cover h-[315px] w-[260px] 3xl:w-[271px]`} relative `} >
                                    <figure className={`imghvr-shutter-in-vert flex flex-col ${data.color} border-2 ${data.border} shadow-sm rounded-xl ${ip ? 'w-[80%] left-[1.9rem] top-[2.1rem]' : 'w-[79%] left-7 top-8'} absolute`}>
                                        <h3 className="bahnschrift text-[16px] py-1 font-bold text-white">
                                            {data.category}
                                        </h3>
                                        <img
                                            className={`w-full ${ip ? 'h-[180px]' : 'h-[160px]'} rounded-b-xl`}
                                            src={data.img ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"}
                                            alt={data.img ? `Image: ${data.img}` : "Default image"}
                                        />

                                        <figcaption className={`${ip ? 'sinopse-ip' : 'sinopse'} p-[20px]`}>
                                            <div className="mx-auto">
                                                <h3 className="bahnschrift text-[16px] font-bold text-gray-800">
                                                    {data.category}
                                                </h3>
                                                <div className="title ih-fade-down ih-delay-sm text-sm overflow-auto h-[40px]">{data.details_title === '' ? '' : data.details_title}</div>
                                                {(data.yt || data.video) && (
                                                    <div className="relative">
                                                        <div
                                                            className="flex flex-row h-[35px] lg:h-[40px] my-1 cursor-pointer"
                                                            onClick={() => handleModals(true, index)}
                                                        >
                                                            <div
                                                                className="flex bg-transparent bg-no-repeat bg-center bg-tab_button_active_left w-[14px] bg-[length:14px_45px] lg:bg-[length:28px_50px] lg:w-[28px]"
                                                            />
                                                            <div
                                                                className="flex flex-1 bg-transparent bg-repeat-x bg-center bg-tab_button_active_center w-[50px] bg-[length:4px_45px] lg:bg-[length:4px_50px] lg:w-[65px]"
                                                            />
                                                            <div
                                                                className="flex bg-transparent bg-no-repeat bg-center scale-x-[-1] bg-tab_button_active_left w-[14px] bg-[length:14px_45px] lg:bg-[length:28px_50px] lg:w-[28px]"
                                                            />
                                                            <p className="bahnschrift font-bold text-[#F4F0E6] text-xs lg:text-base tracking-wide absolute inset-0 flex items-center justify-center">
                                                                VIDEOS
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {data.portofolio && (
                                                    <div className="relative">
                                                        <div
                                                            className="flex flex-row h-[35px] lg:h-[40px] my-1 cursor-pointer"
                                                            onClick={() => handleModals(true, index)}
                                                        >
                                                            <div
                                                                className="flex bg-transparent bg-no-repeat bg-center bg-tab_button_active_left w-[14px] bg-[length:14px_45px] lg:bg-[length:28px_50px] lg:w-[28px]"
                                                            />
                                                            <div
                                                                className="flex flex-1 bg-transparent bg-repeat-x bg-center bg-tab_button_active_center w-[50px] bg-[length:4px_45px] lg:bg-[length:4px_50px] lg:w-[65px]"
                                                            />
                                                            <div
                                                                className="flex bg-transparent bg-no-repeat bg-center scale-x-[-1] bg-tab_button_active_left w-[14px] bg-[length:14px_45px] lg:bg-[length:28px_50px] lg:w-[28px]"
                                                            />
                                                            <p className="bahnschrift font-bold text-[#F4F0E6] text-xs lg:text-base tracking-wide absolute inset-0 flex items-center justify-center">
                                                                VIEW
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}

                                                {data.details && (
                                                    <div className="relative">
                                                        <a
                                                            className="flex flex-row h-[35px] lg:h-[40px] my-1 cursor-pointer"
                                                            href={data.details}
                                                        >
                                                            <div
                                                                className="flex bg-transparent bg-no-repeat bg-center bg-tab_button_active_left w-[14px] bg-[length:14px_45px] lg:bg-[length:28px_50px] lg:w-[28px]"
                                                            />
                                                            <div
                                                                className="flex flex-1 bg-transparent bg-repeat-x bg-center bg-tab_button_active_center w-[50px] bg-[length:4px_45px] lg:bg-[length:4px_50px] lg:w-[65px]"
                                                            />
                                                            <div
                                                                className="flex bg-transparent bg-no-repeat bg-center scale-x-[-1] bg-tab_button_active_left w-[14px] bg-[length:14px_45px] lg:bg-[length:28px_50px] lg:w-[28px]"
                                                            />
                                                            <p className="bahnschrift font-bold text-[#F4F0E6] text-xs lg:text-base tracking-wide absolute inset-0 flex items-center justify-center">
                                                                DETAILS
                                                            </p>
                                                        </a>
                                                    </div>
                                                )}

                                                {data.launch && (
                                                    <div className="relative">
                                                        <div
                                                            className="flex flex-row h-[35px] lg:h-[40px] my-1 cursor-pointer"
                                                            onClick={(e) => handleLaunch(e, data.launch)}
                                                        >
                                                            <div
                                                                className="flex bg-transparent bg-no-repeat bg-center bg-tab_button_active_left w-[14px] bg-[length:14px_45px] lg:bg-[length:28px_50px] lg:w-[28px]"
                                                            />
                                                            <div
                                                                className="flex flex-1 bg-transparent bg-repeat-x bg-center bg-tab_button_active_center w-[50px] bg-[length:4px_45px] lg:bg-[length:4px_50px] lg:w-[65px]"
                                                            />
                                                            <div
                                                                className="flex bg-transparent bg-no-repeat bg-center scale-x-[-1] bg-tab_button_active_left w-[14px] bg-[length:14px_45px] lg:bg-[length:28px_50px] lg:w-[28px]"
                                                            />
                                                            <p className="bahnschrift font-bold text-[#F4F0E6] text-xs lg:text-base tracking-wide absolute inset-0 flex items-center justify-center">
                                                                LAUNCH
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <div className=" absolute bottom-[1rem] left-0 w-full text-[#454140] bahnschrift p-6  text-[16px] font-bold">
                                        {data.name}
                                    </div>
                                    {/* <div className={`${ip ? 'sinopse-ip' : 'sinopse'}`}>
                                    <div className="content-sinopse mx-auto text-center">
                                        <div className="title">{data.details_title}</div>
                                        <a href="https://www.youtube.com/">
                                            <div className="mt-3 bg-videos bg-center h-[50px] w-auto bg-contain cursor-pointer  bg-no-repeat" />
                                        </a>

                                        <div className='bg-prevBtn hover:bg-prevBtnHov bg-contain md:h-[190px] 3xl:h-[272px] w-[78px] cursor-pointer mx-auto text-center bg-no-repeat' onClick={next} />
                                    </div>

                                </div> */}
                                </div>
                            </div>

                        ))}
                        {cardsCategory.length % 4 !== 0 &&
                            Array.from({ length: 4 - (cardsCategory.length % 4) }).map((_, index) => (
                                <div key={`placeholder-${index}`} className="mx-auto">
                                    <div className={`cards text-center ${ip ? 'bg-cards-ip-empty h-[343px] w-[296px] bg-cover' : 'bg-cards-categories-empty bg-[length:255px_315px] h-[315px] w-[260px] 3xl:w-[271px]'}  bg-no-repeat relative`} ></div>
                                </div>
                            ))}


                        <Modals open={open} onClose={() => setOpen(false)}>
                            <div className="text-center w-[80vw] lg:w-[90vw] h-[50vh] lg:h-[80vh]">

                                <div className="mx-auto my-4 flex items-center content-center justify-center h-full w-full">
                                    {
                                        cardsCategory && cardsCategory[index] !== undefined ? (
                                            cardsCategory[index].yt !== undefined ? (
                                                <div className="flex items-center justify-center min-h-screen">
                                                    <div className="relative w-[80vw] lg:w-[90vw] h-[50vh] lg:h-[80vh]">
                                                        <iframe
                                                            className="absolute top-0 left-0 w-full h-full"
                                                            src={`https://www.youtube.com/embed/${cardsCategory[index].yt}`}
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            ) : cardsCategory[index].video !== undefined ? (
                                                <div className="flex items-center justify-center min-h-screen">
                                                    <div className="relative w-[80vw] lg:w-[90vw] h-[50vh] lg:h-[80vh]">
                                                        <video
                                                            className="absolute top-0 left-0 w-full h-full"
                                                            poster="images/content/poster-video.webp"
                                                            id="boxVideo"
                                                            controls
                                                        >
                                                            <source
                                                                id="sourceVideo"
                                                                src={cardsCategory[index].video}
                                                                type="video/mp4"
                                                            />
                                                        </video>
                                                    </div>
                                                </div>
                                            ) : cardsCategory[index].portofolio !== undefined ? (
                                                <div className="relative w-full h-full overflow-hidden">
                                                    <img
                                                        className="object-contain w-full h-full"
                                                        src={cardsCategory[index].portofolio}
                                                        alt="Portfolio"
                                                    />
                                                </div>

                                            ) : (
                                                <p className="text-xl text-gray-500">
                                                    Sorry, our video is currently not available.
                                                </p>
                                            )
                                        ) : (
                                            <p className="text-sm text-gray-500">
                                                Woops something went wrong.
                                            </p>
                                        )
                                    }





                                </div>

                            </div>
                        </Modals>
                    </div>
                </div >
            </div >
        </>



    )
}

export default Cards