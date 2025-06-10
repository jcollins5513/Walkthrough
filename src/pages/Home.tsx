import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Walkthrough {
  id: string;
  title: string;
  thumbnail: string;
  type: '360' | 'drone';
}

const mockWalkthroughs: Walkthrough[] = [
  {
    id: '1',
    title: 'Modern Office Building',
    thumbnail: '/placeholder-360.jpg',
    type: '360'
  },
  {
    id: '2',
    title: 'Residential Complex',
    thumbnail: '/placeholder-drone.jpg',
    type: 'drone'
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Available Walkthroughs
      </Typography>
      <Grid container spacing={3}>
        {mockWalkthroughs.map((walkthrough) => (
          <Grid item xs={12} sm={6} md={4} key={walkthrough.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={walkthrough.thumbnail}
                alt={walkthrough.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {walkthrough.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Type: {walkthrough.type === '360' ? '360° View' : 'Drone Footage'}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={() => navigate(`/view/${walkthrough.id}`)}
                >
                  View Walkthrough
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home; 