import React, { useState } from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  Box,
  Chip,
  IconButton
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const btnstyle = { margin: '20px 10px' };

const initialProducts = [
  {
    id: 'PRD1',
    name: 'Wireless Headphones',
    price: '$99.99',
    category: 'Electronics',
    stock: 25,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'PRD2',
    name: 'Smart Watch',
    price: '$199.99',
    category: 'Electronics',
    stock: 15,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'PRD3',
    name: 'Coffee Maker',
    price: '$79.99',
    category: 'Appliances',
    stock: 8,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 'PRD4',
    name: 'Laptop Stand',
    price: '$49.99',
    category: 'Accessories',
    stock: 30,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300'
  }
];

function ProductList() {
  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== productId));
      alert('Product deleted successfully!');
    }
  };

  const getStockColor = (stock) => {
    if (stock > 20) return 'success';
    if (stock > 10) return 'warning';
    return 'error';
  };

  return (
    <Grid style={{ marginLeft: '20px', marginRight: '20px' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Button variant="contained" color="primary" style={btnstyle} component={Link} to="/dashboard">
          Back to Dashboard
        </Button>
        <Button variant="contained" color="success" startIcon={<Add />} style={btnstyle}>
          Add New Product
        </Button>
      </Box>
      
      <Typography variant="h4" gutterBottom>
        Product Inventory
      </Typography>
      
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Category: {product.category}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  {product.price}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="body2">
                    Stock:
                  </Typography>
                  <Chip 
                    label={product.stock} 
                    color={getStockColor(product.stock)}
                    size="small"
                  />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <IconButton color="primary" size="small">
                    <Edit />
                  </IconButton>
                  <IconButton 
                    color="error" 
                    size="small"
                    onClick={() => handleDelete(product.id)}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default ProductList;