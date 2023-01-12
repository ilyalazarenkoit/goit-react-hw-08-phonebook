import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Outlet } from 'react-router-dom';
import { LogIn } from 'components/LogIn/LogIn';

export const ProtectedRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <LogIn />;
};
