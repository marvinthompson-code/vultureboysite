import { Margin } from "@mui/icons-material";
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
        className="YoutubeBanner"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{
            position: "absolute"

        }}>
          <ThemeProvider theme={theme}>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "MonumentExtendedReg",
                textAlign: "start",
                wordBreak: "break-word",
                width: "100%",
                position: "relative",
                top: "-50%"
              }}
            >
              STREAM 'LEVIATHAN' INSTRUMENTAL ON YOUTUBE
            </Typography>

          </ThemeProvider>
        </Box>

       
          <Box
            className="YoutubeContainer"
            style={{
              width: "80%",
              padding: "10px"
            }}
          >
            <iframe
              iframe
              width="100%"
              height="400"
              style={{
                borderRadius: "20px",
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
  );
};

export default YoutubeBanner;
