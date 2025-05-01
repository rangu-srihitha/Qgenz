import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import UserSelection from './pages/UserSelection';
import HRPage from './pages/HRPage';
import JobseekerPage from './pages/JobseekerPage';
import HRQuestionPage from './pages/HRQuestionPage';
import JobseekerQuestionPage from './pages/JobseekerQuestionPage';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';
import OAuthSuccess from './pages/OAuthSuccess';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-selection" element={<UserSelection />} />
        <Route path="/hr" element={<HRPage />} />
        <Route path="/jobseeker" element={<JobseekerPage />} />
        <Route path="/hr/questions" element={<HRQuestionPage />} />
        <Route path="/jobseeker/questions" element={<JobseekerQuestionPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />
      </Routes>
    </div>
  );
}

export default App;