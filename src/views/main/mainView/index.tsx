import React, { useRef } from 'react';
import type { FC } from 'react';
import {
  Container,
  makeStyles,
} from '@material-ui/core';
import Page from 'src/components/Page';
import type { Theme } from 'src/theme';
import TopBar from './TopBar';
import ScrollToTop from './ScrollToTop';
import Banner from './Banner';
import Nieubouw from './nieubouw';
import Actueel from './Actueel';
import Contact from './contact';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.default,
    minHeight: '100vh',
    overflow: 'hidden',
    paddingTop: 70,
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    maxWidth: 'none',
    padding: 0
  },
  topBar:{
    zIndex: 10
  }
}));

const MainView: FC = () => {
  const classes = useStyles();

  const bannerRef = useRef();
  const nieubouwRef = useRef();
  const actueelRef = useRef();
  const contactRef = useRef();
  const references = [
    bannerRef,
    nieubouwRef,
    actueelRef,
    contactRef
  ];

  return (
    <Page
      className={classes.root}
      title="Woonaplezier">
      <TopBar className={classes.topBar} references={references} />
      <Container className={classes.content}>
        <div ref={bannerRef}><Banner /></div>
        <div ref={nieubouwRef}><Nieubouw /></div>
        <div ref={actueelRef}><Actueel /></div>
        <div ref={contactRef}><Contact /></div>
        <ScrollToTop />
      </Container>
    </Page>
  );
};

export default MainView;
