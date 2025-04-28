import AboutSection from "./components/AboutSection"
import FeaturesSection from "./components/FeaturesSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import HowWeWorkSection from "./components/HowWeWorkSection"
import JobService from "./components/JobService"
import TestimonialSection from "./components/TestimonialSection"
import WhyChooseUsSection from "./components/WhyChooseUsSection"

function App() {

  return (
    <div>
      {/* <Header/> */}
      <HeroSection/>
      {/* <FeaturesSection/> */}
      <HowWeWorkSection/>
      <AboutSection/>
      <TestimonialSection/>
      <WhyChooseUsSection/>
      <JobService/>
      <Footer/>
    </div>
  )
}

export default App
