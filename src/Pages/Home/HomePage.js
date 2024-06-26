import "../../css/Pages/Home.css";
import Banner from "../../Components/Home/Banner";
import { Flex, Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="bannerContainer">
        <Banner />
        <Flex
          align="center"
          gap="3"
          style={{
            justifyContent: "center",
          }}
        >
          <Button
            variant="outline"
            color="gray"
            highContrast={true}
            style={{
              fontFamily: "MonumentExtendedReg",
            }}
          >
            VIDEOS
          </Button>
          <Button
            variant="outline"
            color="gray"
            highContrast={true}
            style={{
              fontFamily: "MonumentExtendedReg",
            }}
          >
            PHOTOS
          </Button>
        </Flex>
      </div>
    </>
  );
};

export default HomePage;
