import React from 'react';
import Header from '../components/layout/Header';

const Features= () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow items-center justify-center pt-24">
        <div className="container mx-auto mb-8 px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h1 className="mb-3">Features</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Discover the powerful features that help you get the most out of our platform.
              </p>
            </div>

            {/* Feature 1 */}
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <div className="card p-6 glassmorphism">
                <h2 className="text-2xl font-bold mb-4">Customizable Question Generation</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Tailor interview questions based on job title, type, and difficulty level. Whether you're hiring for technical roles or behavioral ones, we’ve got you covered.
                </p>
              </div>

              <div className="card p-6 glassmorphism">
                <h2 className="text-2xl font-bold mb-4">Resume Upload & Parsing</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Upload a candidate's resume, and our system will analyze it to generate specific questions, ensuring relevance to the role and skillset.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <div className="card p-6 glassmorphism">
                <h2 className="text-2xl font-bold mb-4">AI-Powered Recommendations</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI engine suggests the best questions based on the role and resume analysis, ensuring that your interview is comprehensive and impactful.
                </p>
              </div>

              <div className="card p-6 glassmorphism">
                <h2 className="text-2xl font-bold mb-4">User-Friendly Interface</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  With an intuitive and easy-to-use interface, you can quickly navigate and access the features you need without any technical expertise.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <div className="card p-6 glassmorphism">
                <h2 className="text-2xl font-bold mb-4">Real-Time Collaboration</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Collaborate with team members and share your interview questions with just a few clicks. Streamline the hiring process with real-time collaboration.
                </p>
              </div>

              <div className="card p-6 glassmorphism">
                <h2 className="text-2xl font-bold mb-4">Mobile-Friendly</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Our platform is fully responsive, making it easy to manage and track your interview process from any device, at any time.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Join us today and streamline your interview process with AI-powered features.
              </p>
              <a href="/signup" className="btn-primary px-8 py-3">
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Features;
