import Navigation from "../src/components/Navigation"
import Hero from "../components/Hero"
import Info from "../components/Info"
import Packages from "../components/Packages"
import Showcase from "../components/Showcase"
import Gallery from "../components/Gallery"
import Testimony from "../components/Testimony"
import Backontop from "../components/Backontop"
import Footer from "../components/Footer"
import About from "./about"
import Contact from "./contact"
import Community from "./community"

function Home() {
  return (

    <>
      <Navigation />
      <Hero />
      <Info />
      <Gallery/>
      <About />
      <Showcase/>
      <Community />
      <Packages/>
      <Testimony/>
      <Contact />
      <Backontop />
      <Footer/>
    
    </>

  )
}

export default Home
