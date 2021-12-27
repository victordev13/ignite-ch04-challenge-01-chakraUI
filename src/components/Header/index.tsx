import {
  Flex,
  Icon,
  IconButton,
  Image,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import Link from 'next/link';

interface Props {
  backButtonActive?: boolean;
}

export default function Header({
  backButtonActive = false,
}: Props) {
  return (
    <Flex align="center" justify="center" p={27}>
      {backButtonActive && (
        <Link href="/" passHref>
          <IconButton
            aria-label="Open navigation"
            icon={<ChevronLeftIcon />}
            fontSize="24"
            variant="unstyled"
            top="auto"
            left="140"
            position="absolute"
          />
        </Link>
      )}
      <Image src="/logo.svg" alt="Logotipo" />
    </Flex>
  );
}
