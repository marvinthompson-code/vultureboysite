import { NavLink } from "react-router-dom";
import { TabNav } from "@radix-ui/themes";

const Nav = () => {
  return (
    <>
      <TabNav.Root>
        <TabNav.Link href="/" active>
          Home
        </TabNav.Link>
        <TabNav.Link href="/projects">Projects</TabNav.Link>
        <TabNav.Link href="contact">Contact</TabNav.Link>
      </TabNav.Root>
    </>
  );
};

export default Nav;
