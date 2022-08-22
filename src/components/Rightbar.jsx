import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import AlignItemsList from "./Conversations";

function Rightbar() {
  return (
    <Box flex={3} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box  width={300} position="fixed">
        <Typography variant="h6" fontWeight={200} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup total={24} max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://i.pinimg.com/736x/ec/e9/f9/ece9f9ae1c6e1faadef9b9b72df6f82a.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images-na.ssl-images-amazon.com/images/I/819nmWETo8L.png"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://i0.wp.com/freehindiwishes.com/wp-content/uploads/2020/10/Best-DP-For-Instagram-For-Girl-2.jpg?resize=400%2C400/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://wpage.in/wp-content/uploads/2021/08/1630202943_255_Best-2021-DP-For-Instagram-For-Girl-%E2%80%93-Best-Profile.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://i0.wp.com/freehindiwishes.com/wp-content/uploads/2020/10/Best-DP-For-Instagram-For-Girl-16.jpg?resize=400%2C400"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://www.stylevore.com/wp-content/uploads/2020/02/74800261_425399008340385_7662258244743186674_n.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://wpage.in/wp-content/uploads/2021/08/1630202943_255_Best-2021-DP-For-Instagram-For-Girl-%E2%80%93-Best-Profile.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={200} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList
          cols={3}
          rowHeight={100}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={200} mt={2} >
          Latest Conversation
        </Typography>
        <AlignItemsList/>
      </Box>
    </Box>
  );
}
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
];
export default Rightbar;
