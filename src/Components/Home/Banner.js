import "../../css/Components/Banner.css";
import Portrait from "../../Images/vbicon.png";
import albumArt from "../../Images/vagabondcovernotext.png";
import IconList from "../icon/IconList";

import {
  Typography,
  createTheme,
  ThemeProvider,
  Container,
  Box,
  Divider,
} from "@mui/material";

const Banner = () => {
  const theme = createTheme();

  theme.typography.h1 = {
    fontSize: "2.3rem",
    "@media (min-width:600px)": {
      fontSize: "2.8rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "5rem",
    },
  };

  theme.typography.h2 = {
    fontSize: "0.8rem",
    "@media (min-width:600px)": {
      fontSize: "1.0rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
  };

  return (
    <Container
    className="ParentBannerContainer"
    id="home"
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "row"
      }}
    >
      <Container
        className="albumArtParent"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
        }}
      >
        <Container
          className="albumArtContainer"
          style={{
            margin: "auto",
          }}
        >
          <Box
            style={{
              maxWidth: "100%",
              paddingTop: "20px",
            }}
          >
            <img
              src={albumArt}
              style={{
                width: "100%",
                boxShadow: "5px 5px 5px rgb(0, 0, 0)",
              }}
            />
          </Box>
          
        </Container>
      </Container>

      <Container
        className="BannerContainer"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Container
          className="BannerTextContainer"
          style={{
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Box>
            <ThemeProvider theme={theme}>
              <Typography
                className="vultureboy"
                variant="h1"
                sx={{
                  fontFamily: "MonumentExtendedReg",
                  letterSpacing: "5px",
                  wordWrap: "break-word",
                  textAlign: "start",
                }}
              >
                VULTUREBOY
              </Typography>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "AkiraExpanded",
                  textAlign: "middle",
                  fontSize: "1.5em !important",
                  paddingBottom: "5px",
                  paddingTop: "5px",
                }}
              >
                <span>
                  <span
                    style={{
                      fontSize: "1.3em",
                      fontStyle: "italic"
                    }}
                  >
                    "VAGABOND"
                  </span>{" "}
                </span>
              </Typography>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Typography
                className="vultureboy"
                variant="h3"
                sx={{
                  fontFamily: "MonumentExtendedReg",
                  letterSpacing: "10px",
                  wordWrap: "break-word",
                  textAlign: "middle",
                  fontSize: "1.1em !important",
                }}
              >
                OUT NOW
              </Typography>
            </ThemeProvider>
          </Box>
          <Divider variant="middle"></Divider>
          <Box id="tidalBox"
            sx={{
              padding: "15px",
            }}
          >
            <iframe id="tidalIframe" src="https://embed.tidal.com/albums/435773042" width="100%" height="152" allow="encrypted-media" sandbox="allow-same-origin allow-scripts allow-forms allow-popups" title="TIDAL Embed Player" />
          </Box>
          <Box sx={{
          
          }}>
            <IconList />
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default Banner;
