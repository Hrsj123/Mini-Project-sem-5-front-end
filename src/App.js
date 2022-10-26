import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';

import LearnerLayout from './components/Learner/LearnerLayout';
import LearnerIndex from './components/Learner/Index';

import TutorLayout from './components/Tutor/TutorLayout';
import TutorIndex from './components/Tutor/Index';

import About from './components/About';
import Help from './components/Help';
import NotFound from './components/404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >            {/* Layout: Homepage, Public page */}
        <Route index element={<Public />} />              {/* index: -> Default component rendered in path "/" */}
        
        <Route path="learners" element={<LearnerLayout />}>
          <Route index element={<LearnerIndex />}/>
          {/*
            <Route path="login" element={<LearnerLogin />} />
            <Route path="signup" element={<LearnerSignup />} />
          */}
        </Route>

        <Route path="tutor" element={<TutorLayout />}>
          <Route index element={<TutorIndex />}/>
          {/*
            <Route path="login" element={<TutorLogin />} />        
            <Route path="signup" element={<TutorSignup />} />      
          */}
        </Route>

        <Route path="about" element={<About />} />
        
        <Route path="help" element={<Help />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
