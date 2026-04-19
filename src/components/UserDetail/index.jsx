import React from 'react';
import { Typography, Button, Card, CardContent, Divider, Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import models from '../../modelData/models';
import './styles.css';

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId); // Lấy trực tiếp từ file models.js

  if (!user) return <Typography padding={2}>Không tìm thấy người dùng!</Typography>;

  return (
    <Box padding={2}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3" gutterBottom color="primary">
            {user.first_name} {user.last_name}
          </Typography>
          <Divider style={{ marginBottom: '20px' }} />
          <Typography variant="h6">Vị trí: {user.location}</Typography>
          <Typography variant="h6">Nghề nghiệp: {user.occupation}</Typography>
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            <strong>Mô tả:</strong> {user.description}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`/photos/${userId}`}
            style={{ marginTop: '30px' }}
          >
            Xem ảnh của {user.first_name}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserDetail;