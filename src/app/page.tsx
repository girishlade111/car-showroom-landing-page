import HeroSection from "@/components/HeroSection"
import FeaturedCars from "@/components/FeaturedCars"
import ServicesSection from "@/components/ServicesSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCars />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}