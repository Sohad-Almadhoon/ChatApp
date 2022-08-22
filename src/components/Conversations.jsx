import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function AlignItemsList() {
  return (
    <List sx={{ width: "100%" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://i.pinimg.com/736x/ec/e9/f9/ece9f9ae1c6e1faadef9b9b72df6f82a.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Aya Hassan"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Trevor Henderson"
            src="https://wpage.in/wp-content/uploads/2021/08/1630202943_255_Best-2021-DP-For-Instagram-For-Girl-%E2%80%93-Best-Profile.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          primary=" Toqqa Mohammed"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Agnes Walker"
            src="https://i0.wp.com/freehindiwishes.com/wp-content/uploads/2020/10/Best-DP-For-Instagram-For-Girl-2.jpg?resize=400%2C400/static/images/avatar/4.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          primary=" Shams Ali"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
