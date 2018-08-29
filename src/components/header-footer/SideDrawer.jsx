import React from "react";

//Material Core
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("sidebar")}>
          Events Starts In
        </ListItem>

        <ListItem button onClick={() => console.log("sidebar")}>
          Venue Info
        </ListItem>

        <ListItem button onClick={() => console.log("sidebar")}>
          Hightlights
        </ListItem>

        <ListItem button onClick={() => console.log("sidebar")}>
          Pricing
        </ListItem>

        <ListItem button onClick={() => console.log("sidebar")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
