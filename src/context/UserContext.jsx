import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

// Hook for easy access
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [role, setRole] = useState(null);          // Selected job title
  const [resumeFile, setResumeFile] = useState(null); // Uploaded resume file
  const [questions, setQuestions] = useState([]);   // Generated questions

  // --- AUTH FUNCTIONS ---

  const login = (userData) => {
    if (!userData) {
      console.warn('Login failed: no user data');
      return;
    }

    const safeUser = {
      id: userData.id || '',
      name: userData.name || 'Guest',
      email: userData.email || 'noemail@example.com',
      token: userData.token || '',
    };

    setUser(safeUser);
    localStorage.setItem('user', JSON.stringify(safeUser));
    console.log('User logged in:', safeUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setRole(null);
    setResumeFile(null);
    setQuestions([]);
    console.log('User logged out.');
  };

  // --- USER ROLE SELECTION ---

  const selectRole = (selectedRole) => {
    setRole(selectedRole);
  };

  // --- RESUME UPLOAD ---

  const uploadResume = (file) => {
    setResumeFile(file);
  };

  // --- QUESTION GENERATION ---

  const generateQuestions = async (jobTitle = '', questionType = 'technical', difficultyLevel = 'medium') => {
    if (!resumeFile) {
      throw new Error('No resume uploaded');
    }

    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('role', role || jobTitle);
    formData.append('question_type', questionType);
    formData.append('difficulty_level', difficultyLevel);
    formData.append('jobTitle', jobTitle);

    try {
      const response = await axios.post(
        'https://3b92-35-247-115-199.ngrok-free.app/generate_questions',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const technicalQuestions = response.data.technical_questions || [];
      const behavioralQuestions = response.data.behavioral_questions || [];
      const scenarioQuestions = response.data.scenario_questions || [];

      const formattedQuestions = [
        ...Object.values(technicalQuestions).flat().map((text, index) => ({
          id: `tech_${index + 1}`,
          text,
          type: 'technical',
        })),
        ...Object.values(behavioralQuestions).flat().map((text, index) => ({
          id: `beh_${index + 1}`,
          text,
          type: 'behavioral',
        })),
        ...scenarioQuestions.map((text, index) => ({
          id: `scen_${index + 1}`,
          text,
          type: 'scenario',
        })),
      ];

      setQuestions(formattedQuestions);
      return formattedQuestions;
    } catch (error) {
      console.error('Error generating questions:', error);
      throw new Error('Failed to generate questions');
    }
  };

  // --- CONTEXT PROVIDER ---

  return (
    <UserContext.Provider
      value={{
        user,
        role,
        resumeFile,
        questions,
        login,
        logout,
        selectRole,
        uploadResume,
        generateQuestions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
