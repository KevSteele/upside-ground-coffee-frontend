import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function useForm({ initialValues }) {
    let history = useHistory();
    const [values, setValues] = useState(initialValues || {});
    const [error, setError] = useState(null);

    //track form values
    const handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        setValues({
            ...values,
            [name]: value
        });
    };

    //submit form when enter key is pressed
    const handleKeyDown = event => {
        const enter = 13;
        if (event.keyCode === enter) {
            handleSubmit(event);
        }
    }

    //submit form when submit button is clicked
    const handleSubmit = event => {
        event.preventDefault();
        submitData({ values });
    };

    //send data to database
    const submitData = async (formValues) => {
        const url = 'http://localhost:3000/';
        const dataObject = formValues.values;
        const { fullname, email, password, passwordConfirm} = dataObject;
        try {
            await axios({
                method: 'POST',
                url: `${url}user/signup`,
                data: {
                    fullname: fullname,
                    email: email,
                    password: password,
                    // passwordConfirm: passwordConfirm
                },
                headers: new Headers({ 'Content-Type': 'application/json' })
            }).then(res => {
                history.push('/');
                alert('Success!')
            })
        } catch (err) {
            // setError(err.response.data);
            console.log(err.response.data);
            alert(err.response.data)
            // document.write(err.response.data);
        }
    };

    //login
    const sessionLogin = async (formValues) => {
        const url = 'http://localhost:3000/';
        const dataObject = formValues.values;
        const {email, password} = dataObject;
        try {
            await axios({
                method: 'POST',
                url: `${url}user/login`,
                data: {
                    email: email,
                    password: password,
                },
                headers: new Headers({ 'Content-Type': 'application/json' })
            }).then(res => {
                history.push('/orders'); //profile route goes here
                alert('Success!')
            })
        } catch (err) {
            // setError(err.response.data);
            console.log(err.response.data);
            alert(err.response.data)
            // document.write(err.response.data);
        }
    };

    return {
        handleChange,
        handleKeyDown,
        values,
        handleSubmit,
        error,
        sessionLogin
    }
}