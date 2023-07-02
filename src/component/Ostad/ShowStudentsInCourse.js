import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './newHomeList.css'; // Import your custom CSS file
import {useLocation, useNavigate} from 'react-router-dom'


function ShowStudentsInCourse(props) {

    const location = useLocation()
    const navigate = useNavigate();

    let [data, setData] = useState([]);
    let terms = [];
    const [loading, setLoading] = useState(true)

    let termName = location.state.termName;
    let termId = location.state.termId;
    let courseId = location.state.courseId;
    let courseName = location.state.courseName;

    console.log("termname is " + termName)
    useEffect(() => {
        const fetchData = async () => {
            try {

                let response = await fetch('http://localhost:8000/term/' + termId + '/registration/' + courseId, {
                    method: 'GET',
                    headers: {'test': location.state.jwt}
                });
                let result = await response.json();
                let array = (Object.keys(result).map(key => result[key]));
                console.log(array);
                console.log(typeof array);
                // result = await JSON.parse(result)
                terms = result
                setData(array);

            } catch (error) {
                console.log('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [location.state.jwt]);

    useEffect(() => {
        console.log(data);
    }, [data]); // Trigger the effect whenever 'data' changes

    const handleClick = () => {

        navigate("/ostadHome", {
            state: ({
                termId: location.state.termId,
                jwt: location.state.jwt,
                ostadName: location.state.ostadName,
                role: location.state.role
            })
        })
        // Perform any other actions you need here
    };

    const handleClick2 = () => {

        navigate("/ostadShowCoursesInTerm", {
            state: ({
                termId: location.state.termId,
                jwt: location.state.jwt,
                ostadName: location.state.ostadName,
                role: location.state.role,
                termName: termName,
            })
        })
        // Perform any other actions you need here
    };

    //location.state
    return (
        <div className="container-fluid h-100">
            <div className="row">
                <header className="col-12 bg-primary text-white p-3">درس: {courseName}                 <span>تعداد ثبت نامی ها: {data.length}</span>
                </header>
            </div>
            <div className="row h-100">
                <div className="col-xl-9">
                    <div className="row">
                        {[...data].map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                                <div className="box bg-secondary p-3">name: {item}</div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-lg">مشاهده بیشتر</button>
                    </div>
                </div>

                <aside className="col-xl-3 bg-light p-3 sidebar"><span>مشاهده لیست دروس </span>
                    <br/>
                    <br/>
                    <br/>
                    <span onClick={() => handleClick()}>>مشاهده لیست ترمها
                    </span>
                    <br/>
                    <br/>
                    <br/>
                    <span onClick={() => handleClick2()}>>مشاهده لیست دروس
                    </span>
                </aside>

            </div>
        </div>
    );
}

export default ShowStudentsInCourse;
