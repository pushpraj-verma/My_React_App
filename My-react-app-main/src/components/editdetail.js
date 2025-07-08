import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const btnstyle = { margin: '20px 10px' };

const EditDetail = () => {
  const { id } = useParams(); // Get the ID from the route parameter
  const [customerData, setCustomerData] = useState({});
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    // Fetch customer data based on the ID
    axios.get(`/companies.json`)
      .then(response => {
        const customer = response.data.find(customer => customer.id === id);
        console.log('Fetched Customer:', customer);
        if (customer) {
          setCustomerData(customer);
        } else {
          console.error('Customer not found');
        }
      })
      .catch(error => {
        console.error('Error fetching customer data:', error);
      });
  }, [id]); // Fetch data whenever the ID changes

  const handleSave = () => {
    console.log('Updated Data:', updatedData);
    // Send an HTTP PUT request to update the customer data
    axios.put(`/customer/${id}`, updatedData)
      .then(response => {
        console.log(response.data); // Log the response from the server
        // Navigate to the customer page
        window.location.href = '/customer';
      })
      .catch(error => {
        console.error('Error updating customer data:', error);
        // Handle the error (e.g., show an error message to the user)
      });
  };

  const handleChange = (field, value) => {
    // Update the updatedData state object with the new field value
    console.log('Field:', field, 'Value:', value);
    setUpdatedData({ ...updatedData, [field]: value });
  };

  return (
    <div style={btnstyle}>
      <h2>Edit Customer Details</h2>
      <TextField
        id="name"
        label="Name"
        placeholder="Name"
        variant="outlined"
        required
        fullWidth
        margin="dense"
        value={updatedData.name || customerData.name || ''}
        // Update the customer name in state when it changes
        onChange={(e) => handleChange('name', e.target.value)}
      />
      <TextField
        id="id"
        label="ID"
        placeholder="ID"
        variant="outlined"
        required
        fullWidth
        margin="dense"
        value={updatedData.id || customerData.id || ''}
        // Update the customer ID in state when it changes
        onChange={(e) => handleChange('id', e.target.value)}
      />
      <TextField
        id="industry"
        label="Industry"
        placeholder="Industry"
        variant="outlined"
        required
        fullWidth
        margin="dense"
        value={updatedData.industry || customerData.industry || ''}
        // Update the customer industry in state when it changes
        onChange={(e) => handleChange('industry', e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        style={btnstyle}
        type="button"
        onClick={handleSave}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={btnstyle}
        component={Link}
        to="/customer"
      >
        Cancel
      </Button>
    </div>
  );
};

export default EditDetail;
