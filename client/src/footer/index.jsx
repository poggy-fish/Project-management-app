import { Box, Typography } from "@mui/material"


const Footer = () => {
    return (
        <Box 
            sx={{
                background: '#1976d2', 
                color: '#fff', 
                minHeight: '150px',
                padding: '1rem 0 0 2.5rem',
                marginTop: '2rem',
            }}
        >
            <Box>
                <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5,}}>Taskflow</Typography>
            </Box>
        </Box>
    )
}

export default Footer;