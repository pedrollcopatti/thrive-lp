import { Flex } from "@chakra-ui/react";

export default function Texture() {
  return (
    <Flex
      position={"absolute"}
      pointerEvents={"none"}
      zIndex={1200}
      id="noise"
      width={"100%"}
      height={"100%"}
      opacity={0.5}
    />
  );
}
