import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="container">
            <h1 className="login">Log in</h1>
            <div action="">
                <input type="text" className="uname" id="" placeholder="Username or email" />
                <input type="password" className="uname" id="" placeholder="Password" />
                <input type="submit" className="button" value="Login" />
            </div>
    </div>
  );
};

export default Login