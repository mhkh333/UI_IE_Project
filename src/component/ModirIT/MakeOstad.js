import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation, useNavigate} from 'react-router-dom';
import alert from "bootstrap/js/src/alert";

function MakeOstad(props) {

    const location = useLocation();

    const [name, setName] = useState("");
    const [family, setFamily] = useState("");
    const [id_number, setId_number] = useState("");
    const [melli_code, setMelli_code] = useState("");
    const [faculty, setFaculty] = useState("");
    const [field, setField] = useState("");
    const [level, setLevel] = useState("");
    const [entrance_year, setEntrance_year] = useState("");


    const handleOstad = async (event) => {
        event.preventDefault();

        let data = {
            firstName: name,
            lastNumber: family,
            idNumber: id_number,
            password: melli_code,
            faculty: faculty,
            fieldOfStudy: field,
            rank: level
        }

        try {
            console.log(location.state)
            let response = await fetch('http://localhost:8000/admin/Professor', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {'test': location.state.jwt, "Content-Type": "application/json"}
            });

            let result = await response.json();
            console.log(response.status)
            if (response.status === 200) {
                console.log(result);
                window.alert('hiel; we have added your requested faculty or as you wished updated it who knows but we :)');
            }
            console.log("result" + result)

        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    const handleNameChange = event => {
        setName(event.target.value);
    };
    const handleFamilyChange = event => {
        setFamily(event.target.value);
    };
    const handleIdChange = event => {
        setId_number(event.target.value);
    };
    const handleMelliChange = event => {
        setMelli_code(event.target.value);
    };
    const handleFacultyChange = event => {
        setFaculty(event.target.value);
    };
    const handleFieldChange = event => {
        setField(event.target.value);
    };
    const handleLevelChange = event => {
        setLevel(event.target.value);
    };
    const handleEntranceChange = event => {
        setEntrance_year(event.target.value);
    };


    return (<div>
        <div className="container">
            <h1>ثبت/تغییر اطلاعات استاد جدید</h1>
            <div className="row">
                <form className="col-xl-9" onSubmit={handleOstad}>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">نام</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" value={name}
                                   onChange={handleNameChange}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="family_name" className="form-label">نام خانوادگی</label>
                            <input type="text" className="form-control" id="family_name" placeholder="Family Name"
                                   value={family} onChange={handleFamilyChange}/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="melli_code" className="form-label">کد ملی</label>
                            <input type="number" className="form-control" id="melli_code" placeholder="MELLI_CODE"
                                   value={melli_code} onChange={handleMelliChange}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="faculty" className="form-label">دانشکده</label>
                            <input type="text" className="form-control" id="faculty" placeholder="Faculty"
                                   value={faculty} onChange={handleFacultyChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="field" className="form-label">رشته</label>
                            <input type="text" className="form-control" id="field" placeholder="Field" value={field}
                                   onChange={handleFieldChange}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="entrance_year" className="form-label">سال ورود</label>
                            <input type="text" className="form-control" id="entrance_year" placeholder="Entrance Year"
                                   value={entrance_year} onChange={handleEntranceChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="level" className="form-label">سطح</label>
                            <input type="text" className="form-control" id="level" placeholder="Level" value={level}
                                   onChange={handleLevelChange}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="id_number" className="form-label">شماره پرسنلی</label>
                            <input type="number" className="form-control" id="id_number" placeholder="ID_NUMBER"
                                   value={id_number} onChange={handleIdChange}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="col-xl-3">
                    <aside className="bg-light p-3 sidebar">
                        <span>مشاهده لیست دروس</span>
                        <br/>
                        <br/>
                        <br/>
                        <span>مشاهده لیست ترمها</span>
                        <br/>
                        <br/>
                        <br/>
                        <span> مشاهده  لیست دروس </span></aside>

                </div>
            </div>
        </div>
    </div>);
}

export default MakeOstad;
