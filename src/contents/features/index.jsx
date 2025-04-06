import Section from "@/components/section"
import { memo } from "react"

const { default: Container } = require("@/components/container")
const { default: FeatureCard } = require("@/components/feature-card")

const Features = ({data}) => {
    return (
        <Section >
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-5">
                    {data?.map(item => <FeatureCard key={item.id} data={item} />)}
                </div>
            </Container>
        </Section>
    )
}

export default memo(Features)