import React from 'react';
import type { FC } from 'react';
import {
  Container,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme'; 
import { HeaderIconImage, HeaderTextImage } from 'src/utils/Images';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(2),
    maxWidth: 400,
  },
  headerIcon: {
    textAlign: 'left',
    display: 'inline-flex',
    paddingRight: 10
  },
  headerText: {
    textAlign: 'left',
    display: 'inline-flex'
  }
}));

const Header: FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.root}>
          <img className={classes.headerIcon} src={HeaderIconImage} alt='header icon' /> 
          <img className={classes.headerText} src={HeaderTextImage} alt='header text' /> 
      </Container>
    </div>
    
  );
};

export default Header;

