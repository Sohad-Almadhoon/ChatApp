import { Box } from "@mui/material";
import Post from "./Post";

function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post
        imgUrl={
          "https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/flavour-fun-box-of-4-pepsi.a28a6f0a935d6a0ac64e279abf9aafde.1.jpg"
        }
        name={"Ali Hasan"}
        logo="A"
      />
      <Post
        imgUrl={
          "https://rslvwm.s3.amazonaws.com/I/images/134079/photo/normal_Gordon_Stuart_-_nedlands-memorial-garden_-1-oct-2018.JPG"
        }
        name={"John Doe"}
        logo="J"
      />
      <Post
        imgUrl={
          "https://maryboroughopengardens.files.wordpress.com/2020/05/elizabeth-parks-rose-garden.jpg?w=1024"
        }
        name={"Aya Ali"}
        logo="A"
      />
      <Post
        imgUrl={
          "https://wp.inews.co.uk/wp-content/uploads/2022/07/GettyImages-1319681244-scaled.jpg?resize=640,360&strip=all&quality=90"
        }
        name={"Toqa Mohammed"}
        logo="T"
      />
      <Post
        imgUrl={
          "https://www.easterncollege.ca/uploads/2022/01/should-i-be-a-makeup-artist-2.jpg"
        }
        name={"Danial Jere"}
        logo="D"
      />
      <Post
        imgUrl={
          "https://www.beautycrew.com.au/media/51170/zendaya-oscars-makeup-l.jpg?width=1150"
        }
        name={"Monti Carlo"}
        logo="M"
      />
      <Post
        imgUrl={
          "https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/flavour-fun-box-of-4-pepsi.a28a6f0a935d6a0ac64e279abf9aafde.1.jpg"
        }
        name={"Ali Hasan"}
        logo="A"
      />
      <Post
        imgUrl={
          "https://wp.inews.co.uk/wp-content/uploads/2022/07/GettyImages-1319681244-scaled.jpg?resize=640,360&strip=all&quality=90"
        }
        name={"Toqa Mohammed"}
        logo="T"
      />
    </Box>
  );
}

export default Feed;
