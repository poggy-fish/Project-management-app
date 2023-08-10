import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import illustrationVideo from '../../media/illustration.mp4';
import { services } from "../../objects";
import BasicCard from "../../components/Card";
import TextField from '@mui/material/TextField';
import { useState } from "react";

const HomePage = () => {
    const isMobile = useMediaQuery('(max-width: 550px)');
    const isSmallestScreen = useMediaQuery('(max-width: 300px)');
    const isWideScreen = useMediaQuery('(min-width: 2000px)');
    const [showSignIn, setshowSignIn] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

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
                        {/* SIGN IN COMPONENT */}
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
                        >
                            <TextField required id="outlined-required" label="Email" />
                            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
                            <Button variant="contained" type="submit" size="large" sx={{ maxWidth: '7.5rem', p: '0.75rem 0', mt: '0.4rem', ml: 1,}}>Sign in</Button>
                        </Box>
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
                        >
                            <TextField required id="outlined-required" label="First name" />
                            <TextField required id="outlined-required" label="Last name" />
                            <TextField id="outlined" label="Title" />
                            <TextField required id="outlined-required" label="Username" />
                            <TextField required id="outlined-required" label="Email" />
                            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
                            <TextField id="outlined-password-input" label="Confirm Password" type="password" autoComplete="current-password"/>
                            <Button variant="contained" type="submit" size="large" sx={{ maxWidth: '7.5rem', p: '0.75rem 0', mt: '0.4rem', ml: 1,}}>Register</Button>
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
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '0.2rem' : isWideScreen ? '5rem' : '3rem', justifyContent: isWideScreen ? 'center' : 'start'}}>
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