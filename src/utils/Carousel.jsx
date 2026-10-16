import React, { useEffect, useState } from 'react';

const Carousel = (props) => {
    const { data, activeSlides } = props;
    const [activeSlide, setActiveSlide] = useState(activeSlides);

    const next = () => activeSlide < data.length - 1 && setActiveSlide(activeSlide + 1);
    const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1);

    const getStyles = (index) => {
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
        const isTwokey = window.innerWidth > 1920;
        let translateX, translateZ1, translateZ2, translateY1, translateY2, translateXFar;

        if (isMobile) {
            translateX = 300;
            translateZ1 = -400;
            translateZ2 = -550;
            translateY1 = 0;
            translateY2 = 0;
            translateXFar = 500;
        } else if (isTablet) {
            translateX = 400;
            translateZ1 = -800;
            translateZ2 = -900;
            translateY1 = 100;
            translateY2 = 120;
            translateXFar = 700;
        } else if (isTwokey) {
            translateX = 1000;
            translateZ1 = -900;
            translateZ2 = -700;
            translateY1 = 100;
            translateY2 = 120;
            translateXFar = 1100;
        }
        else {
            translateX = 720;
            translateZ1 = -500;
            translateZ2 = -700;
            translateY1 = 0;
            translateY2 = 0;
            translateXFar = 1100;
        }

        if (activeSlide === index)
            return {
                opacity: 1,
                transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                zIndex: 10
            };
        else if (activeSlide - 1 === index)
            return {
                opacity: 1,
                transform: `translateX(-${translateX}px) translateY(-${translateY1}px) translateZ(${translateZ1}px) rotateY(35deg)`,
                zIndex: 9
            };
        else if (activeSlide + 1 === index)
            return {
                opacity: 1,
                transform: `translateX(${translateX}px) translateY(-${translateY2}px) translateZ(${translateZ1}px) rotateY(-35deg)`,
                zIndex: 9
            };
        else if (activeSlide - 2 === index)
            return {
                opacity: 1,
                transform: `translateX(-${translateX + 160}px) translateY(-${translateY2}px) translateZ(${translateZ2}px) rotateY(35deg)`,
                zIndex: 8
            };
        else if (activeSlide + 2 === index)
            return {
                opacity: 1,
                transform: `translateX(${translateX + 160}px) translateY(-${translateY2}px) translateZ(${translateZ2}px) rotateY(-35deg)`,
                zIndex: 8
            };
        else if (index < activeSlide - 2)
            return {
                opacity: 0,
                transform: `translateX(-${translateXFar}px) translateZ(${translateZ2}px) rotateY(35deg)`,
                zIndex: 7
            };
        else if (index > activeSlide + 2)
            return {
                opacity: 0,
                transform: `translateX(${translateXFar}px) translateZ(${translateZ2}px) rotateY(-35deg)`,
                zIndex: 7
            };
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((activeSlides) => (activeSlides + 1) % data.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="carousel-container overflow-hidden w-auto flex flex-col items-center content-center justify-center">
            <div className="slideC h-[110px] lg:h-[520px] perspective-300 lg:perspective-1500  w-[300px] md:w-[750px] lg:w-[950px] xl:w-[1100px]">
                {data.map((item, i) => (
                    <React.Fragment key={item.id}>
                        <div
                            className="slide top-[30%] lg:top-[15%] lg:w-auto"
                            style={getStyles(i)}
                        >
                            <div className="sliderContent">
                                <img
                                    src={activeSlide === i ? item.imgShow : item.img}
                                    className={`carousel-img   mx-auto text-center ${activeSlide === i ? 'active' : 'inactive'}`}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            className=""
                            style={getStyles(i)}
                        />
                    </React.Fragment>
                ))}
            </div>
            <div className='flex items-center content-center align-bottom justify-center gap-4 z-20 mt-10'>
                <div
                    className='bg-nextBtn scale-x-[-1] bg-contain w-[24px] h-[24px] lg:h-[60px] lg:w-[60px] cursor-pointer bg-no-repeat'
                    onClick={prev}
                />
                <div>
                    {data.map((item, i) => (
                        <span
                            key={i}
                            className={`dot ${activeSlide === i ? 'active' : ''}`}
                        />
                    ))}
                </div>
                <div
                    className='bg-nextBtn bg-contain w-[24px] h-[24px] lg:h-[60px] lg:w-[60px] cursor-pointer bg-no-repeat'
                    onClick={next}
                />
            </div>


        </div>
    );
}

export default Carousel;
