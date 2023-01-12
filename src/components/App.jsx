import { Register } from './Register/Register';
import { LogIn } from './LogIn/LogIn';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from './Contacts/Contacts';
import { Header } from './NavMenu/NavMenu';
import { refresh } from 'redux/authOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
