import React from 'react';
import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import models from '../../modelData/models'; // Quay lại dùng dữ liệu mẫu

function UserList() {
  const users = models.userListModel(); // Lấy trực tiếp từ file models.js

  return (
    <div>
      <Typography variant="h6" style={{ padding: '16px', fontWeight: 'bold' }}>
        Người dùng
      </Typography>
      <Divider />
      <List component="nav">
        {users.map((user) => (
          <React.Fragment key={user._id}>
            <ListItem button component={Link} to={`/users/${user._id}`}>
              <ListItemText primary={`${user.first_name} ${user.last_name}`} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default UserList;