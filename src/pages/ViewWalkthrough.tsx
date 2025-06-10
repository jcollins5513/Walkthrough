import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import { Pannellum } from 'pannellum-react';

interface WalkthroughData {
  id: string;
  title: string;
  type: '360' | 'drone';
  url: string;
}

const ViewWalkthrough = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [walkthrough, setWalkthrough] = useState<WalkthroughData | null>(null);

  useEffect(() => {
    // Here you would fetch the walkthrough data from your backend
    // For now, we'll use mock data
    const mockData: WalkthroughData = {
      id: id || '1',
      title: 'Modern Office Building',
      type: '360',
      url: '/placeholder-360.jpg'
    };

    setWalkthrough(mockData);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!walkthrough) {
    return (
      <Container>
        <Typography variant="h5" color="error">
          Walkthrough not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {walkthrough.title}
      </Typography>

      <Box sx={{ height: '70vh', width: '100%', position: 'relative' }}>
        {walkthrough.type === '360' ? (
          <Pannellum
            width="100%"
            height="100%"
            image={walkthrough.url}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            onLoad={() => {
              console.log('panorama loaded');
            }}
            hotspotDebug={false}
          />
        ) : (
          <video
            controls
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src={walkthrough.url}
          />
        )}
      </Box>
    </Container>
  );
};

export default ViewWalkthrough; 