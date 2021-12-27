import { Box, Flex, Image, Text } from '@chakra-ui/react';

export default function Banner() {
  return (
    <Flex
      bgImage="/home_banner.png"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      mx="auto"
      maxW={1800}
      h={370}
      color="gray.50">
      <Box my="6" maxWidth={1480} mx="auto" px="6">
        <Text as="h1">Europa</Text>
      </Box>
      <Box>
        <Image src="/airplane.png" alt="Airplane" />
      </Box>
    </Flex>
  );
}
