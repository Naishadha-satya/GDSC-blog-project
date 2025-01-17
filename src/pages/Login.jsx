import React, { useContext } from "react";
import bg from "../images/bg.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext";

const Login = () => {
    
        const [inputs,setInputs]=useState({
            username:"",
           
            password:"",
        });
        const[err,setError] = useState(null);
    
        const navigate = useNavigate();
        const {Login } = useContext(AuthContext);
       
        const handelChange = (e) =>{
          setInputs(prev=>({...prev,[e.target.name]: e.target.value}));
        }
        const handleSubmit = async (e) =>{
            e.preventDefault();
            try{
            await Login(inputs)
            navigate("/");
               }catch(err){
                setError(err.response.data);
               }
        };
        return (
        <div className="auth">
            
            <img className="bg" src={bg} height="250" width="500"alt=""/>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="username" name="username" onChange={handelChange}/>
                <input type="password" placeholder="password" name="password" onChange={handelChange}/>
                <button onClick={handleSubmit}>Login</button>
               { err && <p>{err}</p>}
                <span>Don't you have an account ? <Link to="/register">Register</Link>
                </span>
                
            </form>
        </div>
    );
};
export default Login;