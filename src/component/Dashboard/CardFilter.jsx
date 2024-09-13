import React from 'react'
import Card from 'react-bootstrap/Card';
import './card.css';

const CardFilter = () => {
  return (
    <div>
     <Card className="card-filter">
      <Card.Body className='card-body'>
        <Card.Title className='Filter-title'>Filter</Card.Title>
           <ul className='bullet-points'>
             <li>Today</li>
             <li>This month</li>
             <li>This Year</li>
           </ul> 
      </Card.Body>

     </Card>


    </div>
  )
}

export default CardFilter