import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Outlet } from 'react-router-dom';
import { SignIn } from 'components/SignIn/SignIn';

export const ProtectedRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <SignIn />;
};
