import pillRight from '/images/content/title_right.webp'
import pillCenter from '/images/content/title_center.webp'
import pillLeft from '/images/content/title_left.webp'

const PillTitle = ({ margin, children }) => {
    return (
        <div className={margin}>
            <div className="relative inline-flex w-full justify-center items-center">
                <img src={pillLeft} className="h-[25px] w-auto mt-1" alt="" />
                <img src={pillCenter} className="h-[25px] w-3/4 mt-1" alt="" />
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-transparent ">
                    {children}
                </div>
                <img src={pillRight} className="h-[25px] w-auto mt-1" alt="" />
            </div>
        </div>
    )
}

export default PillTitle