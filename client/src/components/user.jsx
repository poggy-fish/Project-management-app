import * as React from "react";
import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TaskComponent from "./Task";

const UserComponent = ({ profilePic, fullName, userTitle, userLocation, userTasks }) => {
    const user = useSelector((state) => state.user);
    const assignedTasks = useSelector( (state) => state.user.tasks );
    const userFullName = `${user.firstName} ${user.lastName}`;
// MEDIA QUERRIES
    const isMobile = useMediaQuery("(max-width: 600px)");

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
            profilePic = user.picturePath ? ( 
              <img
                src={user.picturePath}
                width="100"
                style={{ borderRadius: "5px" }}
              />
            ) : (
              <Box> 
                <AccountBoxIcon 
                  sx={{ 
                    fontSize: isMobile ? 100 : 150, 
                    ml:isMobile ? "" : "-2.3rem", 
                    mt:isMobile ? "" : "1rem",
                    mb:isMobile ? "" : "-1rem",
                    color: "#6a798952" ,
                  }}
                /> 
                {/* <EditIcon/> */}
              </Box>
            )
          }
          {/* <UserImage image={ user.picturePath } /> */}
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
              <Typography fontWeight="300" variant="p">{ fullName = userFullName }</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <WorkOutlineIcon />
              <Typography fontWeight="300" variant="p">{ userTitle = user.title }</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <LocationOnOutlinedIcon />
              <Typography fontWeight="300" variant="p">{ userLocation = user.location}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <AssignmentOutlinedIcon />
              <Typography fontWeight="300" variant="p"> Tasks: { userTasks = assignedTasks.length }</Typography>
            </Box>
            </Box>
        </Box>
    )
}

export default UserComponent;