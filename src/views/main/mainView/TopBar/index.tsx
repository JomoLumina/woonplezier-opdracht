import React from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  Toolbar,
  makeStyles,
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import Account from './Account';
import Logo from 'src/components/Logo';
import MenuItems from './MenuItems';
import { HeaderTextImage, HeaderIconImage } from 'src/utils/Images';

interface TopBarProps {
  className?: string;
  references: any;
  onMobileNavOpen?: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    minHeight: 89,
    paddingLeft: '8.5%',
    paddingRight: '8%'
  },
  logoContainer: {
    maxHeight: 89
  },
  headerBox: {
    alignItems: 'center',
    flexDirection: 'column',
    height: 40,
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'left',
    display: 'inline-flex'
  },
  headerIcon: {
    textAlign: 'left',
    display: 'inline-flex',
    marginRight: 15,
    width: 41,
    height: 40
  },
  menuItems: {
    justifyContent: 'center'
  }
}));

const TopBar: FC<TopBarProps> = ({
  className,
  references,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden smUp>
          <Box>
            <Logo />
          </Box>
        </Hidden>
        <Hidden xsDown>
          <Box  className={classes.headerBox}>
            <img className={classes.headerIcon} src={HeaderIconImage} alt='header icon' /> 
            <img className={classes.headerText} src={HeaderTextImage} alt='header text' /> 
        </Box>
        <Box
          ml={2}
          flexGrow={1}
          className={classes.menuItems}>
          <Box>
            <MenuItems references={references}></MenuItems>
          </Box>
        </Box>
        </Hidden>
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  references: PropTypes.any,
  onMobileNavOpen: PropTypes.func
};

TopBar.defaultProps = {
  onMobileNavOpen: () => {}
};

export default TopBar;
