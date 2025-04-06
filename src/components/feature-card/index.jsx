import Image from "next/image"
import { memo, useState } from "react"

const FeatureCard = ({data}) => {
    const [hover, setHover] = useState(false)
    return (
        <div onMouseOver={() => {setHover(true)}} onMouseOut={() => {setHover(false)}} className=" hover:bg-lightBlue group transition-all duration-500 w-full px-6 py-8 bg-white shadow-md rounded-md flex flex-col items-center gap-4 text-center">
            <Image width={40} height={40} src={hover ? data?.whiteImage : data?.image} alt={data?.title} />
            <p className="text-primary group-hover:text-white transition-all duration-500 group-hover:hover:text-primary  text-lg font-medium">{data?.title}</p>
            <p className="text-darkBlue text-base group-hover:text-white transition-all duration-500">{data?.description}</p>
        </div>
    )
}

export default memo(FeatureCard)