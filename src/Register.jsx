import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  

  return (
    <div className="d-flex justify-content-center">
      <form style={{ maxWidth: '400px', width: '100%' }}>
        <div className="contianer mb-3">
          <form>
          <input
            type="text"
            className="form-control mb-3"
            id="firts-name"
            placeholder="First Name"
          />
          <input 
          type='text'
          className='form-control mb-3'
          id='last-name'
          placeholder='Last Name'
          />
            <input 
            type='text'
            className='form-control mb-3'
            placeholder='Email'
            />
            <input
              type='password'
              className='form-control mb-3'
              placeholder='New Password'
            />
             <input
              type='password'
              className='form-control mb-3'
              placeholder='Confirm Password'
            />
          </form>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <Link to="/">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
