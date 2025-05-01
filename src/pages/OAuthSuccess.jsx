import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const OAuthSuccess = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get('token');
    const name = query.get('name');
    const email = query.get('email');
    const id = query.get('id');

    if (token && name && email && id) {
      const userData = {
        id,
        name,
        email,
        token,
      };
      login(userData);
      navigate('/user-selection');
    } else {
      console.error('OAuth user data missing from URL');
      navigate('/login');
    }
  }, [location, login, navigate]);

  return <div className="text-center mt-10 text-lg">Logging in with Google...</div>;
};

export default OAuthSuccess;
