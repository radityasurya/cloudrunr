import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const Header = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Cloudrunr
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
