import { useParams } from 'react-router-dom'

import caro1 from '/images/content/IP_img_hanturium.png'
import caro1Show from '/images/content/IP_img_hanturium_active.png'
import caro2 from '/images/content/IP_img_238.webp'
import caro2Show from '/images/content/IP_img_238_active.webp'
import caro3 from '/images/content/IP_img_atg.webp'
import caro3Show from '/images/content/IP_img_atg_active.webp'
import caro4 from '/images/content/IP_img_baresque.webp'
import caro4Show from '/images/content/IP_img_baresque_active.webp'
import caro5 from '/images/content/IP_img_jolted.webp'
import caro5Show from '/images/content/IP_img_jolted_active.webp'
import { useEffect, useRef, useState } from 'react'
import PillTitle from '../../utils/PillTitle'
import Booklet from '../../components/Booklet/Booklet'
import { dataBooklet } from '../../constant/constant'
import Navbar from '../../components/Navbar/Navbar'
import useResponsive from '../../utils/useResponsive'
import NotFound from '../../utils/NotFound'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAnalyticsEventTracker from '../../utils/useAnalyticsEventTracker'
const LandingPage = () => {
    const gaEventTrackerNewsletter = useAnalyticsEventTracker('Newsletter');
    const gaEventTrackerWishlist = useAnalyticsEventTracker('Wishlist');


    const breakpoints = useResponsive([640, 1536])
    const { category } = useParams();
    const leftElementRef = useRef(null);
    const rightElementRef = useRef(null);
    const topLeftElementRef = useRef(null)
    const topRightElementRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false);
    const [subscribeIsHovered, setSubscribeIsHovered] = useState(false);
    const [email, setEmail] = useState("");
    console.log('====================================');
    console.log(isHovered);
    console.log('====================================');
    const [rotation, setRotation] = useState(0);
    const data = [
        {
            id: 1,
            bgColor: "#F54749",
            title: "Lorem Ipsum",
            img: caro1,
            imgShow: caro1Show,
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            id: 2,
            bgColor: "#F54748",
            title: "Lorem Ipsum",
            img: caro2,
            imgShow: caro2Show,
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            id: 3,
            bgColor: "#7952B3",
            title: "Lorem Ipsum",
            img: caro3,
            imgShow: caro3Show,
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            id: 4,
            bgColor: "#1597BB",
            title: "Lorem Ipsum",
            img: caro4,
            imgShow: caro4Show,
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            id: 5,
            bgColor: "#185ADB",
            title: "Lorem Ipsum",
            img: caro5,
            imgShow: caro5Show,
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const newRotation = Math.min(breakpoints === 0 ? 20 : 25, scrollTop / 10); // Incremental rotation, max 45 degrees

            setRotation(newRotation);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (leftElementRef.current) {
            leftElementRef.current.style.transform = `rotate(${rotation}deg)`;
            topLeftElementRef.current.style.setProperty('top', `${rotation}px`, 'important'); // Adjust top position with !important
            topLeftElementRef.current.style.setProperty('left', `-${breakpoints === 0 ? 90 + rotation : 220 + rotation}px`, 'important');
        }
        if (rightElementRef.current) {
            rightElementRef.current.style.transform = `rotate(${-rotation}deg)`;
            topRightElementRef.current.style.setProperty('top', `${rotation}px`, 'important'); // Adjust top position with !important
            topRightElementRef.current.style.setProperty('right', `${-rotation}px`, 'important');
        }
    }, [rotation]);

    const [navigation, setNavigation] = useState('home')
    const baseUrl = import.meta.env.VITE_BASE_URL || '';
    //const baseUrl = '/';

    const redirect = useNavigate();
    const handleNav = (nav) => {
        setNavigation(nav)
        if (nav === 'home') {
            redirect(`${baseUrl}/`);
        } else {
            redirect(`${baseUrl}/about`);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        let scrollDevice;
        console.log(window.innerWidth);

        if (window.innerWidth <= 768) { // Assuming mobile devices are less than or equal to 768px width
            scrollDevice = 2.5 * 16; // For mobile devices
        } else {

            scrollDevice = 7 * 16;

        }



        if (window.scrollY >= scrollDevice) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    const findBooklet = dataBooklet.find((booklet) => booklet.id === category)

    if (!findBooklet) {
        return <NotFound />
    }

    const clikSteam = () => {
        gaEventTrackerWishlist('Button Click Steam')
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        gaEventTrackerNewsletter('Button Submit Newsletter')
        // API payload
        const payload = {
            email: email,
            ip_newsletter_category: findBooklet.ip_newsletter_category,
        };

        try {
            const response = await axios.post(
                "https://doddi.plexustechdev.com/newsletter/public/api/newsletters",
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data.status === 'success') {
                toast.success("Thank you for subscribing—get ready to elevate your inbox experience. Keep an eye out for exciting updates coming your way soon! 💌", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }

            if (response.data.status === 'error') {
                toast.error(
                    response?.data?.errors.email[0] || "Something went wrong. Please try again.",
                    {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    }
                );
            }

            setEmail(""); // Clear the email input field
        } catch (error) {
            // Error Notification
            toast.error(
                error.response?.data?.message || "Something went wrong. Please try again.",
                {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
            );
        }
    };


    return (
        <>
            <Navbar topLeftElementRef={topLeftElementRef} topRightElementRef={topRightElementRef} leftElementRef={leftElementRef} rightElementRef={rightElementRef} />

            <div className="absolute top-0 h-auto w-full">
                <div className={`menu relative w-fit z-40 m-auto left-0 right-0 bottom-0   top-[2.5rem] md:top-[5rem] lg:top-[7rem] ${isSticky ? 'sticky !translate-y-[30px] lg:!translate-y-[75px] text-center mx-auto z30' : ''}`}>
                    <div className="flex flex-row h-[56px] lg:h-[75px]">
                        <div className='flex bg-transparent bg-no-repeat bg-center bg-btn-nav-left bg-[length:auto_56px] w-[19px] lg:bg-[length:26px_75px] lg:w-[26px]'></div>
                        <div className='flex flex-1 bg-transparent bg-repeat-x bg-center bg-btn-nav-center bg-[length:1px_56px] lg:bg-[length:1px_75px] '>
                            <div className="inline-flex  h-full items-center justify-center content-center gap-2">
                                <div className="relative">
                                    <div
                                        className="flex flex-row h-[26px] lg:h-[50px] cursor-pointer"
                                        onClick={() => handleNav('home')}
                                    >
                                        <div
                                            className={`flex bg-transparent bg-no-repeat bg-center ${navigation === 'home'
                                                ? 'bg-tab_button_active_left w-[14px] bg-[length:14px_26px] lg:bg-[length:28px_50px] lg:w-[28px]'
                                                : 'bg-tab_button_inactive_left w-[14px] bg-[length:14px_21px] lg:bg-[length:28px_40px] lg:w-[28px]'
                                                }`}
                                        />
                                        <div
                                            className={`flex flex-1 bg-transparent bg-repeat-x bg-center ${navigation === 'home'
                                                ? 'bg-tab_button_active_center w-[50px] bg-[length:4px_26px] lg:bg-[length:4px_50px] lg:w-[65px]'
                                                : 'bg-tab_button_inactive_center w-[50px] bg-[length:4px_21px] lg:bg-[length:4px_40px] lg:w-[65px]'
                                                }`}
                                        />
                                        <div
                                            className={`flex bg-transparent bg-no-repeat bg-center scale-x-[-1] ${navigation === 'home'
                                                ? 'bg-tab_button_active_left w-[14px] bg-[length:14px_26px] lg:bg-[length:28px_50px] lg:w-[28px]'
                                                : 'bg-tab_button_inactive_left w-[14px] bg-[length:14px_21px] lg:bg-[length:28px_40px] lg:w-[28px]'
                                                }`}
                                        />
                                        <p className="bahnschrift fw-bold text-[#F4F0E6] text-xs lg:text-base tracking-wide absolute inset-0 flex items-center justify-center">
                                            PROJECTS
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div
                                        className="flex flex-row h-[26px] lg:h-[50px] cursor-pointer"
                                        onClick={() => handleNav('about')}
                                    >
                                        <div
                                            className={`flex bg-transparent bg-no-repeat bg-center ${navigation === 'about'
                                                ? 'bg-tab_button_active_left w-[14px] bg-[length:14px_26px] lg:bg-[length:28px_50px] lg:w-[28px]'
                                                : 'bg-tab_button_inactive_left w-[14px] bg-[length:14px_21px] lg:bg-[length:28px_40px] lg:w-[28px]'
                                                }`}
                                        />
                                        <div
                                            className={`flex flex-1 bg-transparent bg-repeat-x bg-center ${navigation === 'about'
                                                ? 'bg-tab_button_active_center w-[50px] bg-[length:4px_26px] lg:bg-[length:4px_50px] lg:w-[65px]'
                                                : 'bg-tab_button_inactive_center w-[50px] bg-[length:4px_21px] lg:bg-[length:4px_40px] lg:w-[65px]'
                                                }`}
                                        />
                                        <div
                                            className={`flex bg-transparent bg-no-repeat bg-center scale-x-[-1] ${navigation === 'about'
                                                ? 'bg-tab_button_active_left w-[14px] bg-[length:14px_26px] lg:bg-[length:28px_50px] lg:w-[28px]'
                                                : 'bg-tab_button_inactive_left w-[14px] bg-[length:14px_21px] lg:bg-[length:28px_40px] lg:w-[28px]'
                                                }`}
                                        />
                                        <p className="bahnschrift fw-bold text-[#F4F0E6] text-xs lg:text-base tracking-wide absolute inset-0 flex items-center justify-center">
                                            ABOUT US
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex bg-transparent bg-no-repeat bg-center bg-btn-nav-right bg-[length:auto_56px] w-[20px] lg:bg-[length:26px_75px] lg:w-[26px]'></div>
                    </div>
                    <div className="relative  h-auto w-full">
                        <div className="absolute bottom-[-7px] md:bottom-[-7px] lg:bottom-[-18px] -left-[2rem] md:-left-[2rem] lg:-left-[2.9rem] -z-10">
                            <div className="flex flex-row h-[48px] lg:h-[94px]">
                                <div className='flex bg-transparent bg-no-repeat bg-center bg-tab_bg_b_left bg-[length:auto_50px] lg:bg-[length:auto_94px] w-[100px] lg:w-[160px]'></div>
                            </div>
                        </div>


                        <div className="absolute bottom-[-7px] md:bottom-[-7px] lg:bottom-[-18px] -right-[2rem] md:-right-[2rem] lg:-right-[2.9rem] -z-10">
                            <div className="flex flex-row h-[48px] md:h-[48px] lg:h-[94px]">
                                <div className='flex bg-transparent bg-no-repeat bg-center bg-tab_bg_b_right bg-[length:auto_50px] lg:bg-[length:auto_94px] w-[100px] lg:w-[160px]'></div>
                            </div>
                        </div>

                    </div>
                </div>





                <div className="flex flex-row h-[32px] lg:h-[80px] mt-[-25px] md:mt-4 lg:mt-0">
                    <div className='flex bg-transparent bg-no-repeat  bg-c11 w-[138px] bg-[length:138px_32px] lg:bg-[length:366px_80px] lg:w-[366px]'></div>
                    <div className='flex flex-1 bg-transparent bg-repeat-x bg-top bg-c12 bg-contain'></div>
                    <div className='flex bg-transparent bg-no-repeat  bg-c13 w-[138px] bg-[length:138px_32px] lg:bg-[length:366px_80px] lg:w-[366px]'></div>
                </div>

                <div className="flex flex-row h-[40px] lg:h-[117px]">
                    <div className='flex bg-transparent bg-no-repeat bg-center bg-d1 bg-[length:19px_auto]  w-[19px] lg:bg-contain lg:w-[48px]'></div>
                    <div className='flex flex-1 bg-transparent bg-repeat bg-top bg-d2  lg:bg-contain'>

                    </div>
                    <div className='flex bg-transparent bg-no-repeat bg-center bg-d3 bg-[length:19px_auto]  w-[19px] lg:bg-contain lg:w-[48px]'></div>
                </div>

                <div className="flex flex-row h-auto">
                    <div className='flex bg-transparent bg-repeat-y bg-center bg-d12 bg-[length:19px]  w-[19px] lg:bg-contain lg:w-[48px]'></div>
                    <div className='flex flex-1 bg-transparent bg-repeat bg-top bg-d2  bg-contain'>

                    </div>
                    <div className='flex bg-transparent bg-repeat-y bg-center bg-d32  bg-[length:19px]  w-[19px]  lg:bg-contain lg:w-[48px]'></div>
                </div>

                <div className="flex flex-row h-[8px] lg:h-[23px] flex-1 flex-shrink-0 basis-[10px]  ">
                    <div className='flex bg-transparent bg-no-repeat bg-center bg-d13 bg-[length:19px_auto]  w-[19px] lg:bg-contain lg:w-[48px]'>
                    </div>
                    <div className='flex flex-1 bg-transparent bg-repeat-x bg-top bg-e2 bg-contain'>

                    </div>
                    <div className='flex bg-transparent bg-no-repeat bg-center bg-d33 bg-[length:19px_auto]  w-[19px] lg:bg-contain lg:w-[48px]'></div>
                </div>

                <div className="flex flex-row h-auto flex-1 flex-shrink-0 basis-[10px]">
                    <div className='flex bg-transparent bg-repeat-y bg-center bg-e1 bg-[length:19px_1px] w-[19px] lg:bg-contain lg:w-[48px]'></div>
                    <div className='flex flex-1 flex-col justify-between bg-transparent bg-repeat bg-top bg-e2 bg-contain'>

                        <div className="relative  h-auto w-full">
                            <div className="absolute bottom-0  -left-[1.2rem] md:-left-[1.2rem] lg:-left-12 ">
                                <div className="flex flex-row h-[127px] lg:h-[315px]">
                                    <div className='flex bg-transparent bg-no-repeat bg-center bg-f1 bg-contain w-[35px] lg:w-[86px]'></div>
                                </div>
                            </div>


                            <div className="absolute bottom-0 -right-[1.2rem] md:-right-[1.2rem] lg:-right-12 ">
                                <div className="flex flex-row h-[127px] md:h-[127px] lg:h-[315px]">
                                    <div className='flex bg-transparent bg-no-repeat bg-center bg-f3 bg-contain w-[35px] lg:w-[86px]'></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='flex bg-transparent bg-repeat-y bg-center bg-e3 bg-[length:19px_1px] w-[19px] lg:bg-contain lg:w-[48px]'></div>
                </div>

                <div className="flex flex-row h-auto">
                    <div className='flex bg-transparent bg-repeat-y bg-center bg-g1 bg-[length:35px_1px] lg:bg-[length:87px_1px] w-[35px] lg:w-[87px]'></div>

                    <div className='flex flex-1 bg-transparent bg-repeat bg-top bg-g2 bg-contain '>

                        <div className="relative w-full">

                            <div className="w-full  mx-auto pb-4 lg:pb-14  ">
                                <img src={findBooklet.imgCover} className='text-center  w-full mx-auto ' />
                            </div>
                            <PillTitle>
                                <div className="flex flex-row h-[38px]">
                                    <div className='flex bg-transparent bg-no-repeat bg-center bg-title_pill_left w-[88px] bg-contain '></div>
                                    <div className='flex flex-1 bg-transparent bg-repeat-x bg-center bg-title_pill_center w-[180px] lg:w-[300px] bg-contain '>
                                        <div className="relative w-full">
                                            <div className='absolute inset-0'>
                                                <div className="flex h-full items-center justify-center text-[#FFF] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bahnschrift text-center  font-bold text-xs lg:text-sm">
                                                    {findBooklet.title}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex bg-transparent bg-no-repeat bg-center bg-title_pill_right w-[88px] bg-contain '></div>
                                </div>
                            </PillTitle>

                            <Booklet>
                                <div className="w-full ">
                                    {findBooklet.videoCover === undefined || findBooklet.videoCover === null ? (
                                        <div className="relative w-full pb-[56.25%]"> {/* 16:9 aspect ratio */}
                                            <iframe
                                                className="absolute top-0 left-0 w-full h-full"
                                                src={`https://www.youtube.com/embed/${findBooklet.videoCoverYT}?autoplay=1&mute=1`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <div className="relative w-full pb-[56.25%]"> {/* 16:9 aspect ratio */}
                                            <video
                                                className="absolute top-0 left-0 w-full h-auto object-cover"
                                                poster="images/content/poster-video.webp"
                                                id="boxVideo"
                                                autoPlay
                                                loop
                                                muted
                                                onError={(e) => console.error("Video failed to load", e)}
                                            >
                                                <source
                                                    id="sourceVideo"
                                                    src={findBooklet.videoCover}
                                                    type="video/mp4"
                                                />
                                            </video>
                                        </div>
                                    )}
                                    
				    {findBooklet.steamWidget != undefined || findBooklet.steamWidget != null ? (
                                        <div className="relative w-full pb-[210px] mt-6"> 
                                            <iframe
                                                className="absolute top-0 left-0 w-full h-full"
                                                src={`https://store.steampowered.com/widget/${findBooklet.steamWidget}/`}
                                                frameBorder="0"
                                            ></iframe>
                                        </div>
                                    ) : (
                                        null
                                    )}
                                    
				    {findBooklet.newsletter != null || findBooklet.newsletter != undefined ?

                                        <div className="relative w-full h-auto text-center mx-auto">
                                            {/* Background Image */}
                                            <img
                                                src={findBooklet.newsletter}
                                                alt="Background"
                                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
                                            />

                                            {/* Content Wrapper */}
                                            <div className="p-6 text-center text-white relative w-auto xl:w-3/4 mx-auto">
                                                <div className="grid grid-cols-2 mt-3 md:mt-[3rem] lg:mt-[1.5rem] 3xl:mt-[4.5rem] ">
                                                    <div>
                                                        {
                                                            findBooklet.wishlistImg != undefined || findBooklet.wishlistImg != null ?
                                                                <img src={findBooklet.wishlistImg} className="text-center mx-auto w-24 md:w-36 lg:w-[7rem] xl:w-auto" />
                                                                :
                                                                null
                                                        }
                                                        <a
                                                            href={findBooklet.steam}
                                                            onClick={() => clikSteam()}
                                                            onMouseEnter={() => setIsHovered(true)}
                                                            onMouseLeave={() => setIsHovered(false)}
                                                        >
                                                            <img
                                                                src={isHovered ? findBooklet.steamBtnHover : findBooklet.steamBtn}
                                                                className="text-center mx-auto w-28 md:w-48 lg:w-[7rem] xl:w-auto"

                                                            />
                                                        </a>
                                                    </div>
                                                    <div></div>
                                                </div>

                                                <form
                                                    onSubmit={handleFormSubmit}
                                                    className="flex flex-col items-center justify-center gap-3 mt-[2rem] md:mt-[6.5rem] lg:mt-[1.5rem] xl:mt-[7.5rem]  px-4">
                                                    {
                                                        findBooklet.subscribeImg != undefined || findBooklet.subscribeImg != null ?
                                                            <img src={findBooklet.subscribeImg} className="text-center mx-auto w-24 md:w-36 lg:w-[7rem] xl:w-auto" />
                                                            :
                                                            null
                                                    }
                                                    <div className="flex flex-row items-center justify-center gap-3">
                                                        <div className="relative w-auto  h-4 md:h-8  xl:h-16 flex items-center px-4">
                                                            {/* Background Image */}
                                                            <img
                                                                src={findBooklet.input}
                                                                alt="Input Background"
                                                                className="absolute top-0 left-0 h-4 md:h-8 xl:h-16"
                                                            />
                                                            {/* Email Icon */}
                                                            <div className="absolute left-1 md:left-3 xl:left-5 flex items-center h-full">
                                                                <img
                                                                    src={findBooklet.emailIcon}
                                                                    alt="Email Icon"
                                                                    className="w-2 md:w-4 xl:w-8"
                                                                />
                                                            </div>
                                                            {/* Input Field */}
                                                            <input
                                                                type="email"
                                                                placeholder="Enter your email here"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                className={`relative w-full h-full pl-0 md:pl-6 xl:pl-12 bg-transparent outline-none ${findBooklet.colorText} ${findBooklet.colorTextPlaceholder}  ${findBooklet.font1} placeholder:${findBooklet.font2} text-[0.3rem] md:text-[0.7rem] lg:text-base`}
                                                            />
                                                        </div>
                                                        {/* Subscribe Button */}
                                                        <button
                                                            type="submit"
                                                            onMouseEnter={() => setSubscribeIsHovered(true)}
                                                            onMouseLeave={() => setSubscribeIsHovered(false)}

                                                        >
                                                            <img
                                                                src={subscribeIsHovered ? findBooklet.subscribeBtnHover : findBooklet.subscribeBtn}
                                                                className="mx-auto w-16 md:w-24 lg:w-[7rem] xl:w-auto"
                                                                alt="Subscribe Button"
                                                            />
                                                        </button>
                                                    </div>
                                                </form>


                                            </div>
                                        </div>

                                        :
                                        null
                                    }


                                    <div className='p-4 my-4 font-bold text-lg lg:text-2xl text-white bg-[#566ea1] rounded-lg text-center'>
                                        <p className='bahnschrift'>{findBooklet.tagline}</p>
                                    </div>
                                    <p className='mt-6 bahnschrift'>{findBooklet.description}</p>
                                    <div className="mt-4">
                                        <img src={findBooklet.img2} className='text-center mx-auto mt-4' />
                                        <img src={findBooklet.img3} className='text-center mx-auto mt-4' />
                                    </div>
                                    <p className='mt-6 bahnschrift'>{findBooklet.description2}</p>
                                    <img src={findBooklet.img6} className='text-center mx-auto my-4' />
                                    <img src={findBooklet.img7} className='text-center mx-auto my-4' />
                                    <p className='mt-6 bahnschrift'>{findBooklet.description3}</p>

                                    <img src={findBooklet.img4} className='text-center mx-auto my-4' />
                                    <img src={findBooklet.img5} className='text-center mx-auto my-4' />
                                </div>
                            </Booklet>
                        </div>
                    </div>
                    <div className='flex bg-transparent bg-repeat-y bg-center bg-g3 bg-[length:35px_1px] lg:bg-[length:87px_1px] w-[35px] lg:w-[87px]'></div>
                </div >

                <div className="flex flex-row h-[90px] lg:h-[213px] ">
                    <div className='flex bg-transparent bg-no-repeat bg-center bg-h1 bg-[length:35px_90px] lg:bg-[length:85px_213px] w-[35px] lg:w-[85px]'></div>
                    <div className='flex flex-1 bg-transparent bg-repeat bg-top bg-h2 bg-contain '></div>
                    <div className='flex bg-transparent bg-no-repeat bg-center bg-h3 bg-[length:35px_90px] lg:bg-[length:85px_213px] w-[35px] lg:w-[85px]'></div>
                </div>

                <div className="flex flex-row h-auto ">
                    <div className='flex bg-transparent bg-repeat-y bg-center bg-h12 bg-[length:35px_1px] lg:bg-[length:85px_1px] w-[35px] lg:w-[85px]'></div>
                    <div className='flex flex-1 bg-transparent bg-repeat bg-top bg-h2 bg-contain'>
                    </div>
                    <div className='flex bg-transparent bg-repeat-y bg-center bg-h32 bg-[length:35px_1px] lg:bg-[length:85px_1px] w-[35px] lg:w-[85px]'></div>
                </div>

                <div className="flex flex-row h-[90px] lg:h-[213px] ">
                    <div className='flex bg-transparent bg-no-repeat bg-center bg-h13 bg-[length:35px_90px] lg:bg-[length:85px_213px] w-[35px] lg:w-[85px]'></div>
                    <div className='flex flex-1 bg-transparent bg-repeat bg-top bg-h2 bg-contain '></div>
                    <div className='flex bg-transparent bg-no-repeat bg-center bg-h33 bg-[length:35px_90px] lg:bg-[length:85px_213px] w-[35px] lg:w-[85px]'></div>
                </div>

                <div className="flex flex-row h-[40px] lg:h-[96px] ">
                    <div className='flex bg-transparent bg-no-repeat bg-center bg-h14 bg-[length:145px_40px] lg:bg-[length:360px_96px] w-[145px] lg:w-[360px]'></div>
                    <div className='flex flex-1 bg-transparent bg-repeat-x bg-top bg-h22 bg-contain '></div>
                    <div className='flex bg-transparent bg-no-repeat bg-center bg-h34 bg-[length:145px_40px] lg:bg-[length:360px_96px] w-[145px] lg:w-[360px]'></div>
                </div>
            </div >

            <ToastContainer />
        </>
    )
}

export default LandingPage