import "../../css/Components/Videos.css"
import { Box, Heading, Inset, Card, Text, Strong } from "@radix-ui/themes";

const Videos = () => {
  return (
    <div>
      <Heading
        size={"9"}
        style={{
          fontFamily: "MonumentExtendedReg",
        }}
        className="VideoHeading"
      >
        VIDEOS
      </Heading>

      <div
        style={{
          justifyContent: "center",
          margin: "auto",
          width: "60%",
        }}
        className="VideoListContainer"
      >
        <Box>
          <Card size="2">
            <Inset clip="padding-box" side="top" pb="current">
              <iframe
                src="https://www.youtube.com/embed/yMqo2zO2svs?si=xh5PbzntYbDlGYHM"
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: "350px",
                  backgroundColor: "var(--gray-5)",
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Typography</Strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </Text>
          </Card>
        </Box>
        <Box>
          <Card size="2">
            <Inset clip="padding-box" side="top" pb="current">
              <iframe
                src="https://www.youtube.com/embed/zG4HVAkr69U?si=LA589q2fp-2IzH1B"
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: "350px",
                  backgroundColor: "var(--gray-5)",
                }}
              />
            </Inset>
            <Text as="p" size="3">
              <Strong>Typography</Strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </Text>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default Videos;
