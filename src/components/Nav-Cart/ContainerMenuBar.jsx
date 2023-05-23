import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import NavBar from "./NavBar";
import { ListMenuBar } from "./ListMenuBar";

const drawerWidth = 240;

export default function ContainerMenuBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = <ListMenuBar />;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <NavBar handleDrawerToggle={handleDrawerToggle} />

      <Drawer
        anchor="right"
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: "block",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            height: "auto",
            mt: { xs: 7, sm: 8 },
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

ContainerMenuBar.propTypes = {
  window: PropTypes.func,
};
