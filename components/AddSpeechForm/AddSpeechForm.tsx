import { useMutation } from '@apollo/client';
import { Box, Button, FormControl, FormLabel, Input, Select, useToast } from '@chakra-ui/react';
import { CREATE_SPEECH } from '@graphql/mutations/speech';
import { usePoliticians } from '@store/usePoliticians';
import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

const Editor: any = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), { ssr: false });

const AddSpeechForm: FC<{ callback: () => void; speechLoading: boolean }> = ({ callback, speechLoading }) => {
  const [content, setContent] = useState(() => EditorState.createEmpty());
  const { handleSubmit, register, setValue, reset } = useForm();
  const politicians = usePoliticians((e) => e.politicians);
  const [createSpeech, { loading }] = useMutation(CREATE_SPEECH);
  const toast = useToast();
  const [key, setKey] = useState(+new Date());

  const showError = (title: string): void => {
    toast({
      title,
      status: 'error',
      duration: 2000,
    });
  };

  const resetForm = (): void => {
    reset();
    setKey(+new Date());
    setContent(EditorState.createEmpty());
  };

  const onSubmit = async (e): Promise<void> => {
    const currentContentAsHTML = convertToHTML(content.getCurrentContent());
    if (!e.politicians) {
      showError('Author is required');
    }

    if (currentContentAsHTML === '<p></p>') {
      showError('Content is required');
    }

    try {
      await createSpeech({
        variables: {
          input: {
            ...e,
            content: currentContentAsHTML,
          },
        },
      });
    } catch ({ message }) {
      if (message) {
        showError(message);
      } else {
        resetForm();
        showError('Something went wrong');
      }
    } finally {
      resetForm();
      callback();
    }
  };

  return (
    <Box my="4" key={key}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button my="16px" colorScheme="facebook" type="submit" isLoading={loading || speechLoading}>
          Save Speech
        </Button>
        <FormControl>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input id="title" required {...register('title', { required: 'Title is required' })} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="date">Title</FormLabel>
          <Input id="date" required type="date" {...register('date', { required: 'Date is required' })} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Author</FormLabel>
          <Select placeholder="Select option" onChange={(e): void => setValue('politicians', [e.target.value])}>
            {politicians.map((items) => (
              <option value={items._id} key={items._id}>
                {items.firstName} {items.lastName}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Content</FormLabel>
          <Editor
            editorState={content}
            wrapperClassName="wrapperClassName"
            editorClassName="ckeditorContent"
            onEditorStateChange={setContent}
            toolbar={{
              options: ['inline', 'blockType', 'list', 'history'],
              inline: { inDropdown: false, options: ['bold', 'italic', 'underline', 'strikethrough'] },
              list: { inDropdown: false },
              link: { inDropdown: false },
              history: { inDropdown: false },
            }}
          />
        </FormControl>
      </form>
    </Box>
  );
};

export default AddSpeechForm;
