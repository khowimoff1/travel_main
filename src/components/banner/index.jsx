import Image from "next/image"
import { memo } from "react"

const Banner = ({className, src}) => {
    return (
        <div className={`w-full h-[300px] smd:h-[400px] lg:h-[450px] ${className}`}>
            <Image src={src} width={1500} height={1400} alt="Banner" className="w-full h-full object-cover object-center" />
        </div>
    )
}

export default memo(Banner)