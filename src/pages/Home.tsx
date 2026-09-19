import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProductShowcase from "../components/ProductShowcase"
import WhyChooseUs from "../components/WhyChooseUs"
import AboutSection from "../components/AboutSection"
import ContactCTA from "../components/ContactCTA"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <main>

        <Hero />

        <ProductShowcase />

        <WhyChooseUs />

        <AboutSection />

        <ContactCTA />

      </main>

      <Footer />

    </div>
  )
}

export default Home