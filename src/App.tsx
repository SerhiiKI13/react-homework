import './App.css'
import {coursesTitleArray} from "./data/CoursesTitleArray.ts";
import {CoursesTitle} from "./components/CoursesTitle.tsx";

function App() {
  return (
    <>
      {coursesTitleArray.map((course,index) => <CoursesTitle course={course} key={index}/> )}
    </>
  )
}

export default App
