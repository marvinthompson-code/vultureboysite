import { TabNav } from "@radix-ui/themes";
import "../../css/Components/Nav.css";

const Nav = () => {
  return (
    <>
      <TabNav.Root>
        <TabNav.Link href="/" className="NavLinkTab" active>
          HOME
        </TabNav.Link>
        <TabNav.Link href="/projects" className="NavLinkTab">
          PROJECTS
        </TabNav.Link>
        <TabNav.Link href="/contact" className="NavLinkTab">
          CONTACT
        </TabNav.Link>
      </TabNav.Root>
    </>
  );
};

export default Nav;
