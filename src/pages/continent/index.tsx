import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import { ElementType } from 'react';
import Banner from '../../components/Continent/Banner';
import City from '../../components/Continent/City';
import Header from '../../components/Header';

interface CityProps {
  name: string;
  country: string;
  flagUrl: string;
  icon: ElementType;
}

const topCities: CityProps[] = [
  {
    name: 'Reino Unido',
    country: 'Londres',
    flagUrl: '',
    icon: Icon,
  },
  {
    name: 'Paris',
    country: 'França',
    flagUrl: '',
    icon: Icon,
  },
  {
    name: 'Roma',
    country: 'Itália',
    flagUrl: '',
    icon: Icon,
  },
  {
    name: 'Praga',
    country: 'República Tcheca',
    flagUrl: '',
    icon: Icon,
  },
  {
    name: 'Amsterdã',
    country: 'Holanda',
    flagUrl: '',
    icon: Icon,
  },
];

export default function Continent() {
  return (
    <>
      <Box>
        <Header backButtonActive />
        <Banner />
        <Container>
          <HStack>
            <Text>description</Text>
            <HStack>
              <Box>
                <Text as="span">50</Text>
                <Text>Países</Text>
              </Box>
              <Box>
                <Text as="span">60</Text>
                <Text>Línguas</Text>
              </Box>
              <Box>
                <Text as="span">27</Text>
                <Text>Cidades +100</Text>
              </Box>
            </HStack>
          </HStack>
        </Container>
        <Container>
          <header>
            <Text as="h2">Cidades +100</Text>
          </header>
          <Grid templateColumns="repeat(4, 1fr)" gap={12}>
            {topCities.map((city) => (
              <GridItem key={city.name}>
                <City
                  title={city.country}
                  subtitle={city.name}
                  imageUrl={city.flagUrl}
                  icon={city.icon}
                />
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
