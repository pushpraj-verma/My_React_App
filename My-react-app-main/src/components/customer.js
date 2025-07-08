import React, { useState, useEffect } from 'react';
import { Edit } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Grid, IconButton } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios for HTTP requests

const btnstyle = { margin: '20px 10px' };

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch data from companies.json using Axios
    axios.get('/companies.json')
      .then(response => {
        // Once data is fetched, set it in the state
        setCustomers(response.data);
      })
      .catch(error => {
        console.error('Error fetching customers:', error);
      });
  }, []); // Empty dependency array to fetch data only once

  return (
    <Grid style={{ marginLeft: '20px' }}>
      <Button variant="contained" color="primary" style={btnstyle} component={Link} to="/dashboard">
        Back
      </Button>
      <h2>Customer's List</h2>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {customers.map(customer => (
          <React.Fragment key={customer.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: 'black' }}>
                  <PersonOutlineIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={customer.name} />
              <IconButton component={Link} to={`/editdetail/${customer.id}`} aria-label="more" size="large">
                <Edit fontSize="inherit" />
              </IconButton>
              <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Grid>
  );
}

export default CustomerList;
