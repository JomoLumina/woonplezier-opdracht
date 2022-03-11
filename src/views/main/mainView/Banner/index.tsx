import React from "react";
import type { FC } from 'react';
import { Box, makeStyles } from "@material-ui/core";
import { BannerImage } from "src/utils/Images";
import SubMenu from "./SubMenu";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    position: 'relative',
  }
}));


const Banner: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={BannerImage} alt='banner' style={{width: '100%'}} />
      <SubMenu/>
    </Box>
  );
};

export default Banner;