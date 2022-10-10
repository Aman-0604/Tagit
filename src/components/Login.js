import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import alertContext from '../context/alerts/alertContext';


export default function Login() {
    const alert_available = useContext(alertContext);
    const {showAlert}=alert_available;

    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({email:"",password:""});


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const submitHandler=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email : credentials.email,password : credentials.password})//will convert the object into type JSON
          });
          const json = await response.json();
        //   console.log(json);
          if(json.success){
                showAlert("success","Login Successful");
                //save the auth token and redirect
                localStorage.setItem('token',json.auth_token);
                navigate("/");
          }
          else{
                showAlert("danger","Invalid Credentials");
          }


    }
    return (
        <div className='container my-5' style={{width : "50%"}}>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" style={{color:"white"}}><h3>Email address</h3> </label>
                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" value={credentials.email}  onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={{color:"white"}} ><h3>Password</h3></label>
                    <input type="password" className="form-control" name="password" id="password"  value={credentials.password} onChange={onChange}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1" style={{color:"white"}}>Forgot Password</label>
                </div>
                <button type="submit" className="btn btn-primary" style={{backgroundColor: "#212529", color: "white",border:"none"}}>Login</button>
                <hr style={{color: 'white'}}/>
                <div className='form-text mt-3'>Not on Tagit ?</div>
                <Link to="/signup"><button type="submit" className="btn btn-primary my-3" style={{backgroundColor: "#212529", color: "white",border:"none"}}>Signup</button></Link>
            </form>
        </div>
    )
}
