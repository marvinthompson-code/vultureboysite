import "../../css/Components/Banner.css";
import { Text , Heading} from "@radix-ui/themes";
import Portrait from "../../Images/VBBLACK.jpg"

const Banner = () => {
  return (
    <>
      <div className="BannerImageContainer">
        <img
        src={Portrait}
          alt="Black and white portrait of Vultureboy"
          style={{
            objectFit: "cover",
            width: "70%",
            borderRadius: "var(--radius-2)"
          }}
        />
      </div>

      <div
        className="BannerTextContainer"
        style={{
          justifyContent: "center",
          margin: "auto",
          width: "70%",
        }}
      >
        <Heading
          size={"9"}
          style={{
            fontFamily: "MonumentExtendedReg",
            letterSpacing: "2px",
            fontSize: "4.5em",
          }}
        >
          VULTUREBOY
        </Heading>
        <Text
          size={"6"}
          style={{
            fontFamily: "MonumentExtendedReg",
            textAlign: "center"
          }}
        >
          ARTIST. VIDEO. PHOTOGRAPHY.
        </Text>
      </div>
    </>
  );
};

export default Banner;
