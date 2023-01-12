import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUsername } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authOperations';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectUsername);
  const dispatch = useDispatch();
  function quit() {
    dispatch(logOut());
  }
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <NavLink to="/contacts">Contacts</NavLink>
          Hello, {userEmail}
          <button type="button" onClick={() => quit()}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      )}

      <Outlet />
    </div>
  );
};
