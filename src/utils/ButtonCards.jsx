import React from 'react'
const renderButton = (label, index, handleModals) => (
    <div className="relative">
        <div
            className="flex flex-row h-[45px] lg:h-[50px] cursor-pointer"
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
                {label}
            </p>
        </div>
    </div>
);
const ButtonCards = ({ data, index, handleModals }) => {
    if (data.yt || data.video) {
        return null;
    } else if (data.portofolio) {
        return renderButton("VIEW", index, handleModals);
    } else if (data.launch) {
        return renderButton("LAUNCH", index, handleModals);
    } else {
        return renderButton("VIDEOS", index, handleModals);
    }
}


export default ButtonCards