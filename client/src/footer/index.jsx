import { Box, Link, Typography } from "@mui/material";
import { socialIcons } from "../objects";
import { SocialIconsCard } from "../components/Card";

const Footer = () => {

    return (
        <Box 
            sx={{
                background: '#1976d2', 
                color: '#fff', 
                minHeight: '50px',
                padding: '1rem 0 0 2.5rem',
                marginTop: '2rem',
            }}
        >
            <Box>
                <Typography sx={{ fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', letterSpacing: 1.5,}}>Taskflow</Typography>
                <Box
                    sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: '0.5rem'}}
                >
                    {Object.keys(socialIcons).map((iconKey => {
                    const icon = socialIcons[iconKey];
                    return (
                        <SocialIconsCard icon={icon.icon} link={icon.link} />
                    );
                 }))}
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;