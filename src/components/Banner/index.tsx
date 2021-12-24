import { Box, Flex, Image, Text } from '@chakra-ui/react';

export default function Banner() {
  return (
    <Flex
      bgImage="url('/home_banner.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      mx="auto"
      maxW={1800}
      h={370}>
      <Box my="6" maxWidth={1480} mx="auto" px="6">
        <Text as="span">
          5 Continentes, infinitas possibilidades.
        </Text>
        <Text>
          Chegou a hora de tirar do papel a viagem que você
          sempre sonhou.
        </Text>
      </Box>
      <Box>
        <Image src="url('/airplane.png')" alt="Airplane" />
      </Box>
    </Flex>
  );
}
