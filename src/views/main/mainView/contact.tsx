import React from "react";
import type { FC } from 'react';
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { Theme } from "src/theme";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    background: theme.palette.background.contact,
    width: '100%',
    minHeight: '500px',
    maxWidth: 'none',
    padding: '90px 30px 10px 14%',
    [theme.breakpoints.down('xs')]: {
      padding: 20,
      margin: 'auto',
    },
  },
  content: {
    position: 'relative'
  },
  header: {
    fontSize: 28,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1.5),
  },
  text: {
    fontFamily: 'Roboto',
    color: theme.palette.text.primary,
    width: '100%',
    marginBottom: 18,
    maxWidth: 600
  },
  box: {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
    width: '43%',
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% - 20px)',
      display: 'flex',
      flexDirection: 'column'
    },
  },
  marginLeft50: {
    marginLeft: '43%',
    [theme.breakpoints.down('md')]: {
      marginLeft: 'initial',
    },
  }

}));

const Contact: FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}> 
      <Box mb={2} className={classes.content}>
        <Box className={classes.box}>
          <Typography 
            className={classes.header}>
              Wij zijn Woonplezier.<br/> 
              We hebben verstand van huizen.<br/>
              En hart voor mensen.
          </Typography>
          <Typography 
            className={classes.text}>
            Wij zijn een woningcorporatie met ongeveer 8.000 woningen in Zaandam en omgeving.
            We zorgen voor goede en betaalbare woningen in een prettige buurt voor huishoudens
            met een smalle beurs. Kwetsbare mensen kunnen op ons rekenen, 
            net als starters, gezinnen en alleenwonenden.
            <br/><br/><br/>
            Meer over Woonplezier
          </Typography>
        </Box>
        <Box className={classes.box}>
          <Typography className={`${classes.header} ${classes.marginLeft50}`}>Contact</Typography>
          <Typography className={`${classes.text} ${classes.marginLeft50}`}>
            Bezoekadres:<br/>
            Straatnaam 00<br/>
            0000 XX Plaatsnaam<br/><br/>

            Openingstijden:<br/>
            Maandag t/m vrijdagvan 9.00 tot 17.00 uur<br/><br/>

            Telefoon:<br/>
            000 -  000 00 00<br/><br/>

            Email:<br/>
            info@woonplezier.nu<br/>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;