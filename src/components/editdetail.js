import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const btnstyle = { margin: '20px 10px' };

const EditDetail = () => {
  const { id } = useParams(); // Get the ID from the route parameter
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState({});
  const [updatedData, setUpdatedData] = useState({});

  const handleSave = () => {
    console.log('Updated Data:', updatedData);
    // For demo purposes, just show success message and navigate back
    alert('Customer data updated successfully!');
    navigate('/customer');
  };

export default handleSave