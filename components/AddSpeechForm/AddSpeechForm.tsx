import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { VFC } from 'react';

const AddSpeechForm: VFC = () => {
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="email">Title</FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="email">Author</FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="email">Content</FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </>
  );
};

export default AddSpeechForm;
