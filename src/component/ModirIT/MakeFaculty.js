import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation, useNavigate} from 'react-router-dom';
import alert from "bootstrap/js/src/alert";


function MakeFaculty(props) {
    let ss;
    const location = useLocation();

    const [name, setName] = useState("");
    const [fieldss, setFieldss] = useState([]);

    const handleFaculty = async (event) => {
        // setFieldss(ss);
        event.preventDefault();

        try {
            console.log(location.state)
            // let new_f = fieldss.splite(',');
            console.log("haaaaaaaaaaaaaaaaaaaaaaaaaa" + fieldss.split(','));
            let data = {name: name, fields: fieldss.split(',')}
            console.log(data)
            let response = await fetch('http://localhost:8000/faculty', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {'test': location.state.jwt, "Content-Type": "application/json"}

            });
            ///////////////////////////////////////////////////////////////////////////////////////////agha

//             const request = new XMLHttpRequest();
//             request.open("POST", "http://localhost:8000/faculty");
//             request.setRequestHeader("test", location.state.jwt);
//             request.setRequestHeader("Content-Type", "application/json");
//             //
//             request.send(JSON.stringify({
//                 name: name,
//                 fields: fieldss
//             }));
//
//             request.onload = () => {
//                 if (request.status === 200) {
//                     const responses = request.response;
//                     console.log(responses)
//                     console.log("thats gooooooooooood")
//                     const responsesJson = JSON.parse(responses);
//                     console.log(responsesJson)
//
//                 } else {
//                     console.log(":(")
//                 }
//             };
//
//     }catch (err){
//             console.log('har zaman khar shodi bedun ke khieli khari' + err)
//         }
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////faridak


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

        const handleFieldChange = event => {
            setFieldss(event.target.value);
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xl-9">
                        <h1>Login</h1>
                        <form onSubmit={handleFaculty}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">نام</label>
                                <input className="form-control" id="email" value={name} onChange={handleNameChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">رشته ها</label>
                                <input className="form-control" id="password" value={fieldss}
                                       onChange={handleFieldChange}/>
                            </div>
                            <button type="submit" className="btn btn-primary">ایجاد/تغییرات</button>
                        </form>
                    </div>
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
        );
    }

    export default MakeFaculty;
