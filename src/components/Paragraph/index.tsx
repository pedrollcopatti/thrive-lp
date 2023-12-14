import { Text, TextProps } from "@chakra-ui/react";

export default function Paragraph(props: TextProps) {
  return (
    <Text color={'whiteAlpha.700'} letterSpacing={"1%"} lineHeight={"125%"} {...props}>
      {props.children}
    </Text>
  );
}
