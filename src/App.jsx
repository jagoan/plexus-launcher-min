
import caro1 from '/images/content/IP_img_comanomaly.png'
import caro1Show from '/images/content/IP_img_comanomaly_active.png'
import caro2 from '/images/content/IP_img_238.webp'
import caro2Show from '/images/content/IP_img_238_active.webp'
import caro3 from '/images/content/IP_img_atg.webp'
import caro3Show from '/images/content/IP_img_atg_active.webp'
import caro4 from '/images/content/IP_img_baresque.webp'
import caro4Show from '/images/content/IP_img_baresque_active.webp'
import caro5 from '/images/content/IP_img_jolted.webp'
import caro5Show from '/images/content/IP_img_jolted_active.webp'
import orayland from '/images/about/logo footer oray.webp'
import qroray from '/images/about/qr oray.webp'
import plexusland from '/images/about/logo footer plexus.webp'
import qrplexus from '/images/about/qr plexus.webp'
import Oplex from '/images/about/title_we are.webp'
import Oray from '/images/about/logo oray.webp'
import Plexus from '/images/about/logo plexus.webp'
import { useEffect, useRef, useState } from 'react'
import { cards, cardsOffline, cardsMobile, cardsCategory1 } from './constant/constant'
import Carousel from './utils/Carousel'
import useResponsive from './utils/useResponsive'
import AboutUs from './components/AboutUs/AboutUs'
import Navbar from './components/Navbar/Navbar'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import PillTitle from './utils/PillTitle'
import Cards from './utils/Cards'
import { FaXTwitter, FaFacebookF, FaEnvelope, FaInstagram } from "react-icons/fa6";
import WrapperAbout from './utils/WrapperAbout'

import useAnalyticsEventTracker from './utils/useAnalyticsEventTracker'
import LoadingLaunch from './utils/LoadingLaunch'
import { useLocation, useNavigate } from 'react-router-dom'

