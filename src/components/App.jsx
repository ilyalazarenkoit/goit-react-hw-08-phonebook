import { Route, Routes, Navigate } from 'react-router-dom';
import { Contacts } from './Contacts/Contacts';
import { Header } from './NavMenu/NavMenu';
import { refresh } from 'redux/authOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/login" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<Navigate to="/contacts" />} />
        </Route>
      </Routes>
    </>
  );
};
