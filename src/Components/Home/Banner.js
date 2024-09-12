import "../../css/Components/Banner.css";
import Portrait from "../../Images/vbicon.png";

import {
  Typography,
  createTheme,
  ThemeProvider,
  Container,
  Box,
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
    <Container>
      <Container
        className="BannerContainer"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          className="BannerImageContainer"
          style={{
            maxWidth: "500px",
          }}
        >
          <img
            src={Portrait}
            alt="Black and white portrait of Vultureboy"
            style={{
              objectFit: "cover",
              width: "100%",
              borderRadius: "var(--radius-2)",
              filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8))",
              borderRadius: "20px",
            }}
          />
        </Box>

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
                variant="h1"
                sx={{
                  fontFamily: "MonumentExtendedReg",
                  fontSize: 40,
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
                  fontFamily: "MonumentExtendedReg",
                  textAlign: "start",
                }}
              >
                <span>'EGODETH | LEVIATHAN' - OUT NOW</span>
              </Typography>
            </ThemeProvider>
          </Box>

          <Box>
            <iframe
              style={{
                borderRadius: "12px",
                filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8))",
              }}
              src="https://open.spotify.com/embed/album/78LeEbzpmYxoN7yHaD67af?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default Banner;
