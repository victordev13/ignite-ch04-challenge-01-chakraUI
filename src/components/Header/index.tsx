import { Flex, Image } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex align="center" justify="center" p={27}>
      <Image src="/logo.svg" alt="Logotipo" />
    </Flex>
  );
}
