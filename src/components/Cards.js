import React from 'react';
import Card from './Card';

const Cards = ( {robots} ) => {
  const robotsMap = robots.map(robot => <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>)
  return (
    <div>
      {robotsMap}
    </div>
  )
}



export default Cards;
