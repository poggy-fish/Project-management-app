import { Box, Typography, useMediaQuery } from "@mui/material";
import { shadows } from '@mui/system';
import FlexBetween from "../../components/FlexBetween";
import illustration from '../../media/illustration.png';
import illustrationVideo from '../../media/illustration.mp4';

const HomePage = () => {
    const isMobile = useMediaQuery('(min-width: 600px)');
    const isWideScreen = useMediaQuery('(min-width: 2000px)')

    return (
        <Box sx={{ padding: '0.75rem', background: '#f5f9ff' }}>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: isWideScreen ? 'center' : 'space-between',
                gap: isWideScreen ? '1rem' : isMobile ? '0.5rem' : '1rem',
                alignItems: 'center',
            }}>
                <Box>
                    <Typography variant='h1' sx={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                    }}>
                        Taskflow
                    </Typography>
                    <Typography variant='h4'>
                                Your Solution for Effortless 
                                Task and Team Management!
                            </Typography>
                </Box>
                <Box>
                    {/* <img src={illustration} alt='Illustration' width='100%' /> */}
                    <video autoPlay muted style={{ width: '700px'}}>
                    <source src={illustrationVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Box>
            </Box>

            <Typography>
                Discover the perfect way to streamline tasks 
                and collaborate effectively. Whether you're 
                a small business or an individual, 
                TaskFlow simplifies your work, 
                keeping you organized and in sync. 
                Get started today and revolutionize 
                your approach to productivity.
            </Typography>
            {/* CALL TO ACTION LINK */}
            <Typography>
                Start Managing Better with TaskFlow!
            </Typography>
        </Box>
    )
}

export default HomePage;