import {
  Box,
  Image,
  Text,
  Flex,
  Container,
} from '@chakra-ui/react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Header from '../components/Header';

export default function Home() {
  return (
    <Box w="100%">
      <Header />
      <Banner />
      <Box>
        <Flex
          align="center"
          justify="space-around"
          maxW={1160}
          mx="auto"
          pt={28}
          pb="50px"
          fontWeight="bold"
          textAlign="center"
          lineHeight={10}>
          <Box>
            <Image src="/cocktail.svg" alt="Vida noturna" />
            <Text>Vida noturna</Text>
          </Box>
          <Box>
            <Image src="/surf.svg" alt="Praia" />
            <Text>Praia</Text>
          </Box>
          <Box>
            <Image src="/building.svg" alt="Moderno" />
            <Text>Moderno</Text>
          </Box>
          <Box>
            <Image src="/museum.svg" alt="Moderno" />
            <Text>Clássico</Text>
          </Box>
          <Box>
            <Image src="/earth.svg" alt="e mais..." />
            <Text>e mais...</Text>
          </Box>
        </Flex>
        <Box
          w={90}
          bg="gray.500"
          h={0.5}
          mx="auto"
          mb={5}
        />
      </Box>
      <Box textAlign="center" mt={10}>
        <Text fontSize={36} fontWeight={500}>
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>
      </Box>

      <Box mW={1240} minH={450} w="90%" mx="auto">
        <Carousel />
      </Box>
    </Box>
  );
}
