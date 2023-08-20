import * as React from "react";
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

const UserComponent = ({ profilePic, fullName, userTitle, userLocation, userTasks }) => {
    const [tasks, setTasks] = useState();
    const [tasksErr, setTasksErr] = useState();
    const currentUser = useSelector((state) => state.user);
    const userFullName = `${currentUser.firstName} ${currentUser.lastName}`;
// MEDIA QUERRIES
    const isMobile = useMediaQuery("(max-width: 600px)");

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
        width={ isMobile ? "100%" : "19.5rem" }
        minHeight={ isMobile ? "auto" : "22rem" }
          sx={{
            // background: "#00000061",
            background: isMobile ? "inherit" : "#ffffff03",
            padding: isMobile ? "0.rem" : "1rem 0.5rem",
            boxShadow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
            margin: "0rem",
            boxShadow: isMobile ? 0 : 1,
            mb: isMobile ? "2rem" : "",
          }}
        >
          {/* USER PROFILE */}
          {
            profilePic = currentUser.picturePath ? ( 
              <img
                src={currentUser.picturePath}
                width="100"
                style={{ borderRadius: "5px" }}
              />
            ) : (
              <FlexBetween> 
                <AccountBoxIcon 
                  sx={{ 
                    fontSize: isMobile ? 150 : 365, 
                    ml:isMobile ? "" : "-2.3rem", 
                    mt:isMobile ? "" : "-2.5rem",
                    mb:isMobile ? "" : "-1.7rem",
                    color: "#6a798952" ,
                  }}
                /> 
                {/* <EditIcon/> */}
              </FlexBetween>
            )
          }
          {/* <UserImage image={ currentUser.picturePath } /> */}
          <Box 
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "0.5rem"
            }}
          >
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <PersonOutlineOutlinedIcon />
              <Typography fontWeight="500">{ fullName = userFullName }</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <WorkOutlineIcon />
              <Typography fontWeight="500">{ userTitle = currentUser.title }</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <LocationOnOutlinedIcon />
              <Typography fontWeight="500">{ userLocation = currentUser.location}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <AssignmentOutlinedIcon />
              <Typography fontWeight="500"> Tasks: { userTasks = Tasks.length }</Typography>
            </Box>
            </Box>
        </Box>
    )
}

export default UserComponent;