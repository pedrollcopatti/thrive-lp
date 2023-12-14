import { Button, Flex, HStack } from "@chakra-ui/react";
import Paragraph from "../Paragraph";

export default function Header(){
    return(
        <HStack zIndex={999} bgColor={'black.500'} top={0} position={'sticky'} justifyContent={'space-between'} paddingX={20} width={'100%'} height={24}>
        <Flex borderRadius={0} bgColor={'orange.500'} padding={2}>
          <Paragraph color={'white.500'} fontWeight={'bold'} fontSize={'md'}>
            Thrive
          </Paragraph>
        </Flex>
        <HStack>
          <Button fontSize={'sm'}variant={'ghost'}>
            O QUE ENTREGAMOS
          </Button>
          <Button fontSize={'sm'}variant={'ghost'}>
            A THRIVE
          </Button>
          <Button fontSize={'sm'} colorScheme="orange" borderRadius={0} color={'white'}>
            FALAR COM A THRIVE
          </Button>
        </HStack>
    </HStack>
    )
}