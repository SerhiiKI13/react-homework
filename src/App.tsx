import './App.css'
import {coursesAndDurationArray} from "./data/CoursesandDurationArray.ts";
import {Courses} from "./components/Courses.tsx";

function App() {
  return (
    <>
      {coursesAndDurationArray.map(
          (course,index) =>
              <Courses course={course} key={index}/> )}
    </>
  )
}

export default App
