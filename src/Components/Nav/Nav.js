import { NavLink } from "react-router-dom";
import { TabNav } from "@radix-ui/themes";

const Nav = () => {
  return (
    <>
      <TabNav.Root>
        <TabNav.Link href="#" active>
          Account
        </TabNav.Link>
        <TabNav.Link href="#">Documents</TabNav.Link>
        <TabNav.Link href="#">Settings</TabNav.Link>
      </TabNav.Root>
    </>
  );
};

export default Nav;
