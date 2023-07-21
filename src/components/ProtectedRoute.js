import React, { useEffect } from 'react';
import { GetCurrentUser } from '../apicalls/users';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const getCurrentUser = async () => {
    try {
      const response = await GetCurrentUser();
      if (response.success) {
        return true;
      } else {
        navigate('/login');
        return false;
      }
    } catch (error) {
      navigate('/login');
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      if (localStorage.getItem("token")) {
        try {
          await getCurrentUser();
        } catch (error) {
          // Handle any errors that might occur in getCurrentUser.
        }
      }
    };

    checkUser();
  }, []);

  return <div>{children}</div>;
}

export default ProtectedRoute;
