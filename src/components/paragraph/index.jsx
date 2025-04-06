import { memo } from "react"

const Paragraph = ({children, className}) => {
    return <p className={`text-darkBlue text-base ${className}`}>{children}</p>
}

export default memo(Paragraph)