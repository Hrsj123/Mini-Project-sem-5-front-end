import { Link } from 'react-router-dom';

function StudentPage() {        // Create student main-page
    return (
        <div className="container mt-5">
            <header>
                <h1 className='text-center'>Students</h1>
            </header>
            <main>
                <p className="text-center">
                    Join one of the available subjects taught by our staff...!
                </p>
            <div className="text-center mt-5">
                <Link to="signup"><button className='btn btn-success'>Sign Up</button></Link>
            </div>
            </main>
        </div>
    );
}

export default StudentPage