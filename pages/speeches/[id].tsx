import { useQuery } from '@apollo/client';
import { Box, chakra, Image, Skeleton, Spinner, Text } from '@chakra-ui/react';
import { GET_SPEECH_BY_ID } from '@graphql/queries/speeches';
import { Speech } from '@graphql/types';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';

const Home: FC = () => {
  const router = useRouter();
  const { data, loading } = useQuery<{ speech: Speech }>(GET_SPEECH_BY_ID, {
    variables: {
      id: router.query.id,
    },
  });

  return (
    <>
      <Box px="4" bg="blue.900" minH="100">
        <Box maxW="1280px" m="auto" pb="8">
          <chakra.h1 color="white" pt="8" fontSize="45px" textAlign="center" fontFamily="'Merriweather'">
            {loading ? <Spinner /> : data?.speech.title}
          </chakra.h1>
          <Box d="flex" justifyContent="center">
            <AiFillStar color="white" />
            <AiFillStar color="white" />
            <AiFillStar color="white" />
          </Box>
          <Skeleton isLoaded={!loading} fadeDuration={1}>
            <Box d="flex" justifyContent="center" mt="1rem" alignItems="center">
              <Image
                src={data?.speech.politicians[0].imageUrl}
                width="80px"
                h="80px"
                alt="speech image"
                border="2px solid white"
              />
              <Box color="white" ml="4">
                <Text>{dayjs(data?.speech.date).format('MMM DD, YYYY')}</Text>
                <Text>
                  {data?.speech.politicians[0].firstName} {data?.speech.politicians[0].lastName}
                </Text>
              </Box>
            </Box>
          </Skeleton>
        </Box>
      </Box>
      <Box maxW="1000px" m="auto" pb="8" px={8}>
        <Skeleton isLoaded={!loading} fadeDuration={1}>
          <Box
            className="transcript"
            dangerouslySetInnerHTML={{
              __html: `${data?.speech.content}`,
            }}
          ></Box>
        </Skeleton>
      </Box>
    </>
  );
};

export default Home;
