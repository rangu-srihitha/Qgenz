import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext'; // Adjust path if needed
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ParticleBackground from '../components/ui/ParticleBackground';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useUser(); // Getting user information from context
  const [openFaq, setOpenFaq] = useState(null); // For toggling FAQs

  // Handle the 'Get Started' button
  const handleGetStarted = () => {
    if (user) {
      navigate('/user-selection'); // ✅ redirect if logged in
    } else {
      navigate('/login'); // ❌ not logged in? take them to login
    }
  };

  // FAQ Toggle
  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null); // Close the FAQ if it's already open
    } else {
      setOpenFaq(index); // Open the clicked FAQ
    }
  };

  // FAQ Data
  const faqs = [
    {
      question: "How does Qgenz generate interview questions?",
      answer: "Qgenz uses advanced AI algorithms to analyze resumes and job descriptions, generating relevant interview questions tailored to the specific role. Our system continuously learns from feedback to improve question quality and relevance."
    },
    {
      question: "Can I customize the types of questions generated?",
      answer: "Yes! Qgenz allows you to filter questions by type (behavioral or technical) and you can save your favorite questions for future use. We're also working on adding more customization options in upcoming releases."
    },
    {
      question: "Is my resume data secure?",
      answer: "Absolutely. We take data privacy seriously. Your resume data is encrypted and only used to generate questions. We never share your information with third parties, and you can request deletion of your data at any time."
    },
    {
      question: "How much does Qgenz cost?",
      answer: "Qgenz offers a free tier that includes basic question generation. Premium plans start at $9.99/month for HR professionals and $4.99/month for job seekers, with additional features like unlimited generations and advanced analytics."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ParticleBackground variant="home" />
      
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center pt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Next-Gen Interview Questions Powered by AI
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              Generate tailored interview questions instantly. For HR professionals and job seekers.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={handleGetStarted} className="btn-primary">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a href="#features" className="btn-outline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="mb-4">Why Choose Qgenz</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Our AI-powered platform helps both HR professionals and job seekers prepare for interviews more effectively.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="card animate-slide-up">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-500 dark:bg-primary-900/30">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Tailored Questions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI analyzes resumes and job descriptions to generate relevant, personalized interview questions.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="card animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100 text-secondary-500 dark:bg-secondary-900/30">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Instant Results</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Generate insightful interview questions in seconds, saving hours of preparation time.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100 text-accent-500 dark:bg-accent-900/30">
                <div className="text-2xl">🤖</div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Smarter Hiring</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Improve your interview process with AI-generated questions that reveal candidates' true potential.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about Qgenz
            </p>
          </div>
          
          <div className="mx-auto mt-12 max-w-3xl">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-5 dark:border-gray-700">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                <div className={`mt-2 transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Transform Your Interview Process?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Join thousands of professionals who are already using Qgenz to improve their interview experience.
          </p>
          <Link to="/login" className="btn bg-white px-8 py-3 font-medium text-primary-600 hover:bg-gray-100">
            Get Started for Free
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
