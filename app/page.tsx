import { Contact } from "@/components/layouts/sections/contact";
import { FAQ } from "@/components/layouts/sections/faq";
import Features from "@/components/layouts/sections/features";
import Footer from "@/components/layouts/sections/footer";
import HeroSection from "@/components/layouts/sections/hero";
import Navbar from "@/components/layouts/sections/navbar";
import Testimonials from "@/components/layouts/sections/testimonials";


export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      <Navbar/>
      <HeroSection/>
      <Features/>
      <Testimonials/>
      <Contact />
      <FAQ />
      <Footer/>
    </div>
  )
}