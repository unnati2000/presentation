import {
  Container,
  LeftActionsContainer,
  RightActionsContainer,
} from "./Navbar.styled";

import { Avatar, Menu, Input, Button, MenuItem } from "@mantine/core";

import { BsThreeDots } from "react-icons/bs";

import { SiVitess } from "react-icons/si";

const Navbar = () => {
  return (
    <Container>
      {/* group 1 */}
      <LeftActionsContainer>
        <SiVitess size={20} />

        <Input placeholder="School ppt..." />
      </LeftActionsContainer>

      {/* group 2 */}
      <RightActionsContainer>
        <Avatar.Group>
          <Avatar src="https://github.com/unnati2000.png" />
          <Avatar src="https://github.com/itsnitinr.png" />
          <Avatar>+</Avatar>
        </Avatar.Group>
        <Button variant="default" color="secondary">
          Present
        </Button>
        <Button>Share</Button>

        <Menu>
          <Menu.Target>
            <Button variant="outline" color="dark">
              <BsThreeDots />
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Download PDF</Menu.Item>
            <MenuItem>Download PNG</MenuItem>
          </Menu.Dropdown>
        </Menu>
      </RightActionsContainer>
    </Container>
  );
};

export default Navbar;
