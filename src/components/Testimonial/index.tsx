import { Avatar, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { TestimonialProps } from "./types";

export default function Testimonial({ name, text }: TestimonialProps) {
  return (
    <Stack width={"fit-content"} spacing={4}>
      <Flex
        backgroundColor={"rgba(217, 217, 217, 0.10)"}
        borderRadius={12}
        paddingY={4}
        paddingX={6}
        maxH={"15rem"}
        maxW={"30rem"}
        textAlign={"left"}
      >
        <Flex overflow={"auto"} paddingX={2}>
          <Text opacity={0.75} color={"white"} fontSize={["xs", "sm", "md"]}>
            “{text}”
          </Text>
        </Flex>
      </Flex>
      <HStack width={"fit-content"}>
        <Avatar size={"xs"} name={name} />
        <Text
          opacity={0.75}
          className="default-text"
          color={"white"}
          fontSize={["xs", "sm", "md"]}
          fontWeight={"black"}
        >
          {name}
        </Text>
      </HStack>
    </Stack>
  );
}
