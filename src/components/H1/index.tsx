import { Heading, HeadingProps } from "@chakra-ui/react";

export default function H1(props: HeadingProps) {
  return (
    <Heading
    color={'white.500'}  
    fontWeight="bold"
      letterSpacing={"1%"}
      lineHeight={"125%"}
      {...props}

    >
      {props.children}
    </Heading>
  );
}
