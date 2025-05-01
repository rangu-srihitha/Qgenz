import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, BrainCircuit } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { useUser } from '../../context/UserContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(prev => !prev);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-md dark:bg-gray-900/90' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <BrainCircuit className="h-8 w-8 text-primary-500" />
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Qgenz
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-4 md:flex">
          {['pricing', 'features', 'about', 'contact', 'support'].map((item) => (
            <Link key={item} to={`/${item}`} className="nav-link capitalize">
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {user ? (
            <div ref={profileRef} className="relative flex items-center gap-2">
              {/* Only user icon circle */}
              <button
                onClick={toggleProfile}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                {user?.name?.charAt(0).toUpperCase() || 'G'}
              </button>

              {/* Profile dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 top-12 z-50 w-56 rounded-lg bg-white p-2 shadow-lg dark:bg-gray-800">
                  <div className="border-b border-gray-200 px-4 py-2 dark:border-gray-700">
                    <p className="font-medium">{user?.name || 'Guest'}</p> {/* Show real name or fallback */}
                    <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
                  </div>
                  <ul className="py-1">
                    <li>
                      <button className="menu-button" onClick={() => setIsProfileOpen(false)}>
                        Profile
                      </button>
                    </li>
                    <li>
                      <button className="menu-button" onClick={() => setIsProfileOpen(false)}>
                        Settings
                      </button>
                    </li>
                    <li>
                      <button className="menu-button" onClick={() => setIsProfileOpen(false)}>
                        Help
                      </button>
                    </li>
                    <li className="border-t border-gray-200 dark:border-gray-700">
                      <button
                        onClick={handleLogout}
                        className="menu-button text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden space-x-2 md:flex">
              <Link to="/login" className="btn-outline">
                Sign In
              </Link>
              <Link to="/login?signup=true" className="btn-primary">
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="animate-fade-in bg-white p-4 shadow-md dark:bg-gray-900 md:hidden">
          <nav className="flex flex-col space-y-3">
            {['pricing', 'features', 'about', 'contact', 'support'].map((item) => (
              <Link key={item} to={`/${item}`} className="mobile-nav-link capitalize">
                {item}
              </Link>
            ))}
            {!user && (
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/login" className="btn-outline">
                  Sign In
                </Link>
                <Link to="/login?signup=true" className="btn-primary">
                  Sign Up
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
