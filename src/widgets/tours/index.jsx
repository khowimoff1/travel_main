import Container from "@/components/container"
import Heading from "@/components/heading"
import PageHeader from "@/components/page-header"
import RecentTourCard from "@/components/recent-tour-card"
import Section from "@/components/section"
import { toursData, toursReal } from "@/utils/consts"

const breadCrumpData = [
    {
        id:1,
        name: "Tours",
        url: "/tours"
    }
]

const ToursInner = () => {
    return (
        <>
        <PageHeader title={"Tours"} breadcrumpData={breadCrumpData} image={"/img/tours-page-header.jpg"} />
        <Section>
            <Container>
                <Heading className={"text-center mb-10"} >Tours</Heading>
                <div className="grid grid-cols-1 smd:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        toursReal?.map(item => (<RecentTourCard key={item?.id} data={item} transition withDescription />))
                    }
                </div>
            </Container>
        </Section>

        </>
    )
}

export default ToursInner