import React from 'react';
import Login from './component/login';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './component/home';
import HomeListTerms from "./component/Ostad/Home_ListTerms";
import ShowCoursesInTerm from "./component/Ostad/ShowCoursesInTerm";
import ShowStudentsInCourse from "./component/Ostad/ShowStudentsInCourse";
import MakeFaculty from "./component/ModirIT/MakeFaculty";

import ListOfStudents from './component/ModirIT/ListOfStudents';
import ListOfOstads from './component/ModirIT/ListOfOstads';
import ListOfMoavenAmozeshi from './component/ModirIT/ListOfMoavenAmozeshi';

import MakeOstad from "./component/ModirIT/MakeOstad";
import MakeModir from "./component/ModirIT/MakeModir";
import MakeStudent from "./component/ModirIT/MakeStudent";
import ShowStudentInFaculty from "./component/ModirAmuzesh/ShowStudentInFaculty";
import ShowOstadInFaculty from "./component/ModirAmuzesh/ShowOstadInFaculty";
import ShowListOfTermsStudent from "./component/Student/ShowListOfTermsStudent";
import ChooseBetween from "./component/Student/ChooseBetween";

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
          <Route path="/ListOfStudents"  element={<ListOfStudents/>}/>
          <Route path="/ListOfOstads"  element={<ListOfOstads/>}/>
          <Route path="/ListOfStudentsModir"  element={<ShowStudentInFaculty/>}/>
          <Route path="/ListOfOstadsModir"  element={<ShowOstadInFaculty/>}/>
          <Route path="/ListOfMoavenAmozeshi"  element={<ListOfMoavenAmozeshi/>}/>  
          <Route path="/modirItOstad"  element={<MakeOstad/>}/>
          <Route path="/modirItModir"  element={<MakeModir/>}/>
          <Route path="/modirItStudent"  element={<MakeStudent/>}/>
          <Route path="/ListOfStudentTerms"  element={<ShowListOfTermsStudent/>}/>
          <Route path="/studentTermCourse"  element={<ChooseBetween/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
