import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import lightLogo from "../assets/light.png";
import darkLogo from "../assets/dark.png";

const NavBar = () => {
  const logoSrc = useColorModeValue(darkLogo, lightLogo);
  return (
    <HStack padding="10px" justifyContent={"space-between"}>
      <Image src={logoSrc} boxSize="100px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
