import React, { useState } from 'react'
// import '//Client/src/pages/Home/Home.css'
import '../../pages/Home/Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCircle } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import CardFilter from './CardFilter';

const ActivityCard = () => {
    const[Dropdown, setDropdown]=useState(false)
  return (
    <div>
         <Card style={{ width: '100%' }} className='card'>
              <Card.Body>
                <div className='d-flex justify-content-between'>
                  <Card.Title className='card-title'>Recent Activity | <span>Today</span></Card.Title>
                  <HiOutlineDotsHorizontal style={{cursor:"pointer"}} onClick={()=>setDropdown(!Dropdown)} />
                </div>
                {
                 Dropdown? <CardFilter />:""

                }
                 <div className='activity'>
                  {/* Activity Items */}
                  <div className='activity-item d-flex'>
                    <div className='activate-label'><span>32 min</span></div>
                    <FaCircle className='activity-badge text-success align-self-start' />
                    <Card.Text className='activity-content'>
                      Quia quae rerum explicabo officiis beatae
                    </Card.Text>
                  </div>
                  <div className='activity-item d-flex'>
                    <div className='activate-label'><span>56 min</span></div>
                    <FaCircle className='activity-badge text-danger align-self-start' />
                    <Card.Text className='activity-content'>
                      Voluptatem blanditiis blanditiis eveniet
                    </Card.Text>
                  </div>
                  <div className='activity-item d-flex'>
                    <div className='activate-label'><span>2 hours</span></div>
                    <FaCircle className='activity-badge text-primary align-self-start' />
                    <Card.Text className='activity-content'>
                      Voluptates corrupti molestias voluptatem
                    </Card.Text>
                  </div>
                  <div className='activity-item d-flex'>
                    <div className='activate-label'><span>1 day</span></div>
                    <FaCircle className='activity-badge align-self-start' style={{ color: "pink" }} />
                    <Card.Text className='activity-content'>
                      Tempore autem saepe occaecati voluptatem tempore
                    </Card.Text>
                  </div>
                  <div className='activity-item d-flex'>
                    <div className='activate-label'><span>2 days</span></div>
                    <FaCircle className='activity-badge text-warning align-self-start' />
                    <Card.Text className='activity-content'>
                      Est sit eum reiciendis exercitationem
                    </Card.Text>
                  </div>
                  <div className='activity-item d-flex'>
                    <div className='activate-label'><span>4 weeks</span></div>
                    <FaCircle className='activity-badge text-dark align-self-start' />
                    <Card.Text className='activity-content'>
                      Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                    </Card.Text>
                  </div>
                </div>               
              </Card.Body>
            </Card>

    </div>
  )
}

export default ActivityCard