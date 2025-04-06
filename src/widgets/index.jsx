import Banner from "@/components/banner"
import AboutSection from "@/contents/about-section"
import ClientsSection from "@/contents/clients-section"
import Features from "@/contents/features"
import HeroSlider from "@/contents/hero-slider"
import NewsSection from "@/contents/news-section"
import RecentTours from "@/contents/recent-tours"
import ToursSection from "@/contents/tours"
import { features, heroSliders, news, toursData, toursReal } from "@/utils/consts"

const HomeInner = () => {

    return (
        <>
        <HeroSlider data={heroSliders} />
        <Features data={features} />
        <ToursSection data={toursReal} />
        <AboutSection />
        <ClientsSection />
        <Banner src={"/img/banner.jpg"}  />
        {/* <RecentTours data={toursData} /> */}
        <NewsSection data={news} />
        </>
    )
}

export default HomeInner