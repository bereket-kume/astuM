import React from 'react';
import { Link } from 'react-router-dom';
import './app.css'

const Login = () => {
  return (
    <>
    <div className='d-flex justify-content-center m-5'>
    <h1>Welcome to CSEC-ASTU Development Division</h1>
    </div>
    <div className="d-flex justify-content-center">
      
      <form style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card mb-3">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
        </div>
        <div className="mb-3 form-check">
        </div>
        <div className="d-flex justify-content-center mb-3">
          <Link to='/home'>
          <button type="submit" className="btn btn-primary">Login</button>
          </Link>
        </div>
        <div className="d-flex justify-content-center">
        <Link to="/register" className="text-decoration-underline" style={{ color: 'black' }}>Create account</Link>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;
