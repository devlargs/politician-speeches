import { Box } from '@chakra-ui/react';
import { FC } from 'react';

const Card: FC = ({ children }) => {
  return (
    <Box
      boxShadow="0px 3px 24px -5px #000000"
      textAlign="center"
      d="grid"
      placeContent="center"
      p="4"
      borderRadius="8px"
    >
      {children}
    </Box>
  );
};

export default Card;
