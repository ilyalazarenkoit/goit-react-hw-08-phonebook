import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const Register = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(register(values));
      formik.resetForm({ name: '', email: '' });
    },
  });
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  } else {
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
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
    );
  }
};
