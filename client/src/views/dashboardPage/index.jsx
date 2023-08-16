import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import FlexBetween from "../../components/FlexBetween";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SendIcon from "@mui/icons-material/Send";
import HomeIcon from "@mui/icons-material/Home";
import BadgeIcon from "@mui/icons-material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../state/index";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import UserImage from "../../components/UserImage";
import WorkIcon from "@mui/icons-material/Work";
import illustration from "../../media/illustration.png";
import { Tasks } from "../../components/DashboardComponents";
import { TeammatesCards } from "../../components/Card";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const { userId } = useParams();
    const currentUser = useSelector((state) => state.user);

    const getUser = async () => {
        const response = await fetch(`http://localhost:3100/user/${userId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setUser(data);
        console.log(data);
    };
    useEffect(() => {
        getUser();
    }, []);

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = (e) => {
        dispatch(setLogout());
    };

    const userFullName = `${currentUser.firstName} ${currentUser.lastName}`;

    return (
        <Box sx={{ display: "flex", minHeight: "90vh", background: "#0f1925" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ background: "#0f1925" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/dashboard"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            fontWeight: "bold",
                        }}
                    >
                        TASKFLOW
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {["Home", "Dashboard", "Tasks", "Invite"].map(
                        (text, index) => (
                            <ListItem
                                key={text}
                                disablePadding
                                sx={{ display: "block" }}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open
                                            ? "initial"
                                            : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {index === 0 ? (
                                            <HomeIcon
                                                sx={{ color: "#0f1925" }}
                                            />
                                        ) : index === 1 ? (
                                            <DashboardIcon
                                                sx={{ color: "#0f1925" }}
                                            />
                                        ) : index === 2 ? (
                                            <AssignmentIcon
                                                sx={{
                                                    color: "#0f1925",
                                                    fontSize: "1.5rem",
                                                }}
                                            />
                                        ) : index === 3 ? (
                                            <SendIcon
                                                sx={{ color: "#0f1925" }}
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={text}
                                        sx={{ opacity: open ? 1 : 0 }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )
                    )}
                </List>
                {/* LOGOUT ICON  */}
                <Divider />
                <List>
                    {["Logout"].map((text, index) => (
                        <ListItem
                            key={text}
                            disablePadding
                            sx={{ display: "block" }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    <LogoutIcon
                                        onClick={handleLogout}
                                        sx={{ color: "#0f1925" }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: "0 0.25rem" }}>
                <DrawerHeader />
                <Box sx={{ color: "#fff", mt: "-3.8rem" }}>
                    {/* LEFT SIDE OF DASHBOARD */}
                    <Box
                        sx={{
                            padding: "0.25rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.25rem",
                        }}
                    >
                        <Box
                            width="20rem"
                            sx={{
                                background: "#00000061",
                                padding: "0.5rem",
                                boxShadow: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.75rem"
                            }}
                        >
                            <Typography fontWeight="bold" fontSize="1.2rem" p="0.25rem 0" >
                                User intro
                            </Typography>
                            <img
                                src={illustration}
                                width="100"
                                style={{ borderRadius: "50%" }}
                            />
                            <Box sx={{ display: "flex", gap: "0.5rem" }}>
                                <BadgeIcon />
                                <Typography fontWeight="bold">
                                    {currentUser.firstName}{" "}
                                    {currentUser.lastName}
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", gap: "0.5rem" }}>
                                <WorkIcon />
                                <Typography fontWeight="bold">
                                    {currentUser.title}
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", gap: "0.5rem" }}>
                                <WorkIcon />
                                <Typography fontWeight="bold">
                                    {currentUser.location}
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", gap: "0.5rem" }}>
                                <AssignmentIcon />
                                <Typography fontWeight="bold">
                                    {" "}
                                    Tasks {Tasks.length}
                                </Typography>
                            </Box>
                        </Box>

                        {/* USER TEAMMATES */}
                        <Box
                            width="20rem"
                            height= "22rem"
                            sx={{
                                background: "#00000061",
                                padding: "0.5rem",
                                overflowY: 'scroll',
                            }}
                        >
                            <Typography fontWeight="bold" fontSize="1.2rem" p="0.25rem 0">My Teammates</Typography>
                            <Box width="18rem" sx={{display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                              <TeammatesCards 
                                link="none" 
                                name={userFullName}
                                image={illustration}
                                title={currentUser.title} 
                              />
                              <TeammatesCards 
                                link="none" 
                                name={userFullName}
                                image={illustration}
                                title={currentUser.title} 
                              />
                              <TeammatesCards 
                                link="none" 
                                name={userFullName}
                                image={illustration}
                                title={currentUser.title} 
                              />
                              <TeammatesCards 
                                link="none" 
                                name={userFullName}
                                image={illustration}
                                title={currentUser.title} 
                              />
                              <TeammatesCards 
                                link="none" 
                                name={userFullName}
                                image={illustration}
                                title={currentUser.title} 
                              />
                              <TeammatesCards 
                                link="none" 
                                name={userFullName}
                                image={illustration}
                                title={currentUser.title} 
                              />
                            </Box>
                        </Box>
                         {/* USER Tasks */}
                         <Box
                            width="20rem"
                            height= "22rem"
                            sx={{
                                background: "#00000061",
                                padding: "0.5rem",
                                overflowY: 'scroll',
                            }}
                        >
                            <Typography fontWeight="bold" fontSize="1.2rem" p="0.25rem 0">My  Active Tasks</Typography>
                            <Box width="18rem" sx={{display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                              <TeammatesCards 
                                link="none" 
                                name={userFullName}
                                image={illustration}
                                title={currentUser.title} 
                              />
                              <TeammatesCards 
                                link="none" 
                                name={userFullName}
                                image={illustration}
                                title={currentUser.title} 
                              />
                              <TeammatesCards 
                                link="none" 
                                name={userFullName}
                                image={illustration}
                                title={currentUser.title} 
                              />
                              <TeammatesCards 
                                link="none" 
                                name={userFullName}
                                image={illustration}
                                title={currentUser.title} 
                              />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
