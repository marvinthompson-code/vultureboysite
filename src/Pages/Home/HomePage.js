import "../../css/Pages/Home.css";
import Banner from "../../Components/Home/Banner";
import IconList from "../../Components/icon/IconList";
import { Container, Box } from "@mui/material";

const HomePage = () => {
  return (
    <Container className="bannerContainer">
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
          <IconList />
        </div>
        
      </Box>
      
    </Container>
  );
};

export default HomePage;
