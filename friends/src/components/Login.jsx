import React, {useState} from "react";

import { axiosAuth } from "../utils/axiosAuth";

const initState = {    
  username: "",
  password: ""
}

const Login = (props) => {
  const [creds, setCreds] = useState(initState)
  console.log(props);
  
  const handleChange = (e) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosAuth()
      .post("/api/login", creds)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push('/protected')
      })
      .catch((err) => console.log(err));
  };

    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={creds.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={creds.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
}

export default Login