import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Header from '../components/layout/Header';
import ResumeUploader from '../components/ui/ResumeUploader';

const HRPage = () => {
  const navigate = useNavigate();
  const { resumeFile, generateQuestions, selectRole } = useUser();
  const [loading, setLoading] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [questionType, setQuestionType] = useState('technical');
  const [difficultyLevel, setDifficultyLevel] = useState('medium');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeFile) {
      setError('Please upload a candidate resume first');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      selectRole(jobTitle || ''); // Pass job title as role, empty string if not provided
      await generateQuestions(jobTitle, questionType, difficultyLevel);
      setLoading(false);
      navigate('/hr/questions');
    } catch (err) {
      setLoading(false);
      setError('Failed to generate questions. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow items-center justify-center pt-24">
        <div className="container mx-auto mb-8 px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h1 className="mb-3">HR Interview Question Generator</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Upload a candidate's resume and customize interview questions
              </p>
            </div>

            {error && (
              <div className="mb-4 text-red-500 text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="card mb-8 glassmorphism">
                <h2 className="mb-6 text-xl font-bold">1. Upload Candidate Resume</h2>
                <ResumeUploader />
              </div>

              <div className="card mb-8 glassmorphism">
                <h2 className="mb-6 text-xl font-bold">2. Customize Questions</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="jobTitle"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Job Title (Optional)
                    </label>
                    <input
                      id="jobTitle"
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      className="input w-full p-2 border rounded"
                      placeholder="e.g. Software Engineer"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="questionType"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Question Type
                    </label>
                    <select
                      id="questionType"
                      value={questionType}
                      onChange={(e) => setQuestionType(e.target.value)}
                      className="input w-full p-2 border rounded"
                    >
                      <option value="technical">Technical</option>
                      <option value="behavioral">Behavioral</option>
                      <option value="scenario">Scenario</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="difficultyLevel"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Difficulty Level
                    </label>
                    <select
                      id="difficultyLevel"
                      value={difficultyLevel}
                      onChange={(e) => setDifficultyLevel(e.target.value)}
                      className="input w-full p-2 border rounded"
                    >
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  Customize your questions by specifying a job title, question type, and difficulty level.
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={!resumeFile || loading}
                  className={`btn-primary relative overflow-hidden px-8 py-3 ${
                    loading ? 'cursor-not-allowed opacity-80' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <span className="opacity-0">Generate Questions</span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      </div>
                    </>
                  ) : (
                    'Generate Questions'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HRPage;