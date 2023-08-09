import { Navbar, Home, About, Course, Contact, Footer, Teacher } from "./components/index";

function App() {

  return (
    <div className="font-Poppins bg-solitude">
      <Navbar />
      <Home />
      <About />
      <Course />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