function App() {
  const breakpoints = useResponsive([640, 1536])
  const redirect = useNavigate();
  const location = useLocation();

  // Extracting the subdirectory '/about' from the pathname
  const subDirectory = location.pathname.split('/')[2];
  const data = [
    {
      id: 1,
      bgColor: "#F54748",
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

  const [navigation, setNavigation] = useState(subDirectory || 'home')

  //console.log("Navigation:", navigation);

  const leftElementRef = useRef(null);
  const rightElementRef = useRef(null);
  const topLeftElementRef = useRef(null)
  const topRightElementRef = useRef(null)
  const [rotation, setRotation] = useState(0);

  const gaEventTrackerProjects = useAnalyticsEventTracker('Projects');
  const gaEventTrackerAbout = useAnalyticsEventTracker('About');

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


  const handleNav = (nav) => {
    setNavigation(nav)
    if (nav === 'home') {
      gaEventTrackerProjects(`button projects`)
    } else {
      gaEventTrackerAbout(`button about`)
    }

  }

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let scrollDevice;

      if (window.innerWidth <= 768) { // Assuming mobile devices are less than or equal to 768px width
        scrollDevice = 15 * 16; // For mobile devices
      } else {
        if (navigation === 'demo') {
          scrollDevice = 7 * 16; // For larger devices
        } else {
          scrollDevice = 55 * 16; // For larger devices
        }
      }

      if (window.scrollY >= scrollDevice) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Call handleScroll initially to set the state based on current scroll position
    handleScroll();

    // Add event listener for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount or when navigation changes
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigation]);




  const [isLoading, setIsLoading] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isCover, setIsCover] = useState(true)

  const baseUrl = import.meta.env.VITE_BASE_URL || '';
  //const baseUrl = '/';

  const bgImages = [
    `${baseUrl}/images/about/logo plexus.webp`,
    `${baseUrl}/images/about/logo oray.webp`,
    `${baseUrl}/images/navbar/nav_left.webp`,
    `${baseUrl}/images/navbar/nav_yellow_left.webp`,
    `${baseUrl}/images/navbar/nav_center.webp`,
    `${baseUrl}/images/navbar/nav_right.webp`,
    `${baseUrl}/images/navbar/nav_yellow_right.webp`,
    `${baseUrl}/images/navbar/nav_repeat.webp`,
    `${baseUrl}/images/body/A1.webp`,
    `${baseUrl}/images/body/A2.webp`,
    `${baseUrl}/images/body/A3.webp`,
    `${baseUrl}/images/body/B1.webp`,
    `${baseUrl}/images/body/B2.webp`,
    `${baseUrl}/images/body/B3.webp`,
    `${baseUrl}/images/body/C1.webp`,
    `${baseUrl}/images/body/C2.webp`,
    `${baseUrl}/images/body/C11.webp`,
    `${baseUrl}/images/body/C12.webp`,
    `${baseUrl}/images/body/C13.webp`,
    `${baseUrl}/images/body/D1.webp`,
    `${baseUrl}/images/body/D1 - 2.webp`,
    `${baseUrl}/images/body/D1 - 3.webp`,
    `${baseUrl}/images/body/D2.webp`,
    `${baseUrl}/images/body/D3.webp`,
    `${baseUrl}/images/body/D3 - 2.webp`,
    `${baseUrl}/images/body/D3 - 3.webp`,
    `${baseUrl}/images/body/E1.webp`,
    `${baseUrl}/images/body/E2.webp`,
    `${baseUrl}/images/body/E3.webp`,
    `${baseUrl}/images/body/F1.webp`,
    `${baseUrl}/images/body/F2.webp`,
    `${baseUrl}/images/body/F3.webp`,
    `${baseUrl}/images/body/G1.webp`,
    `${baseUrl}/images/body/G2.webp`,
    `${baseUrl}/images/body/G3.webp`,
    `${baseUrl}/images/body/H1 - 1.webp`,
    `${baseUrl}/images/body/H1 - 2.webp`,
    `${baseUrl}/images/body/H1 - 3.webp`,
    `${baseUrl}/images/body/H1 - 4.webp`,
    `${baseUrl}/images/body/H2 - 1.webp`,
    `${baseUrl}/images/body/H2 - 2.webp`,
    `${baseUrl}/images/body/H3 - 1.webp`,
    `${baseUrl}/images/body/H3 - 2.webp`,
    `${baseUrl}/images/body/H3 - 3.webp`,
    `${baseUrl}/images/body/H3 - 4.webp`,
  ];

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = bgImages.length;

    const onLoad = () => {
      loadedCount += 1;
      const percentage = Math.round((loadedCount / totalImages) * 100);
      setLoadingPercentage(percentage);

      if (loadedCount === totalImages) {
        setLoadingPercentage(100);
        setIsLoading(false);
      }
    };

    const onError = (src) => {
      console.error(`Failed to load image: ${src}`);
      loadedCount += 1;
      const percentage = Math.round((loadedCount / totalImages) * 100);
      setLoadingPercentage(percentage);

      if (loadedCount === totalImages) {
        setLoadingPercentage(100);
        setIsLoading(false);
      }
    };

    bgImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = onLoad;
      img.onerror = () => onError(src);
    });

    const isScroll = () => {
      if (isCover) {
        setIsCover(false);
      }
    };

    window.addEventListener('scroll', isScroll);

    return () => {
      window.removeEventListener('scroll', isScroll);
    };
  }, [isCover]);

  const [isLoadingLaunch, setIsLoadingLaunch] = useState(false)

  useEffect(() => {


    if (isLoadingLaunch) {
      console.log("Loading...");
    } else {
      console.log("Not loading...");
    }
  }, [isLoadingLaunch]);

  return (
    <>
      <div className={`loading-screen ${!isCover && loadingPercentage == 100 ? 'animate-fadeoutup' : ''}`} data-loading={isLoading ? "loading" : "complete"}>
        <div className="loading-overlay">
          <div className={`loading-percentage ${loadingPercentage == 100 ? 'hidden' : ''}`}>
            {loadingPercentage}%
          </div>

          <div className={` ${loadingPercentage == 100 ? 'fixed bottom-[50px]' : 'hidden'}`}>
            <div className="flex flex-col items-center justify-center">
              <p className='bahnschrift bg-white p-2 rounded-xl font-bold my-2'>Scroll Down</p>
              <div id="mouse-scroll">
                <div className="mouse">
                  <div className="mouse-in"></div>
                </div>
                <div>
                  <span className="down-arrow-1"></span>
                  <span className="down-arrow-2"></span>
                  <span className="down-arrow-3"></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {
        loadingPercentage === 100 ?
          <>
            {baseUrl === '/launcher-oplex' && isLoadingLaunch && <LoadingLaunch />}
            {/* Navbar Section */}
            <Navbar topLeftElementRef={topLeftElementRef} topRightElementRef={topRightElementRef} leftElementRef={leftElementRef} rightElementRef={rightElementRef} />

            {/* Body Background Section */}

            <div className="absolute top-0 h-auto w-full">
              <div className={`menu relative w-fit z-40 m-auto left-0 right-0 bottom-0  ${navigation === 'demo' ? 'top-[7rem] md:top-[7rem] lg:top-[7rem]' : 'top-[15rem] md:top-[15rem] lg:top-[55rem]'} ${isSticky ? 'sticky !translate-y-[30px] lg:!translate-y-[75px] text-center mx-auto z30' : ''}`}>
                <div className="flex flex-row h-[56px] lg:h-[75px]">
                  <div className='flex bg-transparent bg-no-repeat bg-center bg-btn-nav-left bg-[length:auto_56px] w-[19px] lg:bg-[length:26px_75px] lg:w-[26px]'></div>
                  <div className='flex flex-1 bg-transparent bg-repeat-x bg-center bg-btn-nav-center bg-[length:1px_56px] lg:bg-[length:1px_75px] '>
                    <div className="inline-flex  h-full items-center justify-center content-center gap-2">
                      {
                        baseUrl === '/launcher-oplex' ?
                          <div className="relative">
                            <div
                              className="flex flex-row h-[26px] lg:h-[50px] cursor-pointer"
                              onClick={() => handleNav('demo')}
                            >
                              <div
                                className={`flex bg-transparent bg-no-repeat bg-center ${navigation === 'demo'
                                  ? 'bg-tab_button_active_left w-[14px] bg-[length:14px_26px] lg:bg-[length:28px_50px] lg:w-[28px]'
                                  : 'bg-tab_button_inactive_left w-[14px] bg-[length:14px_21px] lg:bg-[length:28px_40px] lg:w-[28px]'
                                  }`}
                              />
                              <div
                                className={`flex flex-1 bg-transparent bg-repeat-x bg-center ${navigation === 'demo'
                                  ? 'bg-tab_button_active_center w-[50px] bg-[length:4px_26px] lg:bg-[length:4px_50px] lg:w-[65px]'
                                  : 'bg-tab_button_inactive_center w-[50px] bg-[length:4px_21px] lg:bg-[length:4px_40px] lg:w-[65px]'
                                  }`}
                              />
                              <div
                                className={`flex bg-transparent bg-no-repeat bg-center scale-x-[-1] ${navigation === 'demo'
                                  ? 'bg-tab_button_active_left w-[14px] bg-[length:14px_26px] lg:bg-[length:28px_50px] lg:w-[28px]'
                                  : 'bg-tab_button_inactive_left w-[14px] bg-[length:14px_21px] lg:bg-[length:28px_40px] lg:w-[28px]'
                                  }`}
                              />
                              <p className="bahnschrift fw-bold text-[#F4F0E6] text-xs lg:text-base tracking-wide absolute inset-0 flex items-center justify-center">
                                PLAY
                              </p>
                            </div>
                          </div>
                          :
                          null

                      }


                      <div className="relative">
                        <div
                          className="flex flex-row h-[26px] lg:h-[50px] cursor-pointer"
                          onClick={() => { handleNav('home'); redirect(`${baseUrl}/`); }}
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
                          onClick={() => { handleNav('about'); redirect(`${baseUrl}/about`) }}
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

              {navigation === 'demo' ?

                baseUrl === '/launcher-oplex' ?
                  <div className="carousel relative w-full hidden">
                    <div className="p-4">
                      <Carousel data={data} activeSlides={3} />
                    </div>
                  </div>
                  :
                  null
                :
                <>
                  <div className="flex flex-row h-[48px] lg:h-[93px] mt-[-4.7rem]">
                    <div className='flex bg-transparent bg-no-repeat bg-center bg-a1 bg-[length:33px_48px] w-[30px] lg:bg-[length:77px_93px] lg:w-[77px]'></div>
                    <div className='flex flex-1 bg-transparent bg-repeat-x bg-center bg-a2 bg-contain'></div>
                    <div className='flex bg-transparent bg-no-repeat bg-center bg-a3 bg-[length:33px_48px] w-[30px] lg:bg-[length:77px_93px] lg:w-[77px]'></div>
                  </div>

                  <div className="flex flex-row  h-[200px] lg:h-[681px]">
                    <div className='flex bg-transparent  bg-center bg-no-repeat bg-b1 w-[22px] bg-[length:25px_200px] lg:bg-[length:93px_681px] lg:w-[93px] xl:bg-[length:59px_681px] xl:w-[59px] '></div>
                    <div className='flex flex-1 bg-transparent bg-repeat bg-top bg-b2 bg-[length:1px_96px] md:bg-[length:1px_196px] lg:bg-contain  xl:bg-contain animate-glow'>
                      <div className="carousel relative w-full">
                        <div className="p-4">
                          <Carousel data={data} activeSlides={3} />
                        </div>
                      </div>
                    </div>
                    <div className='flex bg-transparent bg-no-repeat  bg-center bg-b3 w-[22px] bg-[length:25px_200px] lg:bg-[length:93px_681px] lg:w-[93px] xl:bg-[length:59px_681px] xl:w-[59px] '></div>
                  </div>

                  <div className="flex flex-row h-[24px] lg:h-[57px]">
                    <div className='flex bg-transparent bg-no-repeat  bg-c1 bg-[length:84px_24px] w-[84px] lg:bg-[length:223px_57px] lg:w-[223px]'></div>
                    <div className='flex flex-1 bg-transparent bg-repeat-x bg-top bg-c2 bg-[length:1px_24px] lg:bg-[length:1px_57px]'>

                      <div className="relative  h-auto w-full">
                        <div className="absolute bottom-[1px]  -left-[5.3rem] md:-left-[1.2rem] lg:-left-[13.95rem] ">
                          <div className="flex flex-row h-[30px] md:h-[74px] lg:h-[74px]">
                            <div className='flex bg-transparent bg-no-repeat bg-center bg-c41 bg-[length:30px_32px] lg:bg-contain w-[30px] lg:w-[77px]'></div>
                          </div>
                        </div>


                        <div className="absolute bottom-[1px] -right-[5.3rem] md:-right-[1.2rem] lg:-right-[13.95rem] ">
                          <div className="flex flex-row h-[30px] md:h-[74px] lg:h-[74px]">
                            <div className='flex bg-transparent bg-no-repeat bg-center bg-c42 bg-[length:30px_32px] lg:bg-contain w-[30px] lg:w-[77px]'></div>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className='flex bg-transparent bg-no-repeat  bg-c3 bg-[length:84px_24px] w-[84px] lg:bg-[length:223px_57px] lg:w-[223px]'></div>
                  </div>
                </>
              }



              <div className="flex flex-row h-[32px] lg:h-[80px]">
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
                  <div className="relative w-full">
                    {navigation === 'home' ?
                      <>
                        <PillTitle>
                          <div className="flex flex-row h-[59px]">
                            <div className='flex bg-transparent bg-no-repeat bg-center bg-title_ip_pill_left w-[89px] bg-contain '></div>
                            <div className='flex flex-1 bg-transparent bg-repeat-x bg-center bg-title_ip_pill_center w-[150px] bg-contain '>
                              <div className="relative w-full">
                                <div className='absolute inset-0'>
                                  <div className="flex h-full items-center justify-center text-[#44242A] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bahnschrift font-bold text-xs lg:text-base">
                                    OUR FEATURED IPs
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='flex bg-transparent bg-no-repeat bg-center bg-title_ip_pill_right w-[89px] bg-contain '></div>
                          </div>

                        </PillTitle>

                        <Cards cardsCategory={cards} ip={true} ga={gaEventTrackerProjects} />
                      </>
                      : navigation === 'demo' ?

                        baseUrl === '/launcher-oplex' ?
                          <>
                            <PillTitle>
                              <div className="flex flex-row h-[75px]">
                                <div className='flex bg-transparent bg-no-repeat bg-center bg-title_ip_pill_left w-[113px]  bg-[length:auto_75px] '></div>
                                <div className='flex flex-1 bg-transparent bg-repeat-x bg-center bg-title_ip_pill_center w-[250px] bg-contain '>
                                  <div className="relative w-full">
                                    <div className='absolute inset-0'>
                                      <div className="flex h-full items-center justify-center text-[#44242A] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bahnschrift font-bold text-xs lg:text-2xl">
                                        DEMO IPs DESKTOP
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='flex bg-transparent bg-no-repeat bg-center bg-title_ip_pill_right w-[113px]  bg-[length:auto_75px] '></div>
                              </div>

                            </PillTitle>
                            <div className='mt-[5rem]'>
                              <Cards cardsCategory={cardsOffline} ip={true} isLoadingLaunch={isLoadingLaunch} setIsLoadingLaunch={setIsLoadingLaunch} />
                            </div>
                          </>
                          :
                          null

                        :
                        <>
                          <PillTitle>
                            <div className="flex flex-row h-[38px]">
                              <div className='flex bg-transparent bg-no-repeat bg-center bg-title_pill_left w-[88px] bg-contain '></div>
                              <div className='flex flex-1 bg-transparent bg-repeat-x bg-center bg-title_pill_center w-[100px] bg-contain '>
                                <div className="relative w-full">
                                  <div className='absolute inset-0'>
                                    <div className="flex h-full items-center justify-center text-[#FFF] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bahnschrift font-bold text-xs lg:text-xl">
                                      We Are
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='flex bg-transparent bg-no-repeat bg-center bg-title_pill_right w-[88px] bg-contain '></div>
                            </div>
                          </PillTitle>

                          <div className="grid md:grid-cols-1 lg:grid-cols-2  w-full lg:w-3/4  items-center justify-center align-middle mt-[2rem] lg:mt-[8rem] gap-4 mx-auto p-3 ">

                            <img src={Oray} className='mx-auto animate-glowBorder' />

                            <WrapperAbout except={false}>
                              <article className='text-wrap'>
                                <h3 className='text-lg font-bold uppercase text-black bahnschrift'>Oray Studios</h3>
                                <p className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                  We are an Art, Design & Technology guild founded in 2008 by Python (Iqbal Aribaskara) & Kobra (Gifny Richata). Our mission is to bring the best of Indonesian artists' works to the world, enjoying ourselves while doing that, and hope that what we do could make this world a slightly better place :)
                                </p>
                                <p className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                  We offer our service as an outsource studio, providing artworks and designs on any media you can think of: Video games, comicbook, apps, fashion, animations, etc. Our clients ranged from big companies and professionals, to indie and do-it-yourself creators, from all over the globe.
                                </p>
                                <a href="https://www.oraystudios.com"><p className='text-[#1076BB] font-bold'>www.oraystudios.com</p></a>
                              </article>
                            </WrapperAbout>
                          </div>
                        </>

                    }

                  </div>
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
                  <div className="relative w-full">

                    {navigation === 'home' ?
                      <>
                        <PillTitle margin="mt-[2rem]">
                          <div className="flex flex-row h-[38px]">
                            <div className='flex bg-transparent bg-no-repeat bg-center bg-title_pill_left w-[88px] bg-contain '></div>
                            <div className='flex flex-1 bg-transparent bg-repeat-x bg-center bg-title_pill_center w-[150px] bg-contain '>
                              <div className="relative w-full">
                                <div className='absolute inset-0'>
                                  <div className="flex h-full items-center justify-center text-[#FFF] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bahnschrift font-bold text-xs lg:text-base">
                                    OTHER IPs
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='flex bg-transparent bg-no-repeat bg-center bg-title_pill_right w-[88px] bg-contain '></div>
                          </div>

                        </PillTitle>
                        <Cards cardsCategory={cardsCategory1} />
                      </>
                      : navigation === 'demo' ?
                        null
                        :
                        <>
                          <div className="grid grid-col grid-cols-1 lg:grid-cols-2 w-full lg:w-3/4 items-center justify-center align-middle md:mt-[5rem] gap-4 mx-auto p-6">
                            <div className='order-first lg:order-last'>
                              <img src={Plexus} className='animate-glowBorder mx-auto' />
                            </div>
                            <WrapperAbout except={false}>
                              <article className='text-wrap'>
                                <h3 className='text-lg font-bold uppercase text-black bahnschrift'>Plexus Studio</h3>
                                <p className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                  We are a team of programmers, 3D artist, tinkerers, who each have had more than 5 years experience in the field, with tens, even hundreds of projects under our belts. Now we join forces to provide the best experience for you in developing your
                                  projects, be it apps, games, web based, mobile, AR, VR. We are ready. We also embrace new technologies to help you achieve your goals, so if you have an idea you would want to develop, do not hesitate to contact us at hello@plexus.id for a little chit-chat. Where did the name came from? Well, the Solar Plexus Chakra located between the navel and solar plexus, is believed to be the core of our personality, our identity, of our ego. It represents the human qualities of self-esteem, willpower, self discipline as well as warmth in our personalities.
                                </p>
                                <a href="https://www.plexus.id"><p className='text-[#1076BB] font-bold'>www.plexus.id</p></a>
                              </article>
                            </WrapperAbout>
                          </div>
                        </>

                    }
                  </div>
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
                  {navigation === 'home' ?

                    <div className="relative w-full mt-[12rem]  lg:mt-[2rem] ">
                      <ProjectsPage />
                    </div>
                    : navigation === 'demo' ?
                      baseUrl === '/launcher-oplex' ?
                        <div className='relative w-full mt-[12rem] lg:mt-[4rem]'>
                          <PillTitle>
                            <div className="flex flex-row h-[55px]">
                              <div className='flex bg-transparent bg-no-repeat bg-center bg-title_pill_left w-[128px]  bg-[length:auto_55px] '></div>
                              <div className='flex flex-1 bg-transparent bg-repeat-x bg-center bg-title_pill_center w-[180px] lg:w-[300px] bg-contain '>
                                <div className="relative w-full">
                                  <div className='absolute inset-0'>
                                    <div className="flex h-full items-center justify-center text-[#FFF] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bahnschrift text-center  font-bold text-xs lg:text-xl">
                                      Available on Mobile
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='flex bg-transparent bg-no-repeat bg-center bg-title_pill_right w-[130px]  bg-[length:auto_55px] '></div>
                            </div>
                          </PillTitle>
                          <div className='mt-[5rem]'>
                            <Cards cardsCategory={cardsMobile} mobile={true} />
                          </div>
                        </div>
                        :
                        null
                      :
                      <div className="relative w-full mt-[2rem]"> <AboutUs /> </div>
                  }

                </div>
                <div className='flex bg-transparent bg-repeat-y bg-center bg-g3 bg-[length:35px_1px] lg:bg-[length:87px_1px] w-[35px] lg:w-[87px]'></div>
              </div>

              <div className="flex flex-row h-[90px] lg:h-[213px] ">
                <div className='flex bg-transparent bg-no-repeat bg-center bg-h1 bg-[length:35px_90px] lg:bg-[length:85px_213px] w-[35px] lg:w-[85px]'></div>
                <div className='flex flex-1 bg-transparent bg-repeat bg-top bg-h2 bg-contain '></div>
                <div className='flex bg-transparent bg-no-repeat bg-center bg-h3 bg-[length:35px_90px] lg:bg-[length:85px_213px] w-[35px] lg:w-[85px]'></div>
              </div>

              <div className="flex flex-row h-auto ">
                <div className='flex bg-transparent bg-repeat-y bg-center bg-h12 bg-[length:35px_1px] lg:bg-[length:85px_1px] w-[35px] lg:w-[85px]'></div>
                <div className='flex flex-1 bg-transparent bg-repeat bg-top bg-h2 bg-contain'>
                  <div className="relative w-full ">
                    <div className="mx-auto p-3">
                      <WrapperAbout except={true}>
                        <div className="grid grid-cols-1 lg:grid-cols-2  items-start justify-center align-middle  gap-4 mx-auto ">
                          <div className='bg-so-white p-4 rounded-xl h-full'>
                            <div className="lg:h-[165px]">
                              <h3 className='text-lg font-bold uppercase text-black bahnschrift'>Services We Provide: </h3>
                              <p className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                Graphic Design | Illustration & Painting | 2D Game Art | 3D Game Art | Pixel Art | Character & Creatures | Environment & Backgrounds | Vehicle & Industrials | Logo & Branding | Comic & Sequentials | Fashion & Products | UI & Icons | Cartoon & Vector | Anime & Manga | Video Animations
                              </p>
                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto w-full  mt-5 mb-10'>
                              <div className='py-2'>
                                <h2 className="text-md font-bold uppercase text-black bahnschrift">Project Manager</h2>
                                <ul className="max-w-md   list-disc list-inside ">
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      1 Project Manager
                                    </span>
                                  </li>
                                </ul>
                              </div>




                              <div className='py-2'>
                                <h2 className="mb-2 text-md font-bold uppercase text-black bahnschrift">2D Art Team</h2>
                                <ul className="max-w-md space-y-1  list-disc list-inside ">
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      2 Lead Artists
                                    </span>
                                  </li>
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      6 Artists
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div className='py-2'>
                                <h2 className="mb-2 text-md font-bold uppercase text-black bahnschrift">3D Art Team</h2>
                                <ul className="max-w-md space-y-1  list-disc list-inside ">
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      1 Lead Artist
                                    </span>
                                  </li>
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      2 Artists
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div className='py-2'>
                                <h2 className="mb-2 text-md font-bold uppercase text-black bahnschrift">Graphic Designer</h2>
                                <ul className="max-w-md space-y-1  list-disc list-inside ">
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      1 Lead Graphic Designer
                                    </span>
                                  </li>
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      1 Graphic Designer
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div className='py-2'>
                                <h2 className=" text-md font-bold uppercase text-black bahnschrift">General Administrator</h2>
                                <ul className="max-w-md   list-disc list-inside ">
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      1 General Administrator
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-2 w-full lg:w-3/4 mt-5'>
                              <a href="https://www.facebook.com/oraystudios/"><p className='text-[#1076BB] font-bold bahnschrift text-sm'><span className='inline-flex justify-middle items-center content-center gap-4'><FaFacebookF className='text-[#393635]' /> Oray Studios</span></p></a>
                              <a href="https://x.com/oraystudios"><p className='text-[#1076BB] font-bold bahnschrift text-sm'><span className='inline-flex justify-middle items-center content-center gap-4'><FaXTwitter className='text-[#393635]' /> @oraystudios</span></p></a>
                              <a href="https://www.instagram.com/oraystudios"><p className='text-[#1076BB] font-bold bahnschrift text-sm'><span className='inline-flex justify-middle items-center content-center gap-4'><FaInstagram className='text-[#393635]' /> @oraystudios</span></p></a>
                              <a href="mailto:info@oraystudios.com"><p className='text-[#1076BB] font-bold bahnschrift text-sm'><span className='inline-flex justify-middle items-center content-center gap-4'><FaEnvelope className='text-[#393635]' /> info@oraystudios.com</span></p></a>
                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-2 justify-between items-end mt-5'>
                              <div>
                                <img src={orayland} alt="Oray Landscape" />
                                <a href="https://www.oraystudios.com"><p className='text-[#1076BB] font-bold bahnschrift'>www.oraystudios.com</p></a>
                              </div>

                              <div className='flex lg:justify-end w-full'>
                                <img src={qroray} />
                              </div>
                            </div>
                          </div>

                          <div className='bg-so-white p-4 rounded-xl h-full'>
                            <div className="lg:h-[165px]">
                              <h3 className='text-lg font-bold uppercase text-black bahnschrift'>Services We Provide: </h3>
                              <p className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                Desktop, Mobile, and Web Game Development | Desktop, Mobile, and Web App Development | AR & VR App Development | Hardware Development
                              </p>
                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto w-full mt-5 mb-10'>
                              <div className='py-2'>
                                <h2 className="text-md font-bold uppercase text-black bahnschrift">Project Manager</h2>
                                <ul className="max-w-md   list-disc list-inside ">
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      1 Project Manager
                                    </span>
                                  </li>
                                </ul>
                              </div>




                              <div className='py-2'>
                                <h2 className="mb-2 text-md font-bold uppercase text-black bahnschrift">Front-end Programmer</h2>
                                <ul className="max-w-md space-y-1  list-disc list-inside ">
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      1 Lead Programmer
                                    </span>
                                  </li>
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      2 Programmers
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div className='py-2'>
                                <h2 className="mb-2 text-md font-bold uppercase text-black bahnschrift">Back-end & Web Programmer</h2>
                                <ul className="max-w-md space-y-1  list-disc list-inside ">
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      1 Lead Programmer
                                    </span>
                                  </li>
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      1 Programmer
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div className='py-2'>
                                <h2 className="mb-2 text-md font-bold uppercase text-black bahnschrift">Account Executives</h2>
                                <ul className="max-w-md space-y-1  list-disc list-inside ">
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      2 Account Executives
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div className='py-2'>
                                <h2 className=" text-md font-bold uppercase text-black bahnschrift">General Administrator</h2>
                                <ul className="max-w-md   list-disc list-inside ">
                                  <li>
                                    <span className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                                      1 General Administrator
                                    </span>
                                  </li>
                                </ul>
                              </div>

                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-2 w-full lg:w-3/4 mt-5'>
                              <a href="https://www.facebook.com/plexustech/"><p className='text-[#1076BB] font-bold bahnschrift text-sm'><span className='inline-flex justify-middle items-center content-center gap-4'><FaFacebookF className='text-[#393635]' /> Plexus  Studio</span></p></a>
                              <a href="https://x.com/plexusstudio"><p className='text-[#1076BB] font-bold bahnschrift text-sm'><span className='inline-flex justify-middle items-center content-center gap-4'><FaXTwitter className='text-[#393635]' /> @plexusstudio</span></p></a>
                              <a href="https://www.instagram.com/plexusstudio"><p className='text-[#1076BB] font-bold bahnschrift text-sm'><span className='inline-flex justify-middle items-center content-center gap-4'><FaInstagram className='text-[#393635]' /> @plexusstudio</span></p></a>
                              <a href="mailto:hello@plexus.id"><p className='text-[#1076BB] font-bold bahnschrift text-sm'><span className='inline-flex justify-middle items-center content-center gap-4'><FaEnvelope className='text-[#393635]' /> hello@plexus.id</span></p></a>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-end mt-5 w-full">
                              <div>
                                <img src={plexusland} alt="Plexus Landscape" />
                                <a href="https://www.plexus.id">
                                  <p className="text-[#1076BB] font-bold">www.plexus.id</p>
                                </a>
                              </div>

                              <div className='flex lg:justify-end w-full'>
                                <img src={qrplexus} alt="QR Plexus" />
                              </div>
                            </div>

                          </div>

                        </div>
                      </WrapperAbout>

                    </div>
                  </div>
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
            </div>
          </>
          :
          null
      }


    </>

  )
}

export default App
