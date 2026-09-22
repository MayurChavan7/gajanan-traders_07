import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import StatsStrip from "../components/StatsStrip"
import BrandsMarquee from "../components/BrandsMarquee"
import ProductShowcase from "../components/ProductShowcase"
import WhyChooseUs from "../components/WhyChooseUs"
import Gallery from "../components/Gallery"
import AboutSection from "../components/AboutSection"
import Testimonials from "../components/Testimonials"
import FAQ from "../components/FAQ"
import ContactCTA from "../components/ContactCTA"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <main>
        <Hero />
        <StatsStrip />
        <BrandsMarquee />
        <ProductShowcase />
        <WhyChooseUs />
        <Gallery />
        <AboutSection />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  )
}

export default Home
