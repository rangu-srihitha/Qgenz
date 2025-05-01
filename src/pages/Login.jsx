import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, Facebook, Github } from 'lucide-react';
import { BrainCircuit } from 'lucide-react';
import { useUser } from '../context/UserContext';
import ParticleBackground from '../components/ui/ParticleBackground';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('signup') === 'true') {
      setIsSignUp(true);
    }
  }, [location]);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isSignUp && !name) {
      setError('Please enter your name');
      return;
    }

    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      const endpoint = isSignUp
        ? 'http://localhost:5010/api/auth/signup'
        : 'http://localhost:5010/api/auth/signin';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...(isSignUp ? { name } : {}),
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Store token separately if needed
      localStorage.setItem('token', data.token);

      // ✅ Pass real user info to context
      login({
        name: data.user?.name,
        email: data.user?.email,
        id: data.user?.id,
        token: data.token,
      });

      navigate('/user-selection');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSocialLogin = (provider) => {
    if (provider === 'google') {
      window.location.href = 'http://localhost:5010/api/auth/google';
    } else {
      alert(`${provider} login is not implemented yet.`);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
      <ParticleBackground variant="login" />
      <button
        onClick={() => navigate('/')}
        className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-lg bg-white/80 px-3 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white dark:bg-gray-800/80 dark:text-gray-300 dark:hover:bg-gray-800"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </button>

      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800">
        <div className="grid md:grid-cols-2">
          <div className="hidden bg-gradient-to-br from-primary-500 to-secondary-600 p-12 text-white md:block">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-8 w-8" />
                  <span className="text-2xl font-bold">Qgenz</span>
                </div>
                <h2 className="mt-12 text-3xl font-bold">Welcome to Qgenz</h2>
                <p className="mt-4 text-white/80">
                  AI-powered interview question generation platform for HR professionals and job seekers.
                </p>
              </div>

              <div className="relative mt-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <p className="italic text-white/90">
                  "Qgenz has completely transformed our interview process. The quality of questions has improved our candidate evaluation significantly."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/30"></div>
                  <div>
                    <p className="font-medium">SHAIK SWABIRA</p>
                    <p className="text-sm text-white/70">HR Director, TechCorp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="md:hidden mb-8 flex items-center justify-center gap-2">
              <BrainCircuit className="h-8 w-8 text-primary-500" />
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-2xl font-bold text-transparent">
                Qgenz
              </span>
            </div>

            <div className="mb-8 flex justify-center gap-3">
              <button onClick={() => setIsSignUp(false)} className={`pb-2 text-sm font-medium ${!isSignUp ? 'border-b-2 border-primary-500 text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'}`}>Sign In</button>
              <button onClick={() => setIsSignUp(true)} className={`pb-2 text-sm font-medium ${isSignUp ? 'border-b-2 border-primary-500 text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'}`}>Sign Up</button>
            </div>

            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <div className="mb-4">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                  <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="input" placeholder="John Doe" />
                </div>
              )}

              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="john@example.com" />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <div className="relative">
                  <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="input pr-10" placeholder="••••••••" />
                  <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {error && <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">{error}</div>}

              <button type="submit" className="btn-primary w-full">{isSignUp ? 'Create Account' : 'Sign In'}</button>

              <div className="my-6 flex items-center">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
                <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">OR</span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
              </div>

              <div className="grid gap-3">
                <button type="button" onClick={() => handleSocialLogin('google')} className="btn-outline flex w-full items-center justify-center gap-2">
                  <span>Continue with Google</span>
                </button>

                <button type="button" onClick={() => handleSocialLogin('facebook')} className="btn-outline flex w-full items-center justify-center gap-2">
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <span>Continue with Facebook</span>
                </button>

                <button type="button" onClick={() => handleSocialLogin('github')} className="btn-outline flex w-full items-center justify-center gap-2">
                  <Github className="h-5 w-5" />
                  <span>Continue with GitHub</span>
                </button>
              </div>

              <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                <button type="button" onClick={toggleForm} className="ml-1 font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
