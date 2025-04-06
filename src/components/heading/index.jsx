import { memo } from "react"

const Heading = ({className, children}) => {
    return <h2 className={`text-darkBlue font-bold text-[30px] sm:text-[35px] md:text-[42px] lg:text-[48px] ${className}`}>{children}</h2>
}

export default memo(Heading)