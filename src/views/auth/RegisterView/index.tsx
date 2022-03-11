import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Typography,
  makeStyles,
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import Page from 'src/components/Page';
import AuthRegister from './AuthRegister';
import Header from 'src/components/Header';
import { BackgroundImage, DataBalkImage } from 'src/utils/Images';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background:`url(${BackgroundImage}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  cardContainer: {
    paddingBottom: 40,
    paddingTop: 40,
  },
  cardContent: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400
  },
  cardContentContainer:{
    background: 'rgba(60,60,60,0.75);',
    borderRadius: 8
  },
  currentMethodIcon: {
    height: 40,
    '& > img': {
      width: 'auto',
      maxHeight: '100%'
    }
  }
}));

const RegisterView: FC = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Container
        className={classes.cardContainer}
        maxWidth="sm"
      >
        <Box
          mb={3}
          display="flex"
          justifyContent="center"
        >
          <Header />
        </Box>
        <Card className={classes.cardContentContainer}>
          <CardContent className={classes.cardContent}>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-between"
              mb={3}
            >
              <div>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant={'h3'}
                >
                  Register
                </Typography>
              </div>
              <div className={classes.currentMethodIcon}>
                <img alt="Woonplezier" src={DataBalkImage} />
              </div>
            </Box>
            <Box
              flexGrow={1}
              mt={3}
            >
            <AuthRegister />
            </Box>
            <Box my={3}>
              <Divider />
            </Box>
            <Link
              component={RouterLink}
              to="/login"
              variant="body2"
              color="textPrimary"
            >
              Having an account
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default RegisterView;
