import { Container, SvgIcon, Icon, Box } from "@mui/material";

// icons
import spotify from "../../css/icons/spotify.svg";
import tidal from "../../css/icons/tidal.svg";
import bandcamp from "../../css/icons/bandcamp.svg";
import instagram from "../../css/icons/instagram.svg";
import tiktok from "../../css/icons/tiktok.svg";
import youtube from "../../css/icons/youtube.svg";

const IconList = () => {
  return (
    <Container
      sx={{
        width: "40%",
        float: "right",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Icon>
          <img
            className="spotify"
            src={spotify}
            style={{
              height: "25px",
              width: "25px",
            }}
          />
        </Icon>
        <Icon>
          <img
            className="tidal"
            src={tidal}
            style={{
              height: "25px",
              width: "25px",
            }}
          />
        </Icon>
        <Icon>
          <img
            className="bandcamp"
            src={bandcamp}
            style={{
              height: "25px",
              width: "25px",
            }}
          />
        </Icon>
        <Icon>
          <img
            className="youtube"
            src={youtube}
            style={{
              height: "25px",
              width: "25px",
            }}
          />
        </Icon>
        <Icon>
          <img
            className="instagram"
            src={instagram}
            style={{
              height: "25px",
              width: "25px",
            }}
          />
        </Icon>
        <Icon>
          <img
            className="tiktok"
            src={tiktok}
            style={{
              height: "25px",
              width: "25px",
            }}
          />
        </Icon>
      </Box>
    </Container>
  );
};

export default IconList;
