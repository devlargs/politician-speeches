import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react';
import Card from '@components/Card';
import { FC } from 'react';

const Politicians: FC = () => {
  return (
    <Box px="4" mt="8">
      <Box maxW="1280px" m="auto">
        <Flex w="100%" justifyContent="space-between">
          <Text fontSize="24px">Politicians</Text>
          <Button colorScheme="facebook">+Add</Button>
        </Flex>

        <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="2rem">
          <Card>
            <Image
              maxW="200px"
              h="240px"
              alt="image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/800px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg"
            />
            <Text fontSize="18px" mt="4">
              George Washington
            </Text>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
};

export default Politicians;
