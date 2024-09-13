import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ReportsCharts from './ReportsCharts';
import CardFilter from './CardFilter';

const Reports = () => {
    const[Dropdown, setDropdown]=useState(false)
  return (
    <div>
         <Card className='mt-3 w-100'>
              <Card.Body>
              <div className='d-flex justify-content-between title'>
            <Card.Title className='card-title'>Reports <span>   / Today</span></Card.Title>
            <HiOutlineDotsHorizontal style={{cursor:'pointer'}} onClick={()=>setDropdown(!Dropdown)} />
           </div>
                {
                 Dropdown? <CardFilter />:""

                }
               <ReportsCharts />
              </Card.Body>
            </Card>

    </div>
  )
}

export default Reports