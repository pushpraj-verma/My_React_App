import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Avatar } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

                    </ListItemAvatar>
                    <ListItemText primary="Products" />
                </ListItem> 
                <ListItem>
                    <Button 
                        variant="outlined" 
                        color="error" 
                        startIcon={<LogoutIcon />}
                        onClick={handleLogout}
                        fullWidth
                    >
                        Logout
                    </Button>
                </ListItem>
                <ListItem>
                    <Button 
                        variant="outlined" 
                        color="error" 
                        startIcon={<LogoutIcon />}
                        onClick={handleLogout}
                        fullWidth
                    >
                        Logout
                    </Button>
                </ListItem>
        </List>