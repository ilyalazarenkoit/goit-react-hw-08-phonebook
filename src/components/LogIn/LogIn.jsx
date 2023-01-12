import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authOperations';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const LogIn = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(logIn(values));
      formik.resetForm({ name: '', email: '' });
    },
  });
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  } else {
    return (
      <>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
};
