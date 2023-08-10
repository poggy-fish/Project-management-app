import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export const BasicCard = ({ title, description, image }) => {
    return (
        <Card sx={{ maxWidth: '400px', margin: '1rem 0', minHeight: '200px', padding: '0.5rem 1rem 0'}}>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body1" style={{ display: 'flex', flexWrap: 'wrap', padding: '1rem 0'}}>
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
    <Link href={link} target='_blank'>
      <Card sx={{ boxShadow: 'none', background: 'inherit', fontSize: '1.4rem'}}>
        <CardContent>
            {icon}
        </CardContent>
      </Card>
    </Link>
  );
};
