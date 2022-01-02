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
      h={335}
      color="gray.50"
      px="10%"
      justifyContent="space-between">
      <Box my="auto" maxWidth={1480} px="6">
        <Text as="span" fontSize={36}>
          5 Continentes, <br />
          infinitas possibilidades.
        </Text>
        <Text mt={6}>
          Chegou a hora de tirar do papel a viagem que você
          <br />
          sempre sonhou.
        </Text>
      </Box>
      <Box mt={76}>
        <Image
          src="/airplane.png"
          alt="Airplane"
          transform="rotate(3deg)"
        />
      </Box>
    </Flex>
  );
}
