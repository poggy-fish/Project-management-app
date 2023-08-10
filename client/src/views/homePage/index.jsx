import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { shadows } from '@mui/system';
import FlexBetween from "../../components/FlexBetween";
import illustrationVideo from '../../media/illustration.mp4';
import { services } from "../../objects";
import BasicCard from "../../components/Card";

const HomePage = () => {
    const isMobile = useMediaQuery('(max-width: 500px)');
    const isWideScreen = useMediaQuery('(min-width: 2000px)');

    return (
        <Box sx={{ padding: isMobile ? '1rem' : '3rem 3rem 1rem', background: '#f5f9ff' }}>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: isMobile ? 'column-reverse' : '',
                justifyContent: isWideScreen ? 'center' : 'space-between',
                gap: isWideScreen ? '5rem' : '0.2rem',
                alignItems: 'center',
            }}>
                {/* HOMEPAGE TITLE AND SUBTITLE */}
                <Box sx={{ maxWidth: '625px'}}>
                    <Typography variant='h1' sx={{
                        fontSize: isMobile ? '1.8rem' : '2.5rem',
                        fontWeight: 'bold',
                        mt: isMobile ? '1.5rem' : '3rem',
                        mb: '0.5rem',
                    }}>
                        Welcome to Taskflow
                    </Typography>
                    <Typography variant='h4' sx={{
                        fontSize: isMobile ? '1.5rem' : '1.8rem',
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
                        <Box sx={{ display: 'flex', gap: 3, mt: '1.5rem'}}>
                            <Button variant='outlined' href='#' size="large" sx={{ mt: '1rem', p: '0.7rem', minWidth: '9rem',}}>
                                Sign in
                            </Button>
                            <Button variant='outlined' href='#' size="large" sx={{ mt: '1rem', p: '0.7rem', minWidth: '9rem',}}>
                                Register
                            </Button>
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