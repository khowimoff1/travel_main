import Image from "next/image"
import Heading from "../heading"
import Breadcrump from "../breadcrump"


const PageHeader = ({title, image,  breadcrumpData }) => {
    return (
        <div className="relative py-[60px] md:py-[120px]">
            <img className="w-full h-full absolute top-0 left-0 z-[1] object-cover object-center" src={image} />
            <div className="relative mx-auto w-fit z-[2]">
                <Heading className={"!text-white text-center mb-4"} >{title}</Heading>
                <Breadcrump data={breadcrumpData} />
            </div>
            
        </div>
    )
}

export default PageHeader