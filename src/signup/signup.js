import React from "react";
import { Link } from "react-router-dom";
import png from "../media/image0.png"
import useForm from './useForm';
// import Error from './error';
// import FormInput from './FormInput';
import './signup.css'





function Signup() {

    const { values, handleChange, handleKeyDown, handleSubmit, error } = useForm({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
    });

    // let invalidFields;
    // error ? invalidFields = error.fields : invalidFields = [];

    // var [users, setUsers] = useState([]);
    // var [user, setUser] = useState({});

    // var [email, setEmail] = useState("");
    // var [password, setPassword] = useState("");
    // var [passwordConfirm, setPasswordConfirm] = useState("");
    // var [fullname, setFullname] = useState("");

    // let history = useHistory();
    // const [error, setError] = useState(null);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     let newUserData = await fetch("http://localhost:3000/user/signup", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             email,
    //             password, 
    //             passwordConfirm,
    //             fullname
    //         }),
    //     })


    //     // pull 

    //     let newUser = await newUserData.json();

    //     if(newUser.hasOwnProperty("message")){
    //         // Set and display a message
    //     }

    //     console.log(email, password, fullname);
    // }

    return (
        <div className="user">
            <div>
                <header className="user__header">
                    <h1 className="user__title">Please Sign Up</h1>
                </header>
            </div>

            {/* <div className="inlineForm__notif">
                {error && <Error error={error.messages} />}
            </div> */}

            <form className="form" onSubmit={handleSubmit}>
                <div className="form__group">
                    <input type={"Text"} placeholder={"Full Name"} name={"fullname"} className="form__input"
                        value={values.fullname} onChange={handleChange} handleKeyDown={handleKeyDown} 
                        // fail={invalidFields.includes("fullname")}
                        />
                </div>

                <div className="form__group">
                    <input type={"Text"} placeholder={"Email"} name={"email"} className="form__input"
                        value={values.email} onChange={handleChange} handleKeyDown={handleKeyDown} 
                        // fail={invalidFields.includes("email")}
                        />
                </div>

                <div className="form__group">
                    <input type={"password"} placeholder={"Password"} name={"password"} className="form__input"
                        value={values.password} onChange={handleChange} handleKeyDown={handleKeyDown} 
                        // fail={invalidFields.includes("password")}
                        />
                </div>

                <div className="form__group">
                    <input type={"password"} placeholder={"Re-type Password"} name={"passwordConfirm"} className="form__input"
                        value={values.passwordConfirm} onChange={handleChange} handleKeyDown={handleKeyDown} 
                        // fail={invalidFields.includes("passwordConfirm")} 
                        />
                </div>

                {/* <div class="form__group">
                    <input type="email" placeholder="Email" class="form__input"
                        onChange={e => setEmail(e.target.value)} />
                </div>

                <div class="form__group">
                    <input type="password" placeholder="Password" class="form__input"
                        onChange={e => setPassword(e.target.value)} />
                </div>

                <div class="form__group">
                    <input type="password" placeholder="Re-enter Password" class="form__input"
                        onChange={e => setPasswordConfirm(e.target.value)} />
                </div> */}

                <input type="submit" />
            </form>
            
            <p>
                <Link to = '/'><img src= {png} alt ="logo" className ="logo"  /> </Link> 
            </p>

        </div>
    );
}

export default Signup;