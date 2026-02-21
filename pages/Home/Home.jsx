import Header from "../../components/Header/Header"
import Projects from "../../components/Projects/Projects"
import TechStack from "../../components/TechStack/TechStack"
import Testimonials from "../../components/Testimonials/Testimonials"
import WhyChoose from "../../components/WhyChoose/WhyChoose"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Header/>
      <WhyChoose/>
      <TechStack/>
      <Projects/>
      <Testimonials/>
    </div>
  )
}

export default Home
