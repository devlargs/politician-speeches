import { useQuery } from '@apollo/client';
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { GET_SPEECHES } from '@graphql/queries/speeches';
import { Speech } from '@graphql/types';
import dayjs from 'dayjs';
import { FC } from 'react';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';

const Home: FC = () => {
  const { data, loading } = useQuery<{
    speeches: Speech[];
  }>(GET_SPEECHES);

  return (
    <Box px="4" mt="8">
      <Box maxW="1280px" m="auto">
        <Flex w="100%" justifyContent="space-between">
          <Text fontSize="24px">Speeches</Text>
          <Button colorScheme="facebook">+Add</Button>
        </Flex>

        {loading ? (
          <Grid placeItems="center" mt="20">
            <>
              <Spinner />
              <Text fontSize="20px" mt="4">
                Loading Speeches..
              </Text>
            </>
          </Grid>
        ) : (
          <>
            {data?.speeches.length ? (
              <Box mr="4">
                <TableContainer>
                  <Table variant="striped" size="lg">
                    <Thead>
                      <Tr>
                        <Th>Title</Th>
                        <Th>Author</Th>
                        <Th>Date</Th>
                        <Th>Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data.speeches.map((speech) => {
                        return (
                          <Tr key={speech._id}>
                            <Td>{speech.title}</Td>
                            <Td>
                              <Flex alignItems="center">
                                <Image
                                  src={speech.politicians[0].imageUrl}
                                  width={10}
                                  height={10}
                                  borderRadius="50%"
                                  mr="4"
                                  border="2px solid black"
                                  alt={`${speech.politicians[0].firstName} image`}
                                />
                                {speech.politicians[0].firstName} {speech.politicians[0].lastName}
                              </Flex>
                            </Td>
                            <Td>{dayjs(speech.date).format('MMM DD, YYYY')}</Td>
                            <Td>
                              <Button colorScheme="blue">
                                <AiFillEye />
                              </Button>
                              <Button colorScheme="red" ml="4">
                                <AiFillDelete />
                              </Button>
                            </Td>
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            ) : (
              <>No Speeches Found</>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Home;
