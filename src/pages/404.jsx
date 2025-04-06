import Heading from "@/components/heading"
import Section from "@/components/section"
import Layout from "@/layout"

const NotFoundPage = () => {
    return (
        <Layout>
            <Section>
                <Section>
                    <Heading className={"capitalize text-center"} >
                        404 Page not found
                    </Heading>
                </Section>
            </Section>
        </Layout>
    )
}

export default NotFoundPage