import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import styles from '../NavMenu/NavMenu.module.css';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={styles.wrapper}>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div>
          <div className={styles.navLinkWrapper}>
            <NavLink className={styles.NavLink} to="/login">
              Log In
            </NavLink>
            <NavLink className={styles.NavLink} to="/register">
              Register
            </NavLink>
          </div>
          <div className={styles.placeHolder}>
            To See Contacts, Please authenticate
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};
