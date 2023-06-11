import { useEffect, useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  const [ currPage, setCurrPage ] = useState("home")
  const [ prefix, setPrefix ] = useState("")
  
  useEffect(() => {
    if( process.env.NODE_ENV === "production" ){
      setPrefix("/react-portfolio")
    }
  }, [process.env.NODE_ENV])

  useEffect(() => {
    const path = window.location.href.split(window.location.host)[1]
    console.log(path)
    setCurrPage(path)
  }, [window.location.href])

  return (
    <div className="App">
      <Header prefix={prefix} />

      { currPage === `${prefix}/` && <About /> }
      { currPage === `${prefix}/about` && <About /> }
      { currPage === `${prefix}/portfolio` && <Portfolio /> }
      { currPage === `${prefix}/contact` && <Contact /> }
      { currPage === `${prefix}/resume` && <Resume /> }

      <Footer prefix={prefix} />
    </div>
  );
}


export default App;
