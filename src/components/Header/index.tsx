import { Button, Flex, HStack } from "@chakra-ui/react";

import logo from '@assets/logo.png';
import Image from "next/image";
import { Link } from "react-scroll";

export default function Header(){
    return(
        <HStack zIndex={999} bgColor={'black.500'} top={0} position={'sticky'} justifyContent={'space-between'} paddingX={20} width={'100%'} height={24}>
        <Flex width={16} >
          <Image alt="logo" src={logo}/>
        </Flex>
        <HStack>
          <Link to="entrega" smooth offset={-24}>
          <Button fontSize={'sm'}variant={'ghost'}>
            O QUE ENTREGAMOS
          </Button></Link>
          <Link to="thrive" smooth offset={-150}>
          <Button fontSize={'sm'}variant={'ghost'}>
            A THRIVE
          </Button>
          </Link>
          <Button
            _hover={{
              background: 'orange.500'
            }}
            borderRadius={8}
            colorScheme="orange"
            background={'linear-gradient(92deg, #D94B00 0%, #FF5800 50.52%, #BE4200 100%)'}
            color={"white.500"}
            backgroundColor={'orange.500'}
            fontWeight={'bold'}
          >
            FALAR COM A THRIVE
          </Button>
        </HStack>
    </HStack>
    )
}