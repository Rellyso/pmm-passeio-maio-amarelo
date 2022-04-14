import { Container, Flex, FlexProps, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ButtonLink } from "../ButtonLink";
import { Image } from "../Image";

type Props = {
  children: ReactNode,
} & FlexProps;

export function MainHero({ children, ...rest }: Props) {
  return (
    <Flex
      as="main"
      id="principal-section"
      w="100%"
      h={["90vh", "90vh", "md"]}
      minH={["90vh", "md", "100%"]}
      bgColor="brand.yellow"
      position="relative"
      align="center"
      justify="center"
      {...rest}
    >
      <Container
        w="100%"
        h="100%"
        maxW="8xl"
        as={Flex}
        justify="center"
        align="center"
        gridGap={["4", "4", "20"]}

        flexDirection={["column-reverse", "column-reverse", "row"]}
      >

        {children}

        <Image
          src="/assets/banner-simbolo-maio-amarelo.webp"
          alt="símbolo maio amarelo"
          w="975px"
          h="500px"
          width="975"
          height="500"
          position="absolute"
          right="0"
          bottom="0"
        />

        <Image
          src="/assets/logo-passeio-ciclistico.webp"
          w="auto"
          maxW={["sm", "sm", "xs", "max-content"]}
          maxH={["48", "max-content", "max-content", "max-content"]}
          width="475"
          height="252"
          objectFit="contain"
          right="0"
          bottom="0"
        />
      </Container>
    </Flex>
  )
}