import React, {
  useRef,
  useState
} from 'react';
import type { FC } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import useAuth from 'src/hooks/useAuth';
import { Theme } from 'src/theme';
import { AvatarImage } from 'src/utils/Images';
const useStyles = makeStyles((theme: Theme) => ({
  container:{
    background: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    borderRadius: 50,
    padding: 10,
    position: 'absolute',
    top: 0,
    bottom: 0,
    height: 42,
    margin: 'auto',
    right: '8%'
  },
  avatar: {
    height: 18,
    width: 18,
    marginRight: theme.spacing(1)
  },
  popover: {
    width: 200,
    zIndex: 20,
    color: theme.palette.text.dark,
  },
  username:{
    fontSize: 14,
    letterSpacing: -0.05,
    whiteSpace: 'nowrap',
    maxWidth: 120,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    textAlign: 'left',
  }
}));

const Account: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const ref = useRef<any>(null);
  const { user, logout } = useAuth();
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleLogout = async (): Promise<void> => {
    try {
      handleClose();
      await logout();
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        className={classes.container}
        // @ts-ignore
        ref={ref}
      >
        <img
          alt="User"
          className={classes.avatar}
          src={AvatarImage}
        />
        <Hidden xsDown>
          <Typography
            variant="h6"
            className={classes.username}
          >
            { user ? user.name : 'Anonymous'}
          </Typography>
        </Hidden>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        color={colors.common.black}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default Account;
