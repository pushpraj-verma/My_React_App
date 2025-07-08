import Grid from '@mui/material/Grid';
import React from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { useUserContext } from '../context/Usercontext';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Avatar } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'

const drawerWidth = 240;

function Dboard() {
    const { user } = useUserContext();
    const { username} = user;

    console.log('Username:', username);

    return (
        <Grid container style={{ paddingTop: '64px' }}>
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar variant='regular'>
          <Typography variant="h5" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
        <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: 'black' }}>
                            <AdminPanelSettingsIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={username} />
                </ListItem>
                <Divider />
                <ListItem component={Link} to="/customer">
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: 'black' }}>
                            <PeopleOutlineIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Customers" />
                </ListItem>
                <ListItem component={Link} to="/product">
                    <ListItemAvatar>
                        <Avatar style={{ backgroundColor: 'black' }}>
                            < ProductionQuantityLimitsIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Products" />
                </ListItem> 
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Grid item xs>
            <div>
                <h1 style={{ fontSize: '50px', color: 'black' }}>Welcome {username}</h1>
            </div>
        </Grid>
        </Box>
        </Box>
    </Grid>

    );
}

export default Dboard;