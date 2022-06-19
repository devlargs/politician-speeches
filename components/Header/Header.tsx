import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => (
  <Box bg="blue.800" px="4">
    <Box h="80px" justifyContent="space-between" maxW="1280px" m="auto" d="flex" alignItems="center">
      <Text color="white" fontSize="18px" fontWeight="bold">
        Logo
      </Text>
      <Box d="flex" color="white">
        <Link href="/politicians" passHref>
          <Text
            mr="4"
            cursor="pointer"
            _hover={{
              color: 'blue.200',
            }}
            transition="0.5s ease-in"
          >
            Politicians
          </Text>
        </Link>
        <Link href="/" passHref>
          <Text
            cursor="pointer"
            _hover={{
              color: 'blue.200',
            }}
            transition="0.5s ease-in"
          >
            Speeches
          </Text>
        </Link>
      </Box>
    </Box>
  </Box>
);

export default Header;
