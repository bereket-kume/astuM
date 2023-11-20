import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return ( 
<nav className="navbar navbar-expand-lg bg-body-tertiary navbar-success" style={{ width: '100%', marginTop: '0' }}>  <div className="container-fluid">
<img src={'src/csec.png'}  style={{ width:'40px', borderRadius:'20px'}} />
    <button className="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse m-3" id="navbarNavAltMarkup">
        
    <div className="navbar-nav">
   <Link className="navbar-nav-link m-2">Home</Link>
  <Link className="navbar-nav-link m-2">Event</Link>
  <Link className="navbar-nav-link m-2">About</Link>
  <Link className="navbar-nav-link m-2">Contact</Link>
</div>
    </div>
  </div>
</nav>
     );
}
 
export default Home;