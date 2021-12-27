import { Box, Image, Text, HStack } from '@chakra-ui/react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Header from '../components/Header';

export default function Home() {
  return (
    <Box w="100%">
      <Header />
      <Banner />
      <Box>
        <HStack spacing="4" align="center" justify="center">
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
        </HStack>
        <hr />
      </Box>
      <Box textAlign="center">
        <Text>
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>
      </Box>
      <Carousel />
    </Box>
  );
}
