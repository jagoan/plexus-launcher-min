import React from 'react'

import orayland from '/images/about/logo footer oray.webp'
import qroray from '/images/about/qr oray.webp'
import plexusland from '/images/about/logo footer plexus.webp'
import qrplexus from '/images/about/qr plexus.webp'

import PillTitle from '../../utils/PillTitle'
import { FaXTwitter, FaFacebookF, FaEnvelope, FaInstagram } from "react-icons/fa6";
import WrapperAbout from '../../utils/WrapperAbout'
const AboutUs = () => {
    return (
        <>
            <PillTitle>
                <div className="py-1 px-4 shadow-md rounded-full bg-[#C1BCB2] text-[#8E8A80] bahnschrift font-semibold text-xs lg:text-base text-center">
                    HISTORY
                </div>
            </PillTitle>
            <div className="grid grid-cols-1 w-full lg:w-[55%]  items-center justify-center align-middle mt-[2rem] gap-4 mx-auto p-3">
                <WrapperAbout except={false}>
                    <article className='tracking-tight bahnschrift leading-6 text-[#393635]'>
                        Since 2008, Iqbal Aribaskara and Gifny Richata started to contribute in arts development industry. Gradually, we have completed hundreds of projects, have been honing our skills and adding team members, and also have been expanding our business to technology development. We are ready to work with you and turn your ideas into reality. If you ever need a team ready to finish your game and work on illustration, design, or programming projects, don't hesitate to contact us at info@oraystudios.com or hello@plexus.id.
                    </article>
                </WrapperAbout>
            </div>


        </>
    )
}

export default AboutUs