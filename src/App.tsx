import Home from "./pages/Home"
import Preloader from "./components/Preloader"
import ScrollProgressBar from "./components/ScrollProgressBar"
import BackToTop from "./components/BackToTop"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {
  return (
    <>
      <Preloader />
      <ScrollProgressBar />
      <Home />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}

export default App
