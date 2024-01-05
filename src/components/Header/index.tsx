import { Button, Flex, HStack, useMediaQuery } from "@chakra-ui/react";

import logo from "@assets/logo.svg";
import Image from "next/image";
import { Link } from "react-scroll";
import { goTo } from "@/utils";

export default function Header() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  if (isLargerThan1000) {
    return (
      <HStack
        zIndex={999}
        bgColor={"black.500"}
        top={0}
        position={"sticky"}
        justifyContent={"space-between"}
        paddingX={24}
        width={"100%"}
        height={24}
      >
        <Flex width={36}>
          <Image alt="logo" src={logo} />
        </Flex>
        <HStack>
          <Link to="entrega" smooth offset={-24}>
            <Button
              zIndex={1200}
              _hover={{ backgroundColor: "black.50" }}
              color={"white"}
              fontSize={"sm"}
              variant={"ghost"}
            >
              O QUE ENTREGAMOS
            </Button>
          </Link>
          <Link to="thrive" smooth offset={-150}>
            <Button
              zIndex={1200}
              _hover={{ backgroundColor: "black.50" }}
              color={"white"}
              fontSize={"sm"}
              variant={"ghost"}
            >
              A THRIVE
            </Button>
          </Link>
          <Button
            zIndex={1200}
            _hover={{
              background: "orange.500",
            }}
            borderRadius={8}
            colorScheme="orange"
            background={
              "linear-gradient(92deg, #D94B00 0%, #FF5800 50.52%, #BE4200 100%)"
            }
            color={"white.500"}
            backgroundColor={"orange.500"}
            fontWeight={"bold"}
            onClick={() =>
              goTo(
                "https://api.whatsapp.com/send?phone=555581188765&text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações,%20pode%20me%20ajudar"
              )
            }
          >
            FALAR COM A THRIVE
          </Button>
        </HStack>
      </HStack>
    );
  }

  return (
    <HStack
      zIndex={999}
      bgColor={"black.500"}
      top={0}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      height={24}
    >
      <Flex width={36}>
        <Image alt="logo" src={logo} />
      </Flex>
    </HStack>
  );
}
