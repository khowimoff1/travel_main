const { default: Heading } = require("@/components/heading")

const PageLoading = () => {
    return (
        <Heading className={"absolute top-[50%] text-center left-[50%] translate-x-[-50%] translate-y-[-50%]"} >Loading...</Heading>
    )
}

export default PageLoading