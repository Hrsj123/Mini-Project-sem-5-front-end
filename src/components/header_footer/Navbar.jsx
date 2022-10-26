import React from 'react';
import { Link } from 'react-router-dom';
 
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent img-dark-nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Study Buddy</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link style={{textDecoration: 'None'}} to="/">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{textDecoration: 'None'}} to="about">
                                <a className="nav-link active" href="#">About Us</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{textDecoration: 'None'}} to="help">
                                <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true">Help</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button className='btn btn-outline-success mx-2'>Log In</button>
                        <button className='btn btn-outline-success mx-2'>Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;