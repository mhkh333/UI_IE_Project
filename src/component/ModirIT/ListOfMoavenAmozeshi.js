import React, { useEffect, useState } from 'react';
import './ListOfStudents.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'
import { useLocation, useNavigate } from 'react-router-dom'

function ListOfMoavenAmozeshi() {
    const location = useLocation()

    const navigate = useNavigate();

    let [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch('http://localhost:8000/admin/managers', {
                    method: 'GET',
                    headers: { 'test': location.state.jwt }
                });
                let result = await response.json();
                let array = (Object.keys(result).map(key => result[key]));
                console.log(array);
                console.log(typeof array);
                setData(array);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, [location.state.jwt]);

    useEffect(() => {
        console.log(data);
    }, [data]); // Trigger the effect whenever 'data' changes

    const handleAddStudent = async () => {
        navigate("/modirItModir", {
            state: {
                name: location.state.name,
                role: location.state.role,
                jwt: location.state.jwt
            }
        })
    }


    const handleClick = async (event, students) => {
        try {
            let response = await fetch('http://localhost:8000/admin/manager/' + students._id, {
                method: 'DELETE',
                headers: { 'test': location.state.jwt, "Content-Type": "application/json" }
            });
            let result = await response.json();

            console.log(response.status)
            if (response.status === 200) {
                console.log(result);
                window.alert('this ostad deleted)');
            }
            console.log("result" + result)



            const fetchData = async () => {
                try {
                    let response = await fetch('http://localhost:8000/admin/managers', {
                        method: 'GET',
                        headers: { 'test': location.state.jwt }
                    });
                    let result = await response.json();
                    let array = (Object.keys(result).map(key => result[key]));
                    console.log(array);
                    console.log(typeof array);
                    setData(array);
                } catch (error) {
                    console.log('Error fetching data:', error);
                }
            };

            fetchData();





        } catch (error) {
            console.log('Error fetching data:', error);
        }
        // Perform any other actions you need here
    };


    const handleClick1 = async () => {
        navigate("/ListOfStudents", {
            state: {
                name: location.state.name,
                role: location.state.role,
                jwt: location.state.jwt
            }
        })
    }

    const handleClick2 = async () => {
        navigate("/ListOfOstads", {
            state: {
                name: location.state.name,
                role: location.state.role,
                jwt: location.state.jwt
            }
        })
    }
    const handleClick3 = async () => {
        navigate("/ListOfMoavenAmozeshi", {
            state: {
                name: location.state.name,
                role: location.state.role,
                jwt: location.state.jwt
            }
        })
    }

    const handleClick4 = async () => {
        navigate("/modirItFaculty", {
            state: {
                name: location.state.name,
                role: location.state.role,
                jwt: location.state.jwt
            }
        })
    }

    return (
        <div className="container-fluid h-100">
            <div className="row">
                <header className="col-12 bg-primary text-white p-3">
                    <span>
                        مشاهده لیست مدیران
                    </span>
                    <span onClick={(event) => handleAddStudent()}>
                        افزودن مدیر
                    </span>
                </header>
            </div>
            <div className="row h-100">
                <div className="col-xl-9">
                    <div className="row">
                        {data.map((students, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                                <div className="box bg-secondary p-3">
                                    <span>
                                        {students.firstName}
                                    </span>
                                    <span onClick={(event) => handleClick(event, students)}>
                                        حذف
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-lg">مشاهده بیشتر</button>
                    </div>
                </div>

                <aside className="col-xl-3 bg-light p-3 sidebar">
                    <span onClick={() => handleClick1()}>
                        مشاهده لیست دانشجویان
                    </span>
                    <br/>
                    <br/>
                    <span onClick={() => handleClick2()}>
                        مشاهده لیست اساتید
                    </span>
                    <br/>
                    <br/>
                    <span onClick={() => handleClick3()}>
                        مشاهده لیست معاونین
                    </span>
                    <br/>
                    <br/>

                    <span onClick={() => handleClick4()}>
                        ایجاد دانشکده
                    </span>
                    <br/>

                </aside>

            </div>
        </div>
    );
}

export default ListOfMoavenAmozeshi;
