import React from 'react';
import { Typography, Card, CardHeader, CardMedia, CardContent, Divider, List, ListItem, Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import models from '../../modelData/models';
import './styles.css';


function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);
  const user = models.userModel(userId);

  if (!user) return <Typography padding={2}>Đang tải...</Typography>;

  return (
    <Box padding={2}>
      <Typography variant="h4" gutterBottom>Ảnh của {user.first_name}</Typography>
      {photos.map((photo) => (
        <Card key={photo._id} style={{ marginBottom: '20px' }} variant="outlined">
          <CardHeader title={`Ngày đăng: ${photo.date_time}`} />
          <CardMedia
            component="img"
            image={require(`../../images/${photo.file_name}`)}
            alt="User photo"
            style={{ width: '100%', height: 'auto' }}
          />
          <CardContent>
            <Typography variant="h6">Bình luận:</Typography>
            <Divider style={{ margin: '10px 0' }} />
            {photo.comments ? (
              <List>
                {photo.comments.map((c) => (
                  <ListItem key={c._id} alignItems="flex-start" style={{ flexDirection: 'column', marginBottom: '10px' }}>
                    <Typography variant="subtitle2">
                      <Link to={`/users/${c.user._id}`} style={{ fontWeight: 'bold', textDecoration: 'none', color: '#1976D2' }}>
                        {c.user.first_name} {c.user.last_name}
                      </Link>
                      <span style={{ color: 'gray', marginLeft: '10px' }}>{c.date_time}</span>
                    </Typography>
                    <Typography variant="body2">{c.comment}</Typography>
                  </ListItem>
                ))}
              </List>
            ) : <Typography variant="body2">Chưa có bình luận nào.</Typography>}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default UserPhotos;