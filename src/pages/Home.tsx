import NavBar from "../components/navBar"
import Tap from "../components/tap"
import Hero from "../components/Home/hero"
import OurServices from "../components/Home/ourServices"
import Feedback from "../components/Home/feedback"
import Footer from "../components/footer"

function App() {

  return (
    <>
      <div className=''> 
        <NavBar selected="الرئيسية"/>
        <div className="flex flex-col gap-[100px] w-full">
        <div className="w-full relative">
            <Tap title="الرئيسية"/>
            <Hero/>
        </div>
        <OurServices/>
        <Feedback/>

        </div>

        <Footer/>
      </div>
    </>
  )
}

export default App
