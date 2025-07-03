import "../../css/Components/Banner.css";

import {
  Container,
  Box,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const YoutubeBanner = () => {
  const theme = createTheme();

  theme.typography.h1 = {
    fontSize: "2.2rem",
    "@media (min-width:600px)": {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3.5rem",
    },
  };

  theme.typography.h2 = {
    fontSize: "1.0rem",
    "@media (min-width:600px)": {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.2rem",
    },
  };

  return (
    <Container id="vagabondStream" style={{
      height: "100vh",
      display: "flex",
      flexDirection: "row",
      width: "100%"
    }}>
      <Container
        className="BannerContainer"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          margin: "auto"
        }}
      >
        <Box>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "MonumentExtendedReg",
                textAlign: "middle",
                wordBreak: "break-word",
                width: "100%",
                color: "black",
                paddingBottom: "10px",
                paddingTop: "10px"
              }}
            >
              <span
                style={{
                  fontFamily: "AkiraExpanded",
                  fontStyle: "italic",
                }}
              >
                VAGABOND
              </span>{" "}
              | FULL MIXTAPE STREAM
            </Typography>
          </ThemeProvider>
        </Box>

        <Container
          sx={{
            justifyContent: "center",
          }}
        >
          <Box className="videoBox">
            <iframe
              width="100%"
              height="747"
              src="https://www.youtube.com/embed/qztqqbERf9g"
              title="VAGABOND - VULTUREBOY [FULL MIXTAPE STREAM]"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default YoutubeBanner;
