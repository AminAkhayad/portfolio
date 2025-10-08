
import './App.css'
import '../../styles/general.css'
import '../../styles/reset.css'
import { Link, Outlet  } from "react-router-dom";
import Header from '../../design/Header/Header.jsx';

function App() {

  return (
    <>
      <Header />
            <Outlet />

    </>
  )
}

export default App
