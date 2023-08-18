import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import { useMediaQuery } from "@mui/material";

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

export const TeammatesCards = ({ name, link, image, title }) => {
  const isMobile = useMediaQuery("(max-width: 550px)");
  const isWideScreen = useMediaQuery("(min-width: 1790px)");
  return (
    <Link href={link} sx={{ textDecoration: "none" }}>
      <Card
        sx={{
          width: "8.87rem",
          margin: "0",
          height: "10rem",
          padding: "0.0rem",
        }}
      >
        <CardContent>
          <CardMedia component="img" width="80px" image={image} alt="user" />
          <Typography fontWeight="500" fontSize="0.95rem">
            {name}
          </Typography>
          <Typography fontSize="0.8rem">{title}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
