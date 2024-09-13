import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import './card.css';
import CardFilter from './CardFilter';

const CardCustom = () => {
   const [filter,setFilter]=useState(null)
   const handlerFilter = (index) => {
    setFilter(prefilter=>(prefilter===index?null:index))
  };
  return (
    <div className='d-flex gap-3'>

      {
        [0,1,2].map(index=>(
       
      <Card className='cardCustom w-100' key={index}>
        <Card.Body>
          <div className='d-flex justify-content-between title'>
            <Card.Title className='card-title'>Sales | <span>Today</span></Card.Title>
            <HiOutlineDotsHorizontal style={{cursor:'pointer'}} onClick={()=>handlerFilter(index)} />
          </div>
          <div className='info-card'>
            <div className='card-icon-bg'>
              <FaShoppingCart className='card-icon' />
            </div>
            <div>
              <h6>145</h6>
              <span className='text-success small fw-bold pt-1'>
                12% <span className='text-muted small pt-2 ps-1'>increase</span>
              </span>
            </div>
            {
               filter=== index ? <CardFilter /> : ""
            }
          </div>
        </Card.Body>
      </Card>
        ))
      }

      {/* <Card className='cardCustom w-100'>
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title className='card-title'>Sales | <span>Today</span></Card.Title>
            <HiOutlineDotsHorizontal style={{cursor:'pointer'}} onClick={()=>handlerFilter(2)} />
          </div>
          <div className='info-card'>
            <div className='card-icon-bg'>
              <FaShoppingCart className='card-icon' />
            </div>
            <div>
              <h6>145</h6>
              <span className='text-success small fw-bold pt-1'>
                12% <span className='text-muted small pt-2 ps-1'>increase</span>
              </span>
            </div>
            {
              filter?<CardFilter />:""

            }
          </div>
        </Card.Body>
      </Card>

      <Card className='cardCustom w-100'>
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title className='card-title'>Sales | <span>Today</span></Card.Title>
            <HiOutlineDotsHorizontal style={{cursor:'pointer'}} onClick={()=>handlerFilter(3)} />
          </div>
          <div className='info-card'>
            <div className='card-icon-bg'>
              <FaShoppingCart className='card-icon' />
            </div>
            <div>
              <h6>145</h6>
              <span className='text-success small fw-bold pt-1'>
                12% <span className='text-muted small pt-2 ps-1'>increase</span>
              </span>
            </div>
            {
              filter?<CardFilter />:""

            }
          </div>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default CardCustom;
