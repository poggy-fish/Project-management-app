import { Typography, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export const UserInfo = () => {
  const isWideScreen = useMediaQuery("(min-width: 1800px)");
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

  if (!currentUser) return null;

  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: "2rem",
          mb: "2rem",
          mt: "-3.4rem",
          background: "#fff",
          p: "2rem 0.5rem",
          borderRadius: "0.75rem",
          textAlign: "center",
          boxShadow: 1,
        }}
      >
        Welcome to your dasboard
      </Typography>
    </>
  );
};