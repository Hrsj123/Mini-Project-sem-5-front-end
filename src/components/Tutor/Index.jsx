import React from 'react'
import { Link } from 'react-router-dom'

function TutorPage() {
    return (
        <div className="container mt-5">
            <header>
                <h1 className='text-center'>Teachers</h1>
            </header>
            <main>
                <p className="text-center">
                    Register with us and manage handling many students with ease!
                </p>
            <div className="text-center mt-5">
                <Link to="signup"><button className='btn btn-success'>Sign Up</button></Link>
            </div>
            </main>
        </div>
    );
}

export default TutorPage