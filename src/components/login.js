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