import Image from "next/image"
import Link from "next/link"
import { memo } from "react"

const TourCard = ({data}) => {

    return (
        <Link href={`/tour/${data?.id}`} className="relative block group"  >
            <div className="w-full h-[250px]">
                <Image className="object-cover object-center w-full h-full rounded-xl" src={data?.image}  alt={data?.title} />
            </div>
            <div className={`group-hover:text-white text-gray-500 absolute top-full left-[50%] translate-y-[-50%]  translate-x-[-50%] p-3 bg-white group-hover:bg-lightBlue rounded-xl w-[90%] mx-auto z-[2] transition-all duration-500 shadow-md`}>
                <p href={"/"} className="text-lg transition-all duration-500 group-hover:text-white text-darkBlue">{data?.title}</p>
                <p className={`overflow-hidden  lg:text-white transition-all duration-500 line-clamp-3 lg:group-hover:max-h-[400px] lg:max-h-0`}>{data?.description}</p>
                {/* <div className="flex items-center justify-between">
                    <span className="">{data?.duration}</span>
                    <span className="font-semibold text-primary group-hover:text-white">{data?.price}</span>
                </div> */}
            </div>
        </Link>
    )
}

export default memo(TourCard)