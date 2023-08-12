import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { services } from "../../objects";
import { useState } from "react";
import illustrationVideo from '../../media/illustration.mp4';
import { BasicCard } from "../../components/Card";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../state/index';

const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isMobile = useMediaQuery('(max-width: 550px)');
    const isSmallestScreen = useMediaQuery('(max-width: 300px)');
    const isWideScreen = useMediaQuery('(min-width: 2000px)');
    const [showSignIn, setshowSignIn] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const displaySignIn = () => {
        if (!showSignIn) setshowSignIn(true);
        if (showSignIn) setshowSignIn(false);
        setShowRegister(false);
    }

    const displayRegister = () => {
        if (!showRegister) setShowRegister(true);
        if (showRegister) setShowRegister(false);
        setshowSignIn(false);
    }

    // GET FORM DATA
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        title: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    // HANDLE REGISTRATION
    const handleRegistration = async (event) => {
        event.preventDefault(); // Prevent default form submission
    
        try {
            const response = await fetch('http://localhost:3100/register', {
                method: 'POST',
                body: JSON.stringify(formData), // Convert formData to JSON
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) {
                const savedUser = await response.json();
                setIsSubmit(true);
                setShowRegister(false)
                setshowSignIn(true);
            } else {
                // Handle error (if needed)
                console.error('Registration failed');
            }
        } catch (error) {
            console.error(`Registration failed, error: ${error}`);
        }
    };

    // HANDLE SIGN IN
    const handleSignIn = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3100/login', {
                method: 'POST',
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) {
                const loggedIn = await response.json();
                if (loggedIn) {
                    dispatch(
                        setLogin({
                            user: loggedIn.user,
                            token: loggedIn.token,
                        })
                    );
                    navigate("/dashboard");
                }
            } else {
                console.error('Could not sign in');
            }
        } catch (error) {
            console.error('Could not sign in', error);
        }
    };




    return (
        <Box sx={{ padding: isMobile ? '1rem' : '3rem 3rem 1rem', background: '#f5f9ff' }}>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: isMobile ? 'column-reverse' : '',
                justifyContent: isWideScreen ? 'center' : 'space-between',
                gap: isWideScreen ? '20rem' : '0.2rem',
                alignItems: 'center',
            }}>
                {/* HOMEPAGE TITLE AND SUBTITLE */}
                <Box sx={{ maxWidth: '625px'}}>
                    <Typography variant='h1' sx={{
                        fontSize: isMobile ? '1.6rem' : '2.5rem',
                        fontWeight: 'bold',
                        mt: isMobile ? '1.5rem' : '3rem',
                        mb: '0.5rem',
                    }}>
                        Welcome to Taskflow
                    </Typography>
                    <Typography variant='h4' sx={{
                        fontSize: isMobile ? '1.35rem' : '1.8rem',
                        fontWeight: '300',
                    }}>
                        Your Solution for Effortless 
                        Task and Team Management
                    </Typography>

                    {/* DESCRIPTION AND CALL TO ACTION */}
                    <Box sx={{ maxWidth: '900px', mt: '2rem' }}>
                        <Typography style={{ fontSize: '1.15rem', fontWeight: '300' }}>
                            Discover the perfect way to streamline tasks 
                            and collaborate effectively. Whether you're 
                            a small business or an individual, 
                            TaskFlow simplifies your work, 
                            keeping you organized and in sync. 
                        </Typography>
                        {/* CALL TO ACTION & SIGN IN BUTTON */}
                        <Box sx={{ display: 'flex', gap: 3, mt: '1.5rem', mb: 0, pb: 0, ml: '0.5rem'}}>
                            <Button 
                                variant='outlined' 
                                size={ isSmallestScreen ? "small" : "large"} 
                                sx={{ 
                                    mt: '1rem', 
                                    mb: '0.5rem', 
                                    p: isSmallestScreen ? '0.45rem' : '0.7rem', 
                                    minWidth: isSmallestScreen ? '6.5rem' : '9rem',
                                }}
                                onClick={displaySignIn}
                            >
                                Sign in
                            </Button>
                            <Button 
                                variant='outlined' 
                                size={ isSmallestScreen ? "small" : "large" } 
                                sx={{ 
                                    mt: '1rem', 
                                    mb:'0.5rem', 
                                    p: isSmallestScreen ? '0.45rem' : '0.7rem', 
                                    minWidth: isSmallestScreen ? '6.5rem' : '9rem',
                                }}
                                onClick={displayRegister}
                            >
                                Register
                            </Button>
                        </Box>
                        {/* SIGN IN FORM */}
                        <Box
                            component="form"
                            sx={{
                              '& .MuiTextField-root': { m: 1, ml: 1, width: '30ch' },
                              display: !showSignIn ? 'none' : 'flex',
                              flexDirection: 'column',
                              mb: '2rem',
                              mt: '1rem',
                            }}
                            autoComplete="on"
                            onSubmit={handleSignIn}
                        >
                            <TextField required id="outlined-required email" name="email" label="Email" type="email"  onChange={handleChange}/>
                            <TextField id="outlined-password-input password" name="password" label="Password" type="password" autoComplete="current-password" onChange={handleChange}/>
                            <Button variant="contained" type="submit" size="large" sx={{ maxWidth: '7.5rem', p: '0.75rem 0', mt: '0.4rem', ml: 1,}}>Sign in</Button>
                        </Box>
                        {/* REGISTRATION FORM */}
                        <Box
                            component="form"
                            sx={{
                              '& .MuiTextField-root': { m: 1, ml: 1, width: '30ch' },
                              display: !showRegister ? 'none' : 'flex',
                              flexDirection: 'column',
                              mb: '2rem',
                              mt: '1rem',
                            }}
                            autoComplete="on"
                            onSubmit={handleRegistration}
                        >
                            <TextField required id="outlined-required" name="firstName" label="First name"  onChange={handleChange} value={ isSubmit ? '' : null } />
                            <TextField required id="outlined-required" name="lastName" label="Last name" onChange={handleChange} value={ isSubmit ? '' : null } />
                            <TextField id="outlined" label="Title" onChange={handleChange} value={ isSubmit ? '' : null } />
                            <TextField required id="outlined-required" name="userName" label="Username" onChange={handleChange} value={ isSubmit ? '' : null } />
                            <TextField required id="outlined-required" name="email" label="Email" type="email" onChange={handleChange} value={ isSubmit ? '' : null } />
                            <TextField required id="outlined-password-input" name="password" label="Password" type="password" autoComplete="current-password" onChange={handleChange} value={ isSubmit ? '' : null } />
                            <TextField required id="outlined-password-input" name="confirmPassword" label="Confirm Password" type="password" autoComplete="current-password" onChange={handleChange} value={ isSubmit ? '' : null } />
                            <Button variant="contained" name="submit" type="submit" size="large" sx={{ maxWidth: '7.5rem', p: '0.75rem 0', mt: '0.4rem', ml: 1,}}>Register</Button>
                        </Box>
                    </Box>
                </Box>
                {/* VIDEO ILLUSTRATION */}
                <Box>
                    <video autoPlay muted loop style={{ width: isMobile ? '100%' : '650px'}}>
                    <source src={illustrationVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Box>
            </Box>
            {/* CARD COMPONENTS */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '0.2rem' : isWideScreen ? '5rem' : '1.5rem', justifyContent: isWideScreen ? 'center' : 'start'}}>
                {Object.keys(services).map((serviceKey => {
                    const service = services[serviceKey];
                    return (
                        <BasicCard title={service.title} description={service.description} image={service.img}/>
                    );
                 }))}
            </Box>
        </Box>
    );
};

export default HomePage;