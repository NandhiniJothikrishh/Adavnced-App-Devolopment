import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FoodService from './FoodService';
import { Pagination } from '@mui/lab';
import axios from 'axios';
import './Userpage.css';

const Home = () => {
  const nav = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [foods, setFood] = useState([]);
  const [defaultRowData, setDefaultRowData] = useState({
    id: '1',
    eventname: 'Concert',
    name: 'Nandhini',
    phone: '9976468459',
    date: '20/03/2024',
    nooftickets: '8'
  });

  useEffect(() => {
    getAllFoods();
  }, [currentPage, sortBy, sortOrder]);

  const getAllFoods = () => {
    axios.get(`http://localhost:8080/reservetable/${currentPage}/${itemsPerPage}/${sortBy}/${sortOrder}`).then((response) => {
      const { content, totalPages } = response.data;
      setFood(response.data);
      setTotalPages(totalPages);
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
  }

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const deleteFood = (foodId) => {
    if (window.confirm("Sure to Delete?")) {
      FoodService.deleteFood(foodId).then((response) => {
        getAllFoods();
      }).catch(error => {
        console.log(error);
      });
    }
  }

  const deleteAllFood = () => {
    if (window.confirm("Sure to Delete All Foods?")) {
      FoodService.deleteAllFood().then((response) => {
        getAllFoods();
      }).catch(error => {
        console.log(error);
      });
    }
  }

  const LogoutHandler = () => {
    nav("/home");
  }

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div id='contain'>
      <div id="container">
        <h1 className='heading'>The eVEnt TodAY</h1>

        <table id="table">
          <thead>
            <tr>
              <th onClick={() => handleSort('id')}>Id {sortBy === 'id' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
              <th onClick={() => handleSort('name')}>Event Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
              <th>Name</th>
              <th onClick={() => handleSort('quantity')}>Phone Number {sortBy === 'quantity' && (sortOrder === 'asc' ? '▲' : '▼')}</th>
              <th>Date</th>
              <th>nooftickets</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.content && foods.content.map(
              (food) => (
                <tr key={food.id}>
                  <td>{food.id}</td>
                  <td>{food.eventname}</td>
                  <td>{food.name}</td>
                  <td>{food.phone}</td>
                  <td>{food.date}</td>
                  <td>{food.nooftickets}</td>
                  <td>
                    <button onClick={() => deleteFood(food.id)}>Delete!</button>
                  </td>
                </tr>
              ))}
            {/* Default row with default values */}
            <tr>
              <td>{defaultRowData.id}</td>
              <td>{defaultRowData.eventname}</td>
              <td>{defaultRowData.name}</td>
              <td>{defaultRowData.phone}</td>
              <td>{defaultRowData.date}</td>
              <td>{defaultRowData.nooftickets}</td>
              <td>
                {/* Add button for your default row actions */}
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination className='page'
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
        <button id="logout" className='btn' onClick={LogoutHandler}>Back</button>
      </div>
    </div>
  )
}

export default Home;
