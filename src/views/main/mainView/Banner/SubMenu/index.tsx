import React from "react";
import type { FC } from 'react';
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { Theme } from "src/theme";
import SubMenuItems from "./SubMenuItems";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'absolute',
    background: 'transparent',
    left: '16%',
    right: 0,
    bottom: 100,
    width: 'auto',
    margin: '0 auto',
  },
  content: {
    position: 'relative',
    top: -40,
    [theme.breakpoints.down('md')]: {
      top: -90
    },
    [theme.breakpoints.down('md')]: {
      top: 0
    },
  },
  text: {
    position: 'absolute',
    top: -100,
    [theme.breakpoints.down('xs')]: {
      top: 0,
      margin: 0
    },
  },
  topic: {
    position: 'relative',
    fontSize: 62,
    maxWidth: 560,
    textShadow: '0 3px 3px rgb(0 0 0 / 90%)',
    [theme.breakpoints.down('md')]: {
      fontSize: 50,
      maxWidth: 480,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
      maxWidth: 350,
    },

  },
  subMenuItemContainer: {
    position: 'absolute',
    top: 50,
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden',
      height: 100,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  }
}));

const SubMenu: FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}> 
      <Box className={classes.content}>
        <Box mb={2} className={classes.text}>
          <Typography 
            color="textPrimary"
            variant={'h3'}
            className={classes.topic}>
              Waarmee kunnen we je helpen?
          </Typography>
        </Box>
        <Box className={classes.subMenuItemContainer}>
          <SubMenuItems></SubMenuItems>
        </Box>
      </Box>
    </Container>
  );
};

export default SubMenu;