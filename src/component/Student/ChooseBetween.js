import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import './newHomeList.css'; // Import your custom CSS file
import {useLocation, useNavigate} from 'react-router-dom'

function ChooseBetween(props) {
    const location = useLocation()

    const navigate = useNavigate();

    let [data, setData] = useState([]);
    let terms = [];
    const [loading, setLoading] = useState(true);



   const handleSabt = async () => {
           try {
               let sss = location.state.termId;
               let response = await fetch('http://localhost:8000/term/' + sss +'/registrations', {
                   method: 'GET',
                   headers: {'test': location.state.jwt}
               });
               let result1 = await response.json();
               let result = result1.termiCourses;
               console.log(result)
               let array = (Object.keys(result).map(key => result[key]));

               terms = result
               setData(array);


           } catch (error) {
               console.log('Error fetching data:', error);
           }

    };

   const handlePre = async () => {
           try {
               let sss = location.state.termId;
               let response = await fetch('http://localhost:8000/term/' + sss + '/preregistrations', {
                   method: 'GET',
                   headers: {'test': location.state.jwt}
               });
               let result1 = await response.json();
               let result = result1;

               let array = (Object.keys(result).map(key => result[key]));

               terms = result
               setData(array);


           } catch (error) {
               console.log('Error fetching data:', error);
           }

    };

    return (
        <div className="container-fluid h-100">
            <div className="row">
                <header className="col-12 bg-primary text-white p-3">لیست ترم ها برای  {location.state.name}</header>
            </div>
            <div className="row h-100">
                <div className="col-xl-9">
                    <div className="row">
                        {[...data].map((term, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                                <div className="box bg-secondary p-3"
                                     >name: {term}</div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-lg" onClick={() => handleSabt()}>مشاهده لیست دروس ثبت نامی</button>
                        <button className="btn btn-primary btn-lg" onClick={() => handlePre()}>مشاهده لیست دروس پیش ثبت نامی</button>
                    </div>
                </div>

                <aside className="col-xl-3 bg-light p-3 sidebar">مشاهده لیست ترم ها</aside>

            </div>
        </div>
    );
}



export default ChooseBetween;
