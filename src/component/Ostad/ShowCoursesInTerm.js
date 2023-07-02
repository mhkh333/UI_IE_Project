import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './newHomeList.css'; // Import your custom CSS file
import {useLocation, useNavigate} from 'react-router-dom'

function ShowCoursesInTerm(props) {
    const location = useLocation()

    const navigate = useNavigate();

    let [data, setData] = useState([]);
    let terms = [];
    const [loading, setLoading] = useState(true);

    let addres = location.state.termId;
    let termName = location.state.termName;

    //location.state

    useEffect(() => {
        const fetchData = async () => {
            try {

                let response = await fetch('http://localhost:8000/term/courses/' + addres, {
                    method: 'GET',
                    headers: {'test': location.state.jwt}
                });
                let result = await response.json();
                let array = (Object.keys(result).map(key => result[key]));
                console.log(array);
                console.log(typeof array);
// Output: [1, 2, 3]
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
                role: location.state.role,
                termName: location.state.termName,
            })
        })
        // Perform any other actions you need here
    };

    const showStus = (term) => {

        navigate("/showStudentInCourse", {
            state: ({
                termId: location.state.termId,
                jwt: location.state.jwt,
                ostadName: location.state.ostadName,
                role: location.state.role,
                courseId: term._id,
                courseName: term.name,
                termName: location.state.termName,

            })
        })
        // Perform any other actions you need here
    };


    return (
        <div className="container-fluid h-100">
            <div className="row">
                <header className="col-12 bg-primary text-white p-3">دروس ترم: {termName}</header>
            </div>
            <div className="row h-100">
                <div className="col-xl-9">
                    <div className="row">
                        {[...data].map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                                <div className="box bg-secondary p-3" onClick={() => showStus(item)}> name: {item.name}</div>
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
                </aside>

            </div>
        </div>
    );
}

export default ShowCoursesInTerm;
