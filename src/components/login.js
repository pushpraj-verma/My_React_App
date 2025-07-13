@@ .. @@
    const handleLogin = async () => {
        const username = document.getElementById('uid').value;
        const password = document.getElementById('password').value;

        // Simple validation for demo purposes
        if (username && password) {
            if (username === 'admin' && password === 'admin') {
                setUsername(username);
                setLoginSuccess(true);
                navigate('/dashboard');
            } else {
                alert('Invalid credentials. Use admin/admin to login.');
            }
        } else {
            alert('Please enter both username and password.');
        }
    };

                <Button type="submit" color="primary" fullWidth variant="contained" style={btnstyle} onClick={handleLogin} title="Login">
                    Sign In
                </Button>
                <Typography align="center" style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                    Demo credentials: admin / admin
                </Typography>
                <Typography align="center">
                    Forgot Password?
                </Typography>