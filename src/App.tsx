import './App.css'
import {B} from "./components/B.tsx";
import {A} from "./components/A.tsx";
import {MyContext} from "./context/MyContextProvider.tsx";
import {useState} from "react";

function App() {
const [themeColor, setThemeColor] = useState('light');
  return (
    <div>
      <MyContext.Provider value={{
        theme: themeColor,
        changeTheme: (themeV: string) => {
          setThemeColor(themeV);
        }
      }}>

      <A/>
      <B/>

      </MyContext.Provider>




    </div>
  )
}

export default App
