import "../../css/Pages/Home.css";
import Banner from "../../Components/Home/Banner";
import IconList from "../../Components/icon/IconList";
import YoutubeBanner from "../../Components/Home/YoutubeBanner";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          display: "table",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "table-cell",
            verticalAlign: "middle",
          }}
        >
          <Banner />
          {/* <Box
            sx={{
              padding: "50px",
            }}
          >
            <IconList />
          </Box> */}
          <Box
            sx={{
              paddingTop: "30px",
            }}
          >
            <YoutubeBanner />
          </Box>
        </div>
      </Box>
    </>
  );
};

export default HomePage;
