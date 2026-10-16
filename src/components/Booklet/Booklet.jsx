import WrapperBooklet from '../../utils/WrapperBooklet'

const Booklet = ({ children }) => {
    return (
        <div className="grid grid-cols-1 w-full lg:w-[55%]  items-center justify-center align-middle mt-[2rem] gap-4 mx-auto">
            <WrapperBooklet except={false}>
                {children}
            </WrapperBooklet>
        </div>
    )
}

export default Booklet