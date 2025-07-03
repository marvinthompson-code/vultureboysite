import { Container, Icon, Box } from "@mui/material";

import "../../css/Components/Icon.css";

// icons
import spotify from "../../css/icons/spotify.svg";
import apple from "../../css/icons/icons8-itunes.svg";
import bandcamp from "../../css/icons/bandcamp.svg";
import instagram from "../../css/icons/instagram.svg";
import tiktok from "../../css/icons/tiktok.svg";
import youtube from "../../css/icons/youtube.svg";

// window.open('https://vultureboylives.bandcamp.com/album/egodeth-leviathan','_blank')

const IconList = () => {
  return (
    <Container
      className="IconListContainer"
      sx={{
        width: "100%",
        float: "right",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Icon
          className="iconLink"
          onClick={() => {
            window.open(
              "https://open.spotify.com/artist/4ggcd1wjSJOo6hilDd2yJW?si=GHVsh4fuTY-r-DhRV0W-FA",
              "_blank"
            );
          }}
          sx={{
            overflow: "unset",
          }}
        >
          <img
            className="spotify"
            src={spotify}
            style={{
              width: "100%",
            }}
          />
        </Icon>

        <Icon
          className="iconLink"
          onClick={() => {
            window.open(
              "https://music.apple.com/us/album/vagabond/1814267124",
              "_blank"
            );
          }}
          sx={{
            overflow: "unset",
          }}
        >
          <img
            className="spotify"
            src={apple}
            style={{
              width: "100%",
            }}
          />
        </Icon>

        <Icon
          className="iconLink"
          onClick={() => {
            window.open(
              "https://vultureboylives.bandcamp.com/album/vagabond",
              "_blank"
            );
          }}
          sx={{
            overflow: "unset",
          }}
        >
          <img
            className="bandcamp"
            src={bandcamp}
            style={{
              width: "100%",
            }}
          />
        </Icon>
        <Icon
          className="iconLink"
          onClick={() => {
            window.open(
              "https://www.youtube.com/@VULTUREBOY.VAGABOND",
              "_blank"
            );
          }}
          sx={{
            overflow: "unset",
          }}
        >
          <img
            className="youtube"
            src={youtube}
            style={{
              width: "100%",
            }}
          />
        </Icon>
        <Icon
          className="iconLink"
          onClick={() => {
            window.open("https://www.instagram.com/_vultureboy", "_blank");
          }}
          sx={{
            overflow: "unset",
          }}
        >
          <img
            className="instagram"
            src={instagram}
            style={{
              width: "100%",
            }}
          />
        </Icon>
        <Icon
          className="iconLink"
          onClick={() => {
            window.open(
              "https://www.tiktok.com/@vultureboy_vagabond",
              "_blank"
            );
          }}
          sx={{
            overflow: "unset",
          }}
        >
          <img
            className="tiktok"
            src={tiktok}
            style={{
              width: "100%",
            }}
          />
        </Icon>
      </Box>
    </Container>
  );
};

export default IconList;
