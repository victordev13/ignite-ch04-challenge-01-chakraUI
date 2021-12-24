import { Box } from '@chakra-ui/react';
import Banner from '../components/Banner';
import Header from '../components/Header';

function Home() {
  return (
    <Box w="100%">
      <Header />
      <Banner />
    </Box>
  );
}

export default Home;
