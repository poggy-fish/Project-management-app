import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";


const Dashboard = () => {
  const isAuth = Boolean(useSelector((state) => state.user)); //using state.user insteadof state.token for now to authorize login
  
    return (
        <Box>
            <Typography>

            </Typography>
        </Box>
    )
};

export default Dashboard;