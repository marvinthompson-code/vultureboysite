import { TabNav } from "@radix-ui/themes";
import "../../css/Components/Nav.css";

const Nav = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        width: "100%",
        zIndex: "1",
        backgroundColor: "white",
      }}
    >
      <TabNav.Root size="3" color="gray" highContrast>
        <TabNav.Link href="/" className="NavLinkTab">
          HOME
        </TabNav.Link>
        <TabNav.Link href="/videos" className="NavLinkTab">
          VIDEOS
        </TabNav.Link>
        <TabNav.Link href="/photos" className="NavLinkTab">
          PHOTOS
        </TabNav.Link>
        <TabNav.Link href="/contact" className="NavLinkTab">
          CONTACT
        </TabNav.Link>
      </TabNav.Root>
    </div>
  );
};

export default Nav;
