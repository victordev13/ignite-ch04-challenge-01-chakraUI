import {
  Box,
  Text,
  Icon,
  Image,
  Flex,
} from '@chakra-ui/react';
import { ElementType } from 'react';

interface Props {
  title: string;
  subtitle: string;
  imageUrl: string;
  icon: ElementType;
}

export default function City({
  title,
  subtitle,
  imageUrl,
  icon,
}: Props) {
  return (
    <Box>
      <Image src={imageUrl} alt={title} />
      <Flex>
        <Box>
          <Text>{title}</Text>
          <Text>{subtitle}</Text>
        </Box>
        <Icon as={icon} />
      </Flex>
    </Box>
  );
}
