import React from 'react';
import type { FC } from 'react';
import {
  Button,
  makeStyles,
  Typography
} from '@material-ui/core';
import { Theme } from 'src/theme';
import { 
  FirstImage,
  SecondImage,
  ThirdImage,
  FourthImage  } from 'src/utils/Images';


const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.dark,
    fontSize: 20,
    textTransform: 'none',
    borderRadius: 0,
    margin: 0,
    padding: '28px 5px',
    height: 150,
    border: '1px solid #ccc',
    display: 'inline-block',
    width: 202,
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
    [theme.breakpoints.down('md')]: {
      width: 180,
      height: 100,
      fontSize: 8,
    },
  },
  buttonIcon: {
    position: 'relative',
    width: 48,
    height: 48,
    [theme.breakpoints.down('md')]: {
      width: 32,
      height: 32,
    },

  },
  buttonText: {
    position: 'relative',
    color: theme.palette.menu.main,
  }
}));

const items = [
  {
    id: 1,
    text: 'Reparatie melden',
    icon: FirstImage
  },{
    id: 2,
    text: 'Huur betalen',
    icon: SecondImage
  },{
    id: 3,
    text: 'Woning zoeken',
    icon: ThirdImage
  },{
    id: 4,
    text: 'Overlast melden',
    icon: FourthImage
  }
];

const SubMenuItems: FC = () => {
  const classes = useStyles();
  const handleClick = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      {items.map((item) => (
        <Button
          key={item.id}
          onClick={handleClick}
          className={classes.menuButton}>
            <img src={item.icon} alt={item.text} className={classes.buttonIcon} />
            <Typography variant='h4' color={'textPrimary'} className={classes.buttonText}>
              {item.text}
            </Typography>
        </Button>
      ))}
    </div>
  );
}
export default SubMenuItems;
