import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"


function App() {
  return <Container>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/store" element={<Store />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  </Container>
}

export default App
