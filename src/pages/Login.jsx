import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(

                "http://localhost:3007/users/login",

                formData
            );

            localStorage.setItem(

                "token",

                res.data.token
            );

            alert("Login Successful");

            navigate("/");

        } catch (err) {

            console.log(err);

            alert("Login Failed");
        }
    };

    return (

        <div>

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;