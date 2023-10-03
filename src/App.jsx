import { styled } from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Work from "./components/Work"
import Footer from "./components/Footer"


const Container = styled.div`
  color: white;
  background: url("./img/bg.jpeg") ;
  scroll-snap-type: y mandatory; 
  scroll-behavior: smooth;
  overflow-y: auto;
  
  //スクロールバーを消す
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Hero />
      <Who />
      <Work />
      <Contact />
      <Footer />
    </Container>
  )
}

export default App
