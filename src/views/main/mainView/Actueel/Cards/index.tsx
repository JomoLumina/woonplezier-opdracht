import React, { useState } from "react";
import type { FC } from 'react';
import { Button, Container, makeStyles, Box } from "@material-ui/core";
import { Theme } from "src/theme";
import CardItem from "./CardItem";
import { 
  ActueelOneImage,
  ActueelTwoImage,
  ActueelThreeImage } from 'src/utils/Images';

const useStyles = makeStyles((theme: Theme) => ({
  container:{
    margin: '0 auto',
    padding: 0,
    maxWidth: 'none',
  },
  cardsBox: {
    display: 'inline-flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  buttonBox: {
    marginTop: theme.spacing(2),
    textAlign: 'center'
  },
  content: {
    width: '32%',
    margin: '0.2%',
    minWidth: 315
  },
  button:{
    borderRadius: 50,
    color: theme.palette.background.contact,
    borderColor: '#0a86f4',
  }
}));

const _cards = [
  {
    id: 1,
    title: 'Bouw 55 sociale huurappartementen gestart',
    date: '03-02-2021',
    description: `Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
     sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
     blandit vel, luctus pulvinar, hendrerit id, lorem.`,
    image: ActueelOneImage
  },
  {
    id:2,
    title: 'Cultuurhistorische eisen belemmeren nieuwbouw',
    date: '15-02-2021',
    description: `Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem 
     quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, 
     luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. 
     Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci 
     eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.`,
    image: ActueelTwoImage
  },
  {
    id: 3,
    title: 'Bewonersbijeenkomst op donderdag 9 maart',
    date: '20-02-2021',
    description: `Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper 
     libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, 
     hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero`,
    image: ActueelThreeImage
  }
];

const Cards: FC = () => {
  const classes = useStyles();
  const [cards, setCards] = useState(_cards);
  const handleClick = (e) => {
    e.preventDefault();
    setCards(cards.concat([..._cards]));
  }
  
  return (
    <Container className={classes.container}>
      <Box className={classes.cardsBox}>
        {cards.map((item, index) => (
          <div key={index} className={classes.content}>
            <CardItem
              id={item.id}
              image={item.image}
              date={item.date}
              title={item.title}
              description={item.description} />
            </div>
        ))}
      </Box>
      <Box className={classes.buttonBox}>
        <Button onClick={handleClick} variant="outlined" className={classes.button}>Meer nieuwsberichten</Button>
      </Box>
    </Container>
  );
};

export default Cards;