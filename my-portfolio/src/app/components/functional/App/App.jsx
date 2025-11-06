import Footer from '../../design/Footer/Footer.jsx';
import './App.css'
import '../../styles/general.css'
import '../../styles/reset.css'
import { Link, Outlet  } from "react-router-dom";
import Header from '../../design/Header/Header.jsx';
import { useEffect } from "react"
import { useLocation } from "react-router-dom"


function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
