import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { shadows } from '@mui/system';
import FlexBetween from "../../components/FlexBetween";
import illustration from '../../media/illustration.png';
import illustrationVideo from '../../media/illustration.mp4';

const HomePage = () => {
    const isMobile = useMediaQuery('(max-width: 600px)');
    const isWideScreen = useMediaQuery('(min-width: 2000px)');

    return (
        <Box sx={{ padding: '0.5rem 1.5rem', background: '#f5f9ff' }}>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: isWideScreen ? 'center' : 'space-between',
                gap: isWideScreen ? '1rem' : isMobile ? '0.5rem' : '1rem',
                alignItems: 'center',
            }}>
                {/* HOMEPAGE TITLE AND SUBTITLE */}
                <Box>
                    <Typography variant='h1' sx={{
                        fontSize: isMobile ? '2rem' : '2.7rem',
                        fontWeight: 'bold',
                        mt: isMobile ? '1.5rem' : '3rem',
                        mb: '0.5rem',
                    }}>
                        Taskflow
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
                        {/* CALL TO ACTION BUTTON */}
                        <Button variant='contained' href='#' size="large"sx={{ mt: '1rem', p: '1rem'}}>
                            Start managing
                        </Button>
                    </Box>
                </Box>
                {/* VIDEO ILLUSTRATION */}
                <Box>
                    <video autoPlay muted loop style={{ width: isMobile ? '100%' : '700px'}}>
                    <source src={illustrationVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;