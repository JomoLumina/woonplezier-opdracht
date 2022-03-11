import React from 'react';
import type { FC } from 'react';
import {
  Button,
  makeStyles
} from '@material-ui/core';
import { Theme } from 'src/theme';


const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    background: theme.palette.background.default,
    color: theme.palette.text.dark,
    fontSize: 20,
    textTransform: 'none',
    marginLeft: 28,
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}));

const pages = ['Ik huur', 'Ik zoek', 'Projecten', 'Contact'];

interface MenuItemsReferences{
  references: any;
}

const MenuItems: FC<MenuItemsReferences> = ({references}) => {
  const classes = useStyles();
  const handleClick = (e, i) => {
    e.preventDefault();
    console.log(e.target.value, i);
    references[i].current.scrollIntoView({behavior: 'smooth'})
    
  }
  return (
    <div>
      {pages.map((page, i) => (
        <Button
          key={page}
          onClick={e => handleClick(e,i)}
          className={classes.menuButton}>
          {page}
        </Button>
      ))}
    </div>
  );
}
export default MenuItems;
