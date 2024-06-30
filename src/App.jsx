import About from "./Components/About";
import Digital from "./Components/Digital";
import HappyClients from "./Components/HappyClients";
import HeroSection from "./Components/Herosection";
import MainNavbar from "./Components/MainNavbar";
import Navbar from "./Components/Navabar";
import ServicesComponent from "./Components/ServicesComponent";
import Video from "./Components/Video";
import WhyChoose from "./Components/WhyChoose";
import Testimonials from "./Components/Testimonial.jsx";
import FAQ from "./Components/FAQ.jsx";
import Footer from "./Components/Footer.jsx";
export default function App() {
  return (
    <>
     <Navbar />
     <MainNavbar/>
     <HeroSection/>
     <ServicesComponent />
     <About />
     <WhyChoose />
     <Video />
     <HappyClients/>
     <Digital />
     <Testimonials />
     <FAQ />
     <Footer />
    </>
  )
}