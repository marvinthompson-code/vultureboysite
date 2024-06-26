import "../../css/Pages/Home.css";
import Banner from "../../Components/Home/Banner";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="bannerContainer">
        <Banner />
        <div
          style={{
            width: "85%",
            textAlign: "right",
          }}
        >
          <Link to={"/projects"} id="viewProjects">
            VIEW PROJECTS
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
