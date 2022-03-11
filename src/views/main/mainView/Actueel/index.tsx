import React from "react";
import type { FC } from 'react';
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { Theme } from "src/theme";
import Cards from "./Cards";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    background: theme.palette.background.default,
    width: '100%',
    maxWidth: 'none',
    padding: '150px 8% 10px 8.5%',
  },
  header: {
    fontSize: 20,
    marginBottom: theme.spacing(1.5)
  },
  subText: {
    fontSize: 28,
    color: '#054175',
    marginBottom: theme.spacing(1.5),
    whiteSpace: 'nowrap'
  },
  text: {
    fontFamily: 'Roboto',
    width: '100%'
  },
  content: {
    position: 'relative'
  },
  box: {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
    width: '43%'
  },
}));

const Actueel: FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}> 
      <Box mb={2} className={classes.content}>
        <Box className={classes.box}>
          <Typography 
            className={classes.header}>
              Actueel
          </Typography>
        </Box>
        <Cards />
      </Box>
    </Container>
  );
};

export default Actueel;