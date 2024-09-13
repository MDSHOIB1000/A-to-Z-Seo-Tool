import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCircle } from "react-icons/fa6";
import CardCustom from '../../component/Dashboard/CardCustom';
import Reports from '../../component/Dashboard/Reports';
import CardFilter from '../../component/Dashboard/CardFilter';
import Register from '../Register/Register';
import ActivityCard from '../../component/Dashboard/ActivityCard';
import Table from '../../component/Dashboard/Table';

const Home = () => {

    const[Dropdown, setDropdown]=useState(false)
  return (
    <div className='dashboard'>
      <div>
        <h1 className='text-primary'>Dashboard</h1>
        <ol className='breadcrumb'>
          <li>
            Home / <span>Dashboard</span>
          </li>
        </ol>
      </div>
      <Container fluid className='container'>
        <Row>
        <Col lg={8}>
            {/* CardCustom component */}
            <CardCustom />

            {/* Reports Card with the same width as CardCustom */}
             <Reports />
             <Table />
          </Col>
          <Col lg={4}>
           <ActivityCard />
            <Register />

          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Home;
