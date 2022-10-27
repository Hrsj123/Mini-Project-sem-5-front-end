import { useState, useEffect } from 'react';
import '../css/images.css';
// import '../css/selectSubjectsDropdown.css';

function LearnerSignup() {
    const [learner, setLearner] = useState({
        firstName: "",
        lastName: "",
        phoneNo: "",                    // Number
        email: "",                      // email
        subjectList: []
    });

    const [subjects, setSubjects] = useState([]);


    // phone number input validation!
    function maxLengthCheck(e) {
        const num = e.target.value
        if (num.length > 10) {
            e.target.value = num.slice(0, 10);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setLearner({
            firstName: "",
            lastName: "",
            phoneNo: "",                    
            email: "",                      
            subjectList: []
        });

        // Post request!    
        fetch('http://localhost:3500/learners/signup/', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(learner)
            })
            .then(res => res.json())
            .then(data => console.log(data));
        
    }
    
    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value; 
        // console.log(fieldName, fieldValue);

        setLearner({
            ...learner, 
            [fieldName]: fieldValue                // [name] --> which input field is being types in !!
        })

    }

    // get request to fetch available subjects!
    function callApi() {
        fetch('http://localhost:3500/tutor/getSubjects/')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return setSubjects(data);
        });
    }

    useEffect(() => {
        callApi();
    }, []);

    return (    
        <div className="container mt-4 mb-4">
            <form onSubmit={handleSubmit} className="row mt-3">       
                <div className="col-12 col-md-6">
                    <h2 className="text-center">Learner Sign-up</h2>
                    <img className="img-student-register" src="/images/learnerSignup.jpg" alt="Signup" />  
                </div>

                <div className="col-12 col-md-6">
                    <label htmlFor='firstName' className='mt-4'>Fisrt Name: </label>
                    <input 
                        type="text" name='firstName' id='firstName' autoComplete='off' placeholder='Fisrt name' className='form-control mt-2' 
                        value={learner.firstName} 
                        onChange={handleInput}
                        required/>
                    <br />

                    <label htmlFor='lastName'>Total Marks: </label>
                    <input 
                        type="text" name='lastName' id='lastName' autoComplete='off' placeholder='Last name' className='form-control mt-2'
                        value={learner.lastName} 
                        onChange={handleInput}
                        required/>
                    <br />

                    <label htmlFor='phoneNo'>Phone number: </label>
                    <input 
                        type="number" name='phoneNo' id='phoneNo' autoComplete='off' placeholder='Enter your number' className='form-control mt-2'
                        onInput={maxLengthCheck} minLength="10" maxLength="10" 
                        value={learner.phoneNo} 
                        onChange={handleInput}
                        required/>
                    <br />

                    <label htmlFor='email'>Email: </label>
                    <input 
                        type="email" name='email' id='email' autoComplete='off' placeholder='Enter your email' className='form-control mt-2'
                        value={learner.email} 
                        onChange={handleInput}
                        required/>
                    <br />

                    {/* Re-implement: Dropdown list with multiple options (Refer to the blog in browser!) */}

                    <div class="dropdown">
                        <label htmlFor="subjectList">Select Subjects: &nbsp;</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="btn btn-primary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subjects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {
                            subjects.map((subject) => {
                                return (
                                    <li key={subject._id} className="dropdown-item" value={subject.name}>{ subject.name }</li>   
                                );
                            })
                        }
                        </ul>
                    </div>
                    <br />


                    <input type="submit" className="btn btn-success mt-2" value="Submit" />
                </div>
            </form> 
        </div>
    );
}

export default LearnerSignup