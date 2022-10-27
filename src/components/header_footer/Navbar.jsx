import React from 'react';
import { Link } from 'react-router-dom';
 
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent img-dark-nav">
            <div className="container-fluid">
                <span className="navbar-brand">Study Buddy</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link style={{textDecoration: 'None'}} to="/">
                                <span className="nav-link active" aria-current="page">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{textDecoration: 'None'}} to="about">
                                <span className="nav-link active" >About Us</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{textDecoration: 'None'}} to="contact">
                                <span className="nav-link active" tabIndex="-1" aria-disabled="true">Contact Us</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link to="login"><button className='btn btn-outline-success mx-2'>Log In</button></Link>
                        <Link to="signup"><button className='btn btn-outline-success mx-2'>Sign up</button></Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;