import Container from "@/components/container"
import Heading from "@/components/heading"
import Paragraph from "@/components/paragraph"
import Section from "@/components/section"
import TourCard from "@/components/tour-card"
import { memo } from "react"

const ToursSection = ({data}) => {
    return (
        <Section className="bg-sectionGray">
            <Container>
                <Heading className={"text-center mb-5"} >
                    Destinations
                </Heading>
               <Paragraph className={"text-center lg:mx-auto lg:max-w-[70%] mb-6"} >
               Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.
               </Paragraph>
               <div className="grid grid-cols-1 smd:grid-cols-2 lg:grid-cols-3 gap-y-[90px] gap-x-4 pb-8">
                    {
                        data?.map(item => (<TourCard key={item.id} data={item} />))
                    }
               </div>
            </Container>
        </Section>
    )
}

export default memo(ToursSection)