import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';

import LearnerLayout from './components/Learner/LearnerLayout';
import LearnerIndex from './components/Learner/Index';
import LearnerSignup from './components/Learner/Signup';
import LearnerLogin from './components/Learner/Login';
import GetAllLearners from './components/Learner/GetAllLearners';

import TutorLayout from './components/Tutor/TutorLayout';
import TutorIndex from './components/Tutor/Index';
import TutorSignup from './components/Tutor/Signup';
import TutorLogin from './components/Tutor/Login';
import GetAllSubjects from './components/Tutor/GetAllSubjects';

import Teacher_Learner_Login from './components/header_footer/Teacher_Student_login';
import Teacher_Learner_Signup from './components/header_footer/Teacher_Student_signup';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >            {/* Layout: Homepage, Public page */}
        <Route index element={<Public />} />              {/* index: -> Default component rendered in path "/" */}
        
        <Route path="learners" element={<LearnerLayout />}>
          <Route index element={<LearnerIndex />} />
          <Route path="getLearners" element={<GetAllLearners />} />
          <Route path="login" element={<LearnerLogin />} />
          <Route path="signup" element={<LearnerSignup />} />
        </Route>

        <Route path="tutor" element={<TutorLayout />}>
          <Route index element={<TutorIndex />} />
          <Route path="getSubjects" element={<GetAllSubjects />} />
          <Route path="login" element={<TutorLogin />} />        
          <Route path="signup" element={<TutorSignup />} />      
        </Route>

        <Route path="about" element={<About />} />
        
        <Route path="contact" element={<Contact />} />

        <Route path="login" element={<Teacher_Learner_Login />} />    

        <Route path="signup" element={<Teacher_Learner_Signup />} />    
        
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
