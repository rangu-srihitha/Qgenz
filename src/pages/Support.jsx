import React from 'react';
import Header from '../components/layout/Header';

const Support = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-grow items-center justify-center pt-24">
        <div className="container mx-auto mb-8 px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h1 className="mb-3">Support</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Need help? We're here to assist you with any questions or issues.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-md">
                  <h3 className="font-semibold text-gray-700">How can I contact support?</h3>
                  <p className="text-gray-600">
                    You can reach out to our support team by emailing support@yourcompany.com, or use the contact form below.
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md">
                  <h3 className="font-semibold text-gray-700">What if I can't log into my account?</h3>
                  <p className="text-gray-600">
                    If you are having trouble logging into your account, please try resetting your password. If the issue persists, contact our support team for assistance.
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md">
                  <h3 className="font-semibold text-gray-700">How do I update my profile information?</h3>
                  <p className="text-gray-600">
                    You can update your profile information by visiting the settings page once you are logged into your account. If you need help, please reach out to support.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                If your question isn't answered here, or you need further assistance, feel free to contact our support team directly.
              </p>
              <form className="mt-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="input w-full p-2 border rounded"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="input w-full p-2 border rounded"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="input w-full p-2 border rounded"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div className="flex justify-center mt-6">
                  <button type="submit" className="btn-primary px-8 py-3">
                    Send Message
                  </button>
                </div>
              </form>
            </section>

            <section className="mb-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Other Resources</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Explore other helpful resources and guides in our knowledge base.
              </p>
              <a href="/help" className="btn-primary mt-4 inline-block">
                Visit Knowledge Base
              </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Support;
