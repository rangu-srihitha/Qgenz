import React from 'react';
import { BrainCircuit, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="mb-8">
            <Link to="/" className="mb-4 flex items-center gap-2">
              <BrainCircuit className="h-8 w-8 text-primary-500" />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-2xl font-bold text-transparent">
                Qgenz
              </span>
            </Link>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              AI-powered interview question generation for HR professionals and job seekers.
              Take your interview preparation to the next level.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hr" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                  Recruitment Tool
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* For Candidates */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">For Candidates</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jobseeker" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                  Practice Tool
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                  Interview Tips
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                  Career Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 py-6 text-center dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Qgenz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;