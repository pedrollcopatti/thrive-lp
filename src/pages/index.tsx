import Head from "next/head";
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaCircleChevronRight,
  FaCircleChevronDown,
} from "react-icons/fa6";
import { GiTreasureMap, GiBattleTank, GiEyeTarget } from "react-icons/gi";
import logo from "@assets/logo.svg";
import googlePartner from "@assets/google-partner.webp";
import metaBusiness from "@assets/meta-business.webp";
import metaCertified from "@assets/meta-certified.webp";
import mosaic from "@assets/mosaic.webp";
import H1 from "@/components/H1";
import Paragraph from "@/components/Paragraph";
import Header from "@/components/Header";
import Image from "next/image";
import { COMPANIES, PARTNERS } from "@/constants";
import ills from "@assets/illustration.svg";
import funil from "@assets/funil.webp";
import Texture from "@/components/Texture";
import puzzle from "@assets/puzzle.svg";
import chart from "@assets/chart.svg";
import { motion } from "framer-motion";
import { goTo } from "@/utils";

export default function Home() {
  const MotionBox = motion(Box);
  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  const MotionStack = motion(Stack);
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  return (
    <>
      <Head>
        <title>Thrive</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Garantimos que o seu time de vendas receba um caminhão de demanda, todos os dias e foque apenas no que realmente importa... vender."
        />
        <meta name="author" content="Thrive" />
        <meta
          name="keywords"
          content="marketing, consulting, thrive, leads, tráfego, demanda, conversão, inteligente, google, ads"
        />
        <meta httpEquiv="cache-control" content="public" />
        <meta name="generator" content="NextJS" />
        <meta name="rating" content="general" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Thrive - Geração de Leads para times comerciais"
        />
        <meta
          property="og:description"
          content="Garantimos que o seu time de vendas receba um caminhão de demanda, todos os dias e foque apenas no que realmente importa... vender."
        />
        <meta
          property="og:site_name"
          content={"Geração de Leads para times comerciais"}
        />
        <meta property="og:url" content="https://www.grupothrive.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <Texture />
      <Stack
        paddingX={[4, 2, 4, 6, 8, 12]}
        bgColor={"black.500"}
        width={"100%"}
      >
        <Header />
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          direction={isLargerThan1000 ? "row" : "column"}
          overflow={"hidden"}
          height={isLargerThan1000 ? "35rem" : "fit-content"}
          marginTop={isLargerThan1000 ? 0 : [24, 12, 12, 18]}
        >
          <MotionStack
            initial={{
              opacity: 0,
              x: -15,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.5,
                duration: 1,
              },
            }}
            alignItems={isLargerThan1000 ? "initial" : "center"}
            textAlign={isLargerThan1000 ? "initial" : "center"}
            paddingX={[4, 6, 8, 12, 18, 24]}
            spacing={isLargerThan1000 ? 6 : 8}
            width={isLargerThan1000 ? "45%" : "100%"}
          >
            <H1 fontSize={["2xl", "3xl", "3xl"]}>
              Geração de Leads <br /> para times comerciais
            </H1>
            <Paragraph
              fontSize={"md"}
              maxWidth={isLargerThan1000 ? "100%" : ["90%", "80%", "60%"]}
            >
              Garantimos que o seu time de vendas receba um{" "}
              <MotionText
                whileInView={{
                  color: ["#FFFFFFA3", "#FFF"],
                  transition: {
                    delay: 1,
                    duration: 1,
                  },
                }}
                as="span"
              >
                caminhão de demanda
              </MotionText>
              , todos os dias e foque apenas no que realmente importa...{" "}
              <MotionText
                whileInView={{
                  color: ["#FFFFFFA3", "#FFF"],
                  transition: {
                    delay: 1,
                    duration: 1,
                  },
                }}
                as="span"
              >
                {" "}
                vender.
              </MotionText>
            </Paragraph>
            <MotionButton
              initial={{
                opacity: 0,
                x: -15,
              }}
              viewport={{
                once: true,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 1,
                  duration: 1,
                },
              }}
              whileHover={{
                x: 10,
              }}
              _hover={{
                background: "orange.500",
              }}
              borderRadius={8}
              colorScheme="orange"
              size={["md", "md", "lg"]}
              border={"1px solid rgba(255, 255, 255, 0.50)"}
              background={
                "linear-gradient(92deg, #D94B00 0%, #FF5800 50.52%, #BE4200 100%)"
              }
              color={"white.500"}
              backgroundColor={"orange.500"}
              fontWeight={"bold"}
              maxWidth={"20rem"}
              onClick={() =>
                goTo(
                  "https://api.whatsapp.com/send?phone=555581188765&text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações,%20pode%20me%20ajudar"
                )
              }
            >
              RECEBER PROPOSTA EM 5 MIN
            </MotionButton>
          </MotionStack>
          <Flex
            maxW={isLargerThan1000 ? "45rem" : "100%"}
            marginTop={isLargerThan1000 ? -12 : [-12, -24, -32]}
            alignItems={"center"}
            justifyContent={"center"}
            paddingTop={12}
            width={isLargerThan1000 ? "60%" : ["100%", "85%"]}
            position={isLargerThan1000 ? "absolute" : "initial"}
            right={0}
          >
            <Image alt="illustration" src={ills} />
          </Flex>
        </Stack>
        <MotionStack
          initial={{
            opacity: 0,
            y: 10,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          marginTop={[6, 8, 12, 18, 24]}
          paddingX={[4, 6, 8, 12, 18, 24]}
          width={"100%"}
        >
          <Divider
            borderColor={"white.500"}
            borderWidth={0.5}
            borderRadius={"full"}
            marginBottom={12}
          />
          <H1 fontSize={["lg", "xl", "2xl", "3xl"]}>
            O Parceiro de Geração de Demanda <br />
            das marcas mais conhecidas:
          </H1>
          <Stack marginTop={8} spacing={12}>
            <Paragraph fontSize={["md", "lg", "xl"]}>
              Mais de 15 milhões gerenciados em mídia
            </Paragraph>
            <SimpleGrid
              width={"100%"}
              alignItems={"center"}
              spacing={6}
              columns={[2, 2, 4, 4, 4]}
            >
              {COMPANIES.map((comp, index) => (
                <Flex justifyContent={"center"} key={index}>
                  <Image
                    width={comp.w}
                    height={comp.h}
                    alt={`company-${index}`}
                    src={comp.img}
                  />
                </Flex>
              ))}
            </SimpleGrid>
          </Stack>
          <Divider
            marginTop={12}
            borderColor={"white.500"}
            borderWidth={0.5}
            borderRadius={"full"}
          />
        </MotionStack>
        <MotionStack
          initial={{
            opacity: 0,
            y: 10,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingX={[4, 6, 8, 12, 18, 24]}
          direction={isLargerThan1000 ? "row" : "column"}
          width={"100%"}
          marginTop={[6, 8, 12, 18, 24]}
          id="entrega"
        >
          <Stack spacing={6}>
            <Badge
              colorScheme="orange"
              backgroundColor={"#FF580050"}
              color={"orange.500"}
              width={"fit-content"}
              variant={"subtle"}
              fontSize={"sm"}
            >
              NOSSA METODOLOGIA
            </Badge>
            <H1 fontSize={["xl", "2xl", "3xl", "3xl"]} maxWidth={"30rem"}>
              Atraia, Envolva, Conquiste e Retenha. Conheça nosso FUNIL DE
              MARKETING INTELIGENTE
            </H1>
            <Paragraph fontSize={["sm", "md", "lg", "lg"]} maxWidth={"35rem"}>
              Se você deseja transformar visitantes em clientes fiéis, você está
              no lugar certo. No coração de nossa estratégia de sucesso está o
              Funil de Marketing, uma abordagem meticulosamente planejada para
              levar seus clientes em potencial em uma jornada emocionante e
              envolvente.
            </Paragraph>
            <Button
              zIndex={1200}
              _hover={{
                backgroundColor: "orange.500",
                color: "white",
              }}
              width={"fit-content"}
              variant={"ghost"}
              colorScheme="orange"
              alignItems={"center"}
              rightIcon={<FaCircleChevronRight />}
              onClick={() =>
                goTo(
                  "https://api.whatsapp.com/send?phone=555581188765&text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações,%20pode%20me%20ajudar"
                )
              }
            >
              Falar com a Thrive
            </Button>
          </Stack>
          <Flex
            maxW={"35rem"}
            marginTop={isLargerThan1000 ? -12 : -24}
            alignItems={"center"}
            justifyContent={"center"}
            paddingTop={12}
            width={isLargerThan1000 ? "50%" : "80%"}
          >
            <Image alt="funil" src={funil} />
          </Flex>
        </MotionStack>
        <MotionStack
          initial={{
            opacity: 0,
            y: 10,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingX={[4, 6, 8, 12, 18, 24]}
          direction={isLargerThan1000 ? "row-reverse" : "column"}
          width={"100%"}
          marginTop={[18, 24, 32]}
          id="thrive"
        >
          <Stack spacing={6}>
            <Badge
              colorScheme="orange"
              variant={"subtle"}
              backgroundColor={"#FF580050"}
              color={"orange.500"}
              width={"fit-content"}
              fontSize={"sm"}
            >
              THRIVE
            </Badge>
            <H1
              fontSize={["xl", "2xl", "3xl", "3xl"]}
              maxW={isLargerThan1000 ? "45rem" : "30rem"}
            >
              Somos a peça que falta no seu quebra-cabeça de marketing.
            </H1>
            <Paragraph fontSize={["sm", "md", "lg", "lg"]} maxWidth={"35rem"}>
              Quando você faz parceria com a Thrive, você obtém um esquadrão de
              crescimento personalizado de especialistas comprovados que
              entendem seu negócio e estão comprometidos em alcançar um
              crescimento rápido que aproveite todo o seu potencial. Somos uma
              equipe construída com base na crença de que, quando as pessoas e
              ideias certas se conectam, tudo é possível.
            </Paragraph>
            <Button
              zIndex={1200}
              _hover={{
                backgroundColor: "orange.500",
                color: "white",
              }}
              width={"fit-content"}
              variant={"ghost"}
              colorScheme="orange"
              rightIcon={<FaCircleChevronRight />}
              onClick={() =>
                goTo(
                  "https://api.whatsapp.com/send?phone=555581188765&text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações,%20pode%20me%20ajudar"
                )
              }
            >
              Falar com a Thrive
            </Button>
          </Stack>
          <Flex
            maxW={"35rem"}
            alignItems={"center"}
            justifyContent={"center"}
            paddingTop={12}
            marginTop={isLargerThan1000 ? 0 : 24}
            width={isLargerThan1000 ? "50%" : "100%"}
            position={"relative"}
          >
            <Flex left={-36} position={"absolute"}>
              <Image alt="puzzle" src={puzzle} />
            </Flex>
          </Flex>
        </MotionStack>
        <MotionStack
          initial={{
            opacity: 0,
            y: 10,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingX={[4, 6, 8, 12, 18, 24]}
          direction={isLargerThan1000 ? "row" : "column"}
          width={"100%"}
          marginTop={isLargerThan1000 ? 24 : 36}
        >
          <Stack spacing={6}>
            <H1
              fontSize={["xl", "2xl", "3xl", "3xl"]}
              maxW={isLargerThan1000 ? "40rem" : "30rem"}
            >
              Sem enrolação. Alto impacto. Nenhum centavo desperdiçado.
            </H1>
            <Paragraph fontSize={["sm", "md", "lg", "lg"]} maxWidth={"35rem"}>
              Estamos hiperfocados em aumentar sua receita. Aproveitamos o
              aprendizado de milhares de experimentos com marcas de sucesso para
              refinar o manual de crescimento que criamos para o seu negócio.
            </Paragraph>
          </Stack>
          <Flex
            maxW={"35rem"}
            alignItems={"center"}
            justifyContent={"center"}
            paddingTop={isLargerThan1000 ? 12 : 4}
            width={isLargerThan1000 ? "50%" : "80%"}
          >
            <Image alt="chart" src={chart} />
          </Flex>
        </MotionStack>
        <MotionStack
          initial={{
            opacity: 0,
            y: 10,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          marginTop={-16}
          width={"100%"}
          alignItems={"center"}
        >
          <MotionButton
            whileHover={{
              scale: 1.05,
            }}
            _hover={{
              background: "orange.500",
            }}
            borderRadius={8}
            colorScheme="orange"
            size={["sm", "md", "lg"]}
            border={"1px solid rgba(255, 255, 255, 0.50)"}
            background={
              "linear-gradient(92deg, #D94B00 0%, #FF5800 50.52%, #BE4200 100%)"
            }
            color={"white.500"}
            backgroundColor={"orange.500"}
            fontWeight={"bold"}
            maxWidth={"30rem"}
            onClick={() =>
              goTo(
                "https://api.whatsapp.com/send?phone=555581188765&text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações,%20pode%20me%20ajudar"
              )
            }
          >
            FALE COM UM ESPECIALISTA
          </MotionButton>
        </MotionStack>
        <MotionStack
          initial={{
            opacity: 0,
            y: 10,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          spacing={12}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={[16, 24, 32]}
          marginY={12}
        >
          <Stack spacing={6}>
            <H1 textAlign={"center"} fontSize={["xl", "2xl", "3xl", "3xl"]}>
              Início da sua jornada na Thrive
            </H1>
            <Paragraph
              textAlign={"center"}
              fontSize={["sm", "md", "lg", "lg"]}
              maxWidth={"40rem"}
            >
              A Thrive conta com profissionais que, além da alta qualidade de
              entrega, atuam com um número limitado de contas, oferecendo a
              atenção que você merece
            </Paragraph>
          </Stack>
          <Stack
            direction={isLargerThan1000 ? "row" : "column"}
            spacing={[4, 6, 8, 8, 12]}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <MotionBox
              initial={{
                opacity: 0,
                y: -10,
              }}
              viewport={{
                once: true,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                backgroundColor: ["#F45400", "#111111"],
                color: "white",
                transition: {
                  duration: 2,
                  delay: 0.5,
                },
              }}
              padding={8}
              borderRadius={12}
              textAlign={"initial"}
              minW={"18rem"}
            >
              <IconButton
                _hover={{
                  backgroundColor: "black.50",
                }}
                fontSize={56}
                aria-label="metodology"
                color={"white"}
                icon={<GiEyeTarget />}
                variant={"ghost"}
              />
              <Stack marginTop={16}>
                <H1 fontSize={["md", "lg", "xl", "2xl"]}>Diagnóstico</H1>
                <Paragraph fontSize={["sm", "md", "md", "md"]} maxW={"25rem"}>
                  Visão de negócio e definição de meta
                </Paragraph>
              </Stack>
            </MotionBox>
            <MotionBox
              initial={{
                opacity: 0,
                y: -10,
              }}
              viewport={{
                once: true,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                color: "white",
                transition: {
                  duration: 2,
                  delay: 1,
                },
              }}
            >
              {isLargerThan1000 ? (
                <FaCircleChevronRight color="white" size={24} />
              ) : (
                <FaCircleChevronDown color="white" size={24} />
              )}
            </MotionBox>
            <MotionBox
              initial={{
                opacity: 0,
                y: -5,
              }}
              viewport={{
                once: true,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                backgroundColor: ["#F45400", "#111111"],
                color: "white",
                transition: {
                  duration: 2,
                  delay: 2.5,
                },
              }}
              padding={8}
              borderRadius={12}
              textAlign={"initial"}
              minW={"18rem"}
            >
              <IconButton
                _hover={{
                  backgroundColor: "black.50",
                }}
                fontSize={56}
                aria-label="metodology"
                color={"white"}
                icon={<GiTreasureMap />}
                variant={"ghost"}
              />
              <Stack marginTop={16}>
                <H1 fontSize={["md", "lg", "xl", "2xl"]}>Plano de guerra</H1>
                <Paragraph fontSize={["sm", "md", "md", "md"]} maxW={"25rem"}>
                  Planejamento e definição de prazos
                </Paragraph>
              </Stack>
            </MotionBox>
            <MotionBox
              initial={{
                opacity: 0,
                y: -10,
              }}
              viewport={{
                once: true,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                color: "white",
                transition: {
                  duration: 2,
                  delay: 3,
                },
              }}
            >
              {isLargerThan1000 ? (
                <FaCircleChevronRight color="white" size={24} />
              ) : (
                <FaCircleChevronDown color="white" size={24} />
              )}
            </MotionBox>
            <MotionBox
              initial={{
                opacity: 0,
                y: -5,
              }}
              viewport={{
                once: true,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                backgroundColor: ["#F45400", "#111111"],
                color: "white",
                transition: {
                  duration: 2,
                  delay: 4.5,
                },
              }}
              padding={8}
              borderRadius={12}
              textAlign={"initial"}
              minW={"18rem"}
            >
              <IconButton
                _hover={{
                  backgroundColor: "black.50",
                }}
                fontSize={56}
                aria-label="metodology"
                color={"white"}
                icon={<GiBattleTank />}
                variant={"ghost"}
              />
              <Stack marginTop={16}>
                <H1 fontSize={["md", "lg", "xl", "2xl"]}>Campo de batalha</H1>
                <Paragraph fontSize={["sm", "md", "md", "md"]} maxW={"25rem"}>
                  Execução
                </Paragraph>
              </Stack>
            </MotionBox>
          </Stack>
        </MotionStack>
        <MotionStack
          initial={{
            opacity: 0,
            y: 10,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          align={"center"}
          justifyContent={"space-between"}
          direction={isLargerThan1000 ? "row" : "column"}
          paddingX={[4, 6, 8, 12, 18, 24]}
          width={"100%"}
          marginTop={[16, 24, 32]}
        >
          <Stack
            alignItems={"center"}
            textAlign={isLargerThan1000 ? "initial" : "center"}
            spacing={6}
            width={isLargerThan1000 ? "50%" : "100%"}
          >
            <H1
              fontWeight={"normal"}
              fontSize={["lg", "xl", "2xl", "3xl"]}
              maxW={"30rem"}
            >
              As parcerias e conhecimentos que impulsionam o seu crescimento
            </H1>
            <Paragraph fontSize={["sm", "md", "lg", "lg"]} maxW={"30rem"}>
              Somos parceiros das melhores plataformas, garantindo a eficiència
              do seu investimento que levarão a sua empresa para o próximo
              nível.
            </Paragraph>
          </Stack>
          {isLargerThan1000 && (
            <Flex width={"10%"} align={"center"} justifyContent={"center"}>
              <Box
                height={"12rem"}
                width={0.5}
                backgroundImage={
                  "linear-gradient(0deg, #F7931E 0%, rgba(247, 147, 30, 0.00) 0%, #F7931E 52.08%, rgba(247, 147, 30, 0.00) 100%);"
                }
              />
            </Flex>
          )}
          <SimpleGrid
            width={isLargerThan1000 ? "50%" : "100%"}
            alignItems={"center"}
            spacing={8}
            columns={3}
            marginTop={isLargerThan1000 ? 0 : 12}
          >
            {PARTNERS.map((comp, index) => (
              <Flex justifyContent={"center"} key={index}>
                <Image
                  width={comp.w}
                  height={comp.h}
                  alt={`company-${index}`}
                  src={comp.img}
                />
              </Flex>
            ))}
          </SimpleGrid>
        </MotionStack>
        <MotionStack
          initial={{
            opacity: 0,
            y: 10,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          marginTop={[16, 24, 32]}
          paddingX={[4, 6, 8, 12, 18, 24]}
          spacing={12}
          alignItems={"center"}
          width={"100%"}
        >
          <Badge
            fontSize={["md", "lg", "xl"]}
            paddingX={6}
            paddingY={2}
            borderRadius={4}
            backgroundColor={"#FF580050"}
            color={"orange.500"}
            width={"fit-content"}
          >
            ESTÚDIOS THRIVE
          </Badge>
          <Flex width={["100%", "100%", "90%", "80%", "80%"]}>
            <Image alt="moisac" src={mosaic} />
          </Flex>
        </MotionStack>
        <MotionStack
          initial={{
            opacity: 0,
            y: 10,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          marginTop={24}
          width={"100%"}
          alignItems={"center"}
        >
          <MotionButton
            whileHover={{
              scale: 1.05,
            }}
            _hover={{
              background: "orange.500",
            }}
            borderRadius={8}
            colorScheme="orange"
            size={["md", "lg"]}
            border={"1px solid rgba(255, 255, 255, 0.50)"}
            background={
              "linear-gradient(92deg, #D94B00 0%, #FF5800 50.52%, #BE4200 100%)"
            }
            color={"white.500"}
            backgroundColor={"orange.500"}
            fontWeight={"bold"}
            maxWidth={"30rem"}
            onClick={() =>
              goTo(
                "https://api.whatsapp.com/send?phone=555581188765&text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações,%20pode%20me%20ajudar"
              )
            }
          >
            FALE COM UM ESPECIALISTA
          </MotionButton>
        </MotionStack>
        <Stack
          alignItems={isLargerThan1000 ? "end" : "start"}
          direction={isLargerThan1000 ? "row" : "column"}
          justifyContent={"space-between"}
          paddingX={[4, 6, 8, 12, 18, 24]}
          marginTop={32}
          spacing={isLargerThan1000 ? 2 : 8}
        >
          <Stack spacing={6}>
            <Stack direction={isLargerThan1000 ? "row" : "column"} spacing={4}>
              <Image width={125} alt="logo" src={logo} />
              <Paragraph fontSize={"sm"} maxW={"25rem"}>
                Estamos sediados em Curitiba, com filial em Porto Alegre, mas
                você também pode encontrar nossa equipe em São Paulo, Rio de
                Janeiro e Fortaleza.
              </Paragraph>
            </Stack>
            <Stack>
              <Paragraph fontWeight={"bold"}>Nossos escritórios</Paragraph>
              <Paragraph fontSize={"xs"}>
                Curitiba (Matriz): R. Conselheiro Laurindo, 809 - Centro,
                Curitiba - PR.
              </Paragraph>
              <Paragraph fontSize={"xs"}>
                Porto Alegre: Av. Dolorez Alcaraz Caldas, 90 - 8º. Andar, Porto
                Alegre, Rio Grande do Sul
              </Paragraph>
              <Paragraph fontSize={"xs"}>
                Contato: contato@grupothrive.com
              </Paragraph>
            </Stack>
          </Stack>
          <Stack
            _hover={{ filter: "grayscale(0)" }}
            filter={"grayscale(1)"}
            alignItems={"end"}
          >
            <SimpleGrid columns={4} spacing={2} boxSize={"fit-content"}>
              <IconButton
                _hover={{
                  backgroundColor: "black.50",
                }}
                color={"white"}
                size={"lg"}
                variant={"ghost"}
                aria-label="instagram"
                icon={<FaInstagram />}
                onClick={() => goTo("https://www.instagram.com/grupo.thrive/")}
              />
              <IconButton
                _hover={{
                  backgroundColor: "black.50",
                }}
                color={"white"}
                size={"lg"}
                variant={"ghost"}
                aria-label="linkedin"
                icon={<FaLinkedinIn />}
                onClick={() =>
                  goTo("https://www.linkedin.com/company/thrivebr/mycompany/")
                }
              />
              <IconButton
                _hover={{
                  backgroundColor: "black.50",
                }}
                color={"white"}
                size={"lg"}
                variant={"ghost"}
                aria-label="yt"
                icon={<FaYoutube />}
                onClick={() => goTo("https://www.youtube.com/@GrupoThrive")}
              />
              <IconButton
                _hover={{
                  backgroundColor: "black.50",
                }}
                color={"white"}
                size={"lg"}
                variant={"ghost"}
                aria-label="spotify"
                icon={<FaSpotify />}
                onClick={() =>
                  goTo(
                    "https://open.spotify.com/playlist/1JpsOLuSwktfgvLHbnvSrY?si=d0a0e2e01f044c39"
                  )
                }
              />
            </SimpleGrid>
            <HStack>
              <Flex borderRadius={6} overflow={"hidden"}>
                <Image height={50} alt="googlePartner" src={googlePartner} />
              </Flex>
              <Flex borderRadius={6} overflow={"hidden"}>
                <Image height={50} alt="metaCertified" src={metaCertified} />
              </Flex>
              <Flex borderRadius={6} overflow={"hidden"}>
                <Image height={50} alt="metaBusiness" src={metaBusiness} />
              </Flex>
            </HStack>
          </Stack>
        </Stack>
        <Stack
          spacing={6}
          paddingBottom={12}
          paddingX={[4, 6, 8, 12, 18, 24]}
          alignItems={"center"}
        >
          <Divider w={"100%"} borderWidth={0.5} borderColor={"white.500"} />
          <Paragraph fontSize={"x-small"}>
            Desenvolvido por Pedro Copatti | © Thrive 2023 | Política de
            privacidade
          </Paragraph>
        </Stack>
      </Stack>
    </>
  );
}
