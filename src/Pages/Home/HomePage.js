import { Button } from "@radix-ui/themes";
import Banner from "../../Components/Home/Banner";
const HomePage = () => {
  return (
    <div className="HomePageContainer">
      <Banner />
      <div>
        <Button size="2" color="gray" variant="outline">
          Projects
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
