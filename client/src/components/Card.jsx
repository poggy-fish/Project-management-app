import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Link } from "@mui/material";
import { Box, Typography, useMediaQuery } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Tasks } from "./DashboardComponents";
import FlexBetween from "./FlexBetween";

export const BasicCard = ({ title, description, image }) => {
  const isMobile = useMediaQuery("(max-width: 550px)");
  const isWideScreen = useMediaQuery("(min-width: 1790px)");
  return (
    <Card
      sx={{
        maxWidth: isWideScreen ? "550px" : isMobile ? "100%" : "425px",
        margin: "0.5rem 0",
        minHeight: "200px",
        padding: "0.5rem 1rem 0",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body1"
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "1rem 0",
          }}
        >
          {description}
        </Typography>
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="illustration"
        />
      </CardContent>
    </Card>
  );
};

export const SocialIconsCard = ({ icon, link }) => {
  return (
    <Link href={link} target="_blank">
      <Card
        sx={{
          boxShadow: "none",
          background: "inherit",
          fontSize: "1.4rem",
        }}
      >
        <CardContent>{icon}</CardContent>
      </Card>
    </Link>
  );
};

export const TeammatesCards = ({ profilePic, fullName, userTitle  }) => {
  const [tasks, setTasks] = useState();
  const [tasksErr, setTasksErr] = useState();
  const currentUser = useSelector((state) => state.user);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const userFullName = `${currentUser.firstName} ${currentUser.lastName}`;

  const getTasks = async () => {
      try {
        const response = await fetch("http://localhost:3100/posts", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error(` There are no tasks: ${error}`);
        setTasksErr(error);
      }
    };
  
    useEffect(() => {
      getTasks();
    }, []);


return (
  <Box
        sx={{
          // background: "#00000061",
          background: "#212e3f",
          borderRadius: "5px",
          padding: " 0.5rem 1rem",
          boxShadow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.75rem",
          margin: "0rem",
        }}
      >
        {/* USER PROFILE */}
        {
          profilePic = currentUser.picturePath ? ( 
            <img
              src={currentUser.picturePath}
              width="60"
              style={{ borderRadius: "5px" }}
            />
          ) : (
            <FlexBetween> 
              <AccountBoxIcon 
                sx={{ 
                  fontSize: 100, 
                  color: "#6a798952",
                  mt: "-0.3rem",
                  mb: "-0.5rem",
                }}
              /> 
              {/* <EditIcon/> */}
            </FlexBetween>
          )
        }
        {/* <UserImage image={ currentUser.picturePath } /> */}
        <Box sx={{ display: "flex-column", alignItems: "end", gap: "0.3rem" }}>
          <Typography fontWeight="900" fontSize="0.85rem">
            { fullName = userFullName }
          </Typography>
          <Typography fontWeight="500" fontSize="0.8rem">
            { userTitle = currentUser.title }
          </Typography>
        </Box>
      </Box>
  )
};
