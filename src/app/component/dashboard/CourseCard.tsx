import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Use the stable Grid import
import Link from 'next/link';

export default function CourseCard() {
  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      justifyContent="space-between"
      sx={{ marginTop: '20px' }}
    >
      {/* First Card */}
      <Grid item xs={12} sm={4} md={3} lg={2}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              All Programs
            </Typography>
            <hr></hr>
            
          </CardContent>
        </Card>
      </Grid>

      {/* Second Card */}
      <Grid item xs={12} sm={4} md={3} lg={2}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="./example-image.svg" // Change the image source
            title="Desert lizard"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Desert Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Desert lizards are adapted to the harsh conditions of desert life,
              with unique adaptations that allow them to thrive in hot, arid environments.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
