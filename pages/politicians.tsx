import { Box, Button, Flex, Grid, Image, Spinner, Text } from '@chakra-ui/react';
import Card from '@components/Card';
import usePoliticianModal from '@store/usePoliticianModal';
import { usePoliticians } from '@store/usePoliticians';
import { FC } from 'react';

const Politicians: FC = () => {
  const politicians = usePoliticians((e) => e.politicians);
  const loading = usePoliticians((e) => e.loading);
  const setVisible = usePoliticianModal((e) => e.setVisible);

  return (
    <Box px="4" mt="8">
      <Box maxW="1280px" m="auto">
        <Flex w="100%" justifyContent="space-between">
          <Text fontSize="24px">Politicians</Text>
          <Button colorScheme="facebook" onClick={(): void => setVisible(true)}>
            +Add
          </Button>
        </Flex>

        {loading ? (
          <Grid placeItems="center" mt="20">
            <>
              <Spinner />
              <Text fontSize="20px" mt="4">
                Loading Politicians..
              </Text>
            </>
          </Grid>
        ) : (
          <>
            {politicians.length ? (
              <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="2rem">
                {politicians.map((items) => (
                  <Card key={items._id}>
                    <Image
                      maxW="200px"
                      h="240px"
                      alt={`${items.firstName} ${items.lastName} Image`}
                      src={items.imageUrl}
                    />
                    <Text fontSize="18px" mt="4">
                      {items.firstName} {items.lastName}
                    </Text>
                  </Card>
                ))}
              </Grid>
            ) : (
              <>No politicians found</>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Politicians;
