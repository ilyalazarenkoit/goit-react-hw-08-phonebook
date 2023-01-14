import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};
