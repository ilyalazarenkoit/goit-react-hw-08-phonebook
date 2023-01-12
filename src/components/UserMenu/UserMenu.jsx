import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { selectUsername } from 'redux/selectors';
import { useSelector } from 'react-redux';
import styles from '../UserMenu/UserMenu.module.css';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(151, 151, 151)',
    },
  },
});

export const UserMenu = () => {
  const userEmail = useSelector(selectUsername);
  const dispatch = useDispatch();
  function quit() {
    dispatch(logOut());
  }
  return (
    <div className={styles.wrapper}>
      <ThemeProvider theme={theme}>
        <NavLink className={styles.navLink} to="/contacts">
          Contacts
        </NavLink>
        <p className={styles.text}>Hello, {userEmail}</p>
        <Button
          type="button"
          variant="outlined"
          color="primary"
          onClick={() => quit()}
        >
          Log Out
        </Button>
      </ThemeProvider>
    </div>
  );
};
