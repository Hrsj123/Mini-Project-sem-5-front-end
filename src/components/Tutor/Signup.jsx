import { useState } from 'react';
import '../css/images.css';

function RegisterSubject() {
    const [subject, setSubject] = useState({
        subName: "",
        totalMarks: "",
        inchargeName: "",
        description: ""
    });

    function handleSubmit(event) {
        event.preventDefault();
        setSubject({
            subName: "",
            totalMarks: "",
            inchargeName: "",
            description: ""
        });

        // Post request!    
        fetch('/learners/getLearners')              //  --> Probably wrong url!
            .then(res => res.json())
            .then(data => console.log(data));
        
    }
    
    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value; 
        console.log(fieldName, fieldValue);

        setSubject({
            ...subject, 
            [fieldName]: fieldValue                // [name] --> which input field is being types in !!
        })

    }

    return (    
        <div className="container mt-4 mb-4">
            <h3 className="text-center">Register a Subject</h3>
            <form onSubmit={handleSubmit} className="row mt-3">       
                <div className="col-6">
                    <img className="img-sub-register" src="/images/subjectSignup.jpg" alt="Signup" />
                </div>
                <div className="col-6">
                    <label htmlFor='subName'>Subject Name: </label>
                    <input 
                        type="text" name='subName' id='subName' autoComplete='off' placeholder='Subject name' className='form-control mt-2' 
                        value={subject.subName} 
                        onChange={handleInput}
                        required/>
                    <br />

                    <label htmlFor='totalMarks'>Total Marks: </label>
                    <input 
                        type="text" name='totalMarks' id='totalMarks' autoComplete='off' placeholder='Total Marks' className='form-control mt-2'
                        value={subject.totalMarks} 
                        onChange={handleInput}
                        required/>
                    <br />

                    <label htmlFor='inchargeName'>Incharge Name:</label>
                    <input 
                        type="text" name='inchargeName' id='inchargeName' autoComplete='off' placeholder='Enter incharge name!' className='form-control mt-2'
                        value={subject.inchargeName} 
                        onChange={handleInput}
                        required/>
                    <br />

                    <label htmlFor='description'>Subject description: </label>
                    <textarea name="description" cols="10" rows="2" id='description' autoComplete='off' placeholder='Description' className='form-control mt-2'
                        value={subject.description} 
                        onChange={handleInput}></textarea>
                    <br />

                    <input type="submit" className="btn btn-success" value="Submit" />
                </div>
            </form> 
        </div>
    );
}

export default RegisterSubject