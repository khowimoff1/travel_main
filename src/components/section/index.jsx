import { memo } from "react"

const Section = ({className, children}) => {
    return (
        <section className={`py-[50px] md:py-[90px] ${className}`}>{children}</section>
    )
}

export default memo(Section)