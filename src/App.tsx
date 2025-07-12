import './App.css'
import {Menu} from "./Components/Menu.tsx";
import {Outlet} from "react-router-dom";

function App() {


  return (
    <>
  <Menu/>
      <Outlet/>
    </>
  )
}

export default App
