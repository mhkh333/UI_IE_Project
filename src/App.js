import React from 'react';
import Login from './component/login';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './component/home';
import HomeListTerms from "./component/Ostad/Home_ListTerms";
import ShowCoursesInTerm from "./component/Ostad/ShowCoursesInTerm";
import ShowStudentsInCourse from "./component/Ostad/ShowStudentsInCourse";
import MakeFaculty from "./component/ModirIT/MakeFaculty";
function App() {
  return (
    <div className='APP'>
      <BrowserRouter>
        <Routes>
          <Route path=""  element={<Login/>}/>
          <Route path="/ostadHome"  element={<HomeListTerms/>}/>
          <Route path="/ostadShowCoursesInTerm"  element={<ShowCoursesInTerm/>}/>
          <Route path="/showStudentInCourse"  element={<ShowStudentsInCourse/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home"  element={<Home/>}/>
          <Route path="/modirItFaculty"  element={<MakeFaculty/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
