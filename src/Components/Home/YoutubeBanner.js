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
    <Container>
      <Container
        className="BannerContainer"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          
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
                paddingBottom: "30px",
              }}
            >
              STREAM 'LEVIATHAN' INSTRUMENTAL ON YOUTUBE
            </Typography>
          </ThemeProvider>
        </Box>

        <Container
          sx={{
            justifyContent: "center",
          }}
        >
          <Box>
            <iframe
              iframe
              width="100%"
              height="250px"
              style={{
                borderRadius: "20px",
                filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8))",
              }}
              src={`https://www.youtube.com/embed/EKxulLsrbqM?si=V3Z8UCJ6H-Sd377i`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default YoutubeBanner;
