import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import {withCookies, CookiesProvider, useCookies} from "react-cookie";
import {createContext} from 'react';
import Cookies from 'js-cookie';


const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const cookies = useCookies();

    // var emaill = Cookies.get('email');
    // var passwordd = Cookies.get('password');


    useEffect(() => {
        if (Cookies.get("email") && Cookies.get("password")) {
            setEmail(Cookies.get("email"));
            setPassword(Cookies.get("password"));
        }
        // if (emaill && passwordd) {
        //     setEmail(emaill);
        //     setPassword(passwordd);
        // }
    }, []);


    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            Cookies.set("email", email, {expires: 7});
            Cookies.set("password", password, {expires: 7});
            const request = new XMLHttpRequest();
            request.open("POST", "http://localhost:8000/login");
            request.setRequestHeader("Content-Type", "application/json");
            request.send(JSON.stringify({
                email: email,
                password: password
            }));

            request.onload = () => {
                if (request.status === 200) {
                    const responses = request.response;
                    console.log(responses)
                    console.log("thats gooooooooooood")
                    const responsesJson = JSON.parse(responses);
                    console.log(responsesJson)
                    if (responsesJson.role === 3) {
                        navigate("/ostadHome", {
                            state: {
                                ostadName: responsesJson.name,
                                role: responsesJson.role,
                                jwt: responsesJson.jwttoken
                            }
                        })
                    } else if (responsesJson.role === 0) {
                        navigate("/modirItFaculty", { //modirItFaculty // modirItOstad //modirItModir //modirItStudent
                            state: {
                                name: responsesJson.name,
                                role: responsesJson.role,
                                jwt: responsesJson.jwttoken
                            }
                        })
                    } else if (responsesJson.role === 1) {
                        navigate("/ListOfStudentsModir", { //modirItFaculty // modirItOstad //modirItModir //modirItStudent
                            state: {
                                name: responsesJson.name,
                                role: responsesJson.role,
                                jwt: responsesJson.jwttoken
                            }
                        })
                    } else if (responsesJson.role === 2) {
                        navigate("/ListOfStudentTerms", { //modirItFaculty // modirItOstad //modirItModir //modirItStudent
                            state: {
                                name: responsesJson.name,
                                role: responsesJson.role,
                                jwt: responsesJson.jwttoken
                            }
                        })
                    }

                } else {
                    console.log(":(")
                }
            };


        } catch (e) {
            console.log(e)
        }
    };


    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} action="POST">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input className="form-control" id="email" value={email} onChange={handleEmailChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password}
                           onChange={handlePasswordChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Login;
