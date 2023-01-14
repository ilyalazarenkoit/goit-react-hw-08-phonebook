import { Route, Routes, Navigate } from 'react-router-dom';
import { Contacts } from './Contacts/Contacts';
import { Header } from './NavMenu/NavMenu';
import { refresh } from 'redux/user/authOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';
import { PublicRoute } from './PublicRoute/PublicRoute';

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <ProtectedRoute>
                <Contacts />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/contacts" />} />
        </Route>
      </Routes>
    </>
  );
};
