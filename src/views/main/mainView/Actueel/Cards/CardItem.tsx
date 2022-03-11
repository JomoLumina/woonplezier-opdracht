import React from 'react';
import type { FC } from 'react';
import {
  Box,
  makeStyles,
  Typography
} from '@material-ui/core';
import { Theme } from 'src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    boxShadow: '3px 3px rgb(0 0 0 / 19%)',
    borderLeft: '1px solid rgb(0 0 0 / 19%)',
    margin: theme.spacing(1),
    borderRadius: theme.spacing(1),
    width: '100%'
  },
  content: {
    position: 'relative'
  },
  image: {
    width: '100%',
    minHeight: 290
  },
  date: {
    fontFamily: 'Roboto',
    fontSize: 18,
    padding: theme.spacing(1.5),
    color: "#444"
  },
  title: {
    fontSize: theme.spacing(3),
    padding: theme.spacing(1.5),
    color: "#054175",
    height: 100,
    overflow: 'hidden',
  },
  description: {
    fontFamily: 'Roboto',
    fontSize: 18,
    padding: theme.spacing(0, 1.5),
    color: "#444",
    height: 248,
    overflow: 'hidden',
    marginBottom: 20
  }
}));

interface CardProps {
  id: number,
  image: string,
  date: string,
  title: string,
  description: string
}

const CardItem: FC<CardProps> = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <img className={classes.image} alt={props.title} src={props.image} />
        <Typography className={classes.date}>{props.date}</Typography>
        <Typography className={classes.title}>{props.title}</Typography>
        <Typography className={classes.description}>{props.description}</Typography>
      </Box>
    </Box>
  );
}
export default CardItem;
