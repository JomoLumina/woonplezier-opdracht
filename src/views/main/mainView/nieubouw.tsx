import React from "react";
import type { FC } from 'react';
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { Theme } from "src/theme";
import { NieubouwImage } from "src/utils/Images";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    background: theme.palette.background.nieubouw,
    width: '100%',
    minHeight: '500px',
    marginTop: -5,
    maxWidth: 'none',
    padding: '150px 30px 10px 14%',
  },
  header: {
    fontFamily: 'Roboto',
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
    width: '100%',
    marginBottom: 28
  },
  link: {
    fontFamily: 'Poppins',
    color: '#0a86f4',
    textDecoration: 'none',
    padding: '20px 0'
  },
  content: {
    position: 'relative',
  },
  box: {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
    width: '43%'
  },
  imageContainer: {
    position: 'relative',
  },
  image:{
    position: 'absolute',
    width: '50%',
    maxWidth: 720,
    top: 50,
    right: 0
  }
}));

const Nieubouw: FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}> 
      <Box mb={2} className={classes.content}>
        <Box className={classes.box}>
          <Typography 
            className={classes.header}>
              Nieubouw
          </Typography>
          <Typography 
            className={classes.subText}>
              Binnenkort in de verkoop
          </Typography>
          
          <Typography 
            className={classes.text}>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, 
            sem quam semper libero, sit amet adipiscing sem neque sed ipsum. 
            Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. 
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut 
            libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci 
            eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit 
            amet nibh.
          </Typography>
          <Link 
            to={'#'}
            className={classes.link}>
            Bekijk dit project  
          </Link>

        </Box>
        <img src={NieubouwImage} alt="nieuwbouw" className={classes.image}/>
      </Box>
    </Container>
  );
};

export default Nieubouw;