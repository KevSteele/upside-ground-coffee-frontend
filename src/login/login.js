import React, {useState} from "react";
import {Link} from "react-router-dom";
import useForm from '../signup/useForm';
import '../app/App.css';
import './login.css';
import png from "../media/image0.png"
import { useAppContext } from "../libraries/appContext";
import AuthenticatedRoute from "../libraries/authRoute"


function Login() {

    const { isAuthenticated, userHasAuthenticated, setMessage } = useAppContext();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const { values, handleChange, handleKeyDown, sessionLogin, error } = useForm({
        initialValues: {
            email: '',
            password: '',
        }
    });




    return (
        <div className="user">
            <header className="user__header">
                <h1 className="user__title">Please Sign In</h1>
            </header>
            
            <form className="form" onSubmit={sessionLogin}>

                <div className="form__group">
                    <input type="email" placeholder="Email" className="form__input" required onChange={handleChange} handleKeyDown={handleKeyDown}/>
                </div>
                
                <div className="form__group">
                    <input type="password" placeholder="Password" className="form__input" required onChange={handleChange} handleKeyDown={handleKeyDown}/>
                </div>
                <button >Log In</button>
                
            </form>
            <p>
                <Link to = '/'><img src= {png} alt ="logo" className ="logo"  /> </Link> 
            </p>   
        </div>
    );
}

export default Login;