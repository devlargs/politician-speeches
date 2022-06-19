import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const Header: FC = () => {
  const router = useRouter();

  return (
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
              color={router.pathname.includes('/politicians') ? 'blue.100' : 'white'}
              textDecor={router.pathname.includes('/politicians') ? 'underline' : 'initial'}
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
              color={router.pathname === '/' || router.pathname.includes('/speeches') ? 'blue.100' : 'white'}
              textDecor={router.pathname === '/' || router.pathname.includes('/speeches') ? 'underline' : 'initial'}
            >
              Speeches
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
