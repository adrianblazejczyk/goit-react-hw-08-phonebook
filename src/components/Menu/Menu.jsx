import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../redux/auth/authOperations';
import { selectUser } from '../../redux/auth/authSelector';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Menu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  return (
    <div>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Welcome, {userData.name}! ({userData.email})
          </Typography>
          <Button
            onClick={() => {
              dispatch(signOut());
            }}
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
