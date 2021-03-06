import { useLazyQuery, useMutation } from '@apollo/client';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from '@chakra-ui/react';
import AddSpeechForm from '@components/AddSpeechForm';
import { DELETE_SPEECH } from '@graphql/mutations/speech';
import { GET_SPEECHES } from '@graphql/queries/speeches';
import { Speech } from '@graphql/types';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { AiFillDelete, AiFillEye, AiOutlineSearch } from 'react-icons/ai';

const Home: FC = () => {
  const [searchText, setSearchText] = useState('');
  const [state, setState] = useState<'view' | 'add'>('view');
  const [getSpeeches, { data, loading }] = useLazyQuery<{
    speeches: Speech[];
  }>(GET_SPEECHES, {
    onCompleted: () => {
      setState('view');
    },
  });
  const toast = useToast();
  const [deleteSpeech] = useMutation(DELETE_SPEECH);

  useEffect(() => {
    void getSpeeches();
  }, [getSpeeches]);

  return (
    <Box px="4" mt="8">
      <Box maxW="1280px" m="auto">
        <Flex w="100%" justifyContent="space-between">
          <Box d="flex" alignItems="center">
            <Text mr="4" fontSize="24px">
              {state === 'add' ? 'Add a Speech' : 'Speeches'}{' '}
            </Text>
            {state === 'view' && (
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineSearch />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Search by title"
                  value={searchText}
                  onChange={(e): void => setSearchText(e.target.value.toLowerCase())}
                />
              </InputGroup>
            )}
          </Box>
          <Button
            colorScheme={state === 'view' ? 'facebook' : 'red'}
            onClick={(): void => setState((e) => (e === 'add' ? 'view' : 'add'))}
          >
            {state === 'add' ? 'Cancel' : '+Add'}
          </Button>
        </Flex>

        {state === 'view' && (
          <>
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
                    <TableContainer mb="8">
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
                            if (speech.title.toLowerCase().includes(searchText)) {
                              return (
                                <Tr key={speech._id}>
                                  <Td>
                                    {speech.title.length > 49 ? `${speech.title.substring(0, 40)}..` : speech.title}
                                  </Td>
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
                                    <Link href={`/speeches/${speech._id}`} passHref>
                                      <Button colorScheme="blue">
                                        <AiFillEye />
                                      </Button>
                                    </Link>
                                    <Button
                                      colorScheme="red"
                                      ml="4"
                                      onClick={async (): Promise<void> => {
                                        try {
                                          await deleteSpeech({
                                            variables: {
                                              id: speech._id,
                                            },
                                          });
                                        } finally {
                                          void getSpeeches();
                                          toast({
                                            title: 'Successfully delete speech',
                                            status: 'success',
                                            duration: 2000,
                                          });
                                        }
                                      }}
                                    >
                                      <AiFillDelete />
                                    </Button>
                                  </Td>
                                </Tr>
                              );
                            }
                          })}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Box>
                ) : (
                  <Alert status="info" mt="4">
                    <AlertIcon />
                    No Speeches Found
                  </Alert>
                )}
              </>
            )}
          </>
        )}

        {state === 'add' && (
          <AddSpeechForm
            speechLoading={loading}
            callback={(): void => {
              void getSpeeches();
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Home;
