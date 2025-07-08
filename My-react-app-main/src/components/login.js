    import axios from 'axios';
    import React, {useState} from 'react';
    import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography } from '@mui/material';
    import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
    import Slider from 'react-slick';
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';
    import { useUserContext } from '../context/Usercontext';
    import {useNavigate} from 'react-router-dom';

    const Login = () => {
        const { setUsername } = useUserContext();
        const navigate = useNavigate();
        const [loginSuccess, setLoginSuccess] = useState(false);
    
        const handleLogin = async () => {
            const username = document.getElementById('uid').value;
            const password = document.getElementById('password').value;
    
            try {
                const response = await axios.post('/login', {
                    username,
                    password,
                });
    
                setUsername(response.data.username);
                setLoginSuccess(true);
                navigate('/dashboard')
            } catch (error) {
                console.error('Login failed:', error);
            }
        };

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const paperStyle = { padding: 20, width: 280, margin: '50px auto' };
    const avatarStyle = { backgroundColor: 'black' };
    const btnstyle = { margin: '10px 0px' };

    return (
        <Grid container direction="column" alignItems="center">
            <div style={{ width: '80%', maxWidth: '600px' }}>
                <Slider {...carouselSettings}>
                    <div>
                        <img src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg" alt="first" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg" alt="second" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg" alt="second" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div>
                        <img src="https://www.southernliving.com/thmb/xFlQn020pc1NJAl4ksr7_o_B5u4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-598083938-1-22dab883ff2a43d8b2751d9f363f2d5d.jpg" alt="second" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div>
                        <img
                            src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"
                            alt="third" loading="lazy"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </Slider>
            </div>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <PersonOutlineIcon />
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField id="uid" label="Username" placeholder="Enter Username" variant="outlined" required fullWidth />
                <TextField id="password" label="Password" placeholder="Enter Password" variant="outlined" type="password" required fullWidth />
                <FormControlLabel control={<Checkbox name="checkbox" color="primary" />} label="Remember me" />
                <Button type="submit" color="primary" fullWidth variant="contained" style={btnstyle} onClick={handleLogin} title="Login">
                    Sign In
                </Button>
                <Typography>
                    Forgot Password?
                </Typography>
            </Paper>
        </Grid>
        );
    };

    export default Login;