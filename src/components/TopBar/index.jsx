import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import models from '../../modelData/models';

function TopBar() {
  const location = useLocation();
  const path = location.pathname;
  let contextText = "";

  // Logic để xác định nội dung hiển thị bên phải TopBar
  if (path.includes("/users/")) {
    const userId = path.split("/")[2];
    const user = models.userModel(userId);
    if (user) contextText = `${user.first_name} ${user.last_name}`;
  } else if (path.includes("/photos/")) {
    const userId = path.split("/")[2];
    const user = models.userModel(userId);
    if (user) contextText = `Photos of ${user.first_name} ${user.last_name}`;
  }

  return (
    <AppBar position="absolute">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Bên trái: Tên của bạn */}
        <Typography variant="h6" color="inherit">
          Lê Huy Hải
        </Typography>

        {/* Bên phải: Ngữ cảnh dựa trên trang đang xem */}
        <Typography variant="h6" color="inherit">
          {contextText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;