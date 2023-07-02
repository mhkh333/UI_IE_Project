import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import './newHomeList.css'; // Import your custom CSS file
import {useLocation, useNavigate} from 'react-router-dom'

function ShowListOfTermsStudent(props) {
    const location = useLocation()

    const navigate = useNavigate();

    let [data, setData] = useState([]);
    let terms = [];
    const [loading, setLoading] = useState(true);

    //location.state

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch('http://localhost:8000/terms', {
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

    const handleClick = (term) => {
        console.log(term);


        navigate("/studentTermCourse", {
            state: ({
                termId: term._id,
                termName: term.name,
                jwt: location.state.jwt,
                ostadName: location.state.ostadName,
                role: location.state.role
            })
        })
        // Perform any other actions you need here
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
                                     onClick={() => handleClick(term)}>name: {term.name}</div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-lg">مشاهده بیشتر</button>
                    </div>
                </div>

                <aside className="col-xl-3 bg-light p-3 sidebar">مشاهده لیست ترم ها</aside>

            </div>
        </div>
    );
}

export default ShowListOfTermsStudent;
