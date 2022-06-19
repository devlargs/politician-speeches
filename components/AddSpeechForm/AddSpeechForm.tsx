import { Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import { usePoliticians } from '@store/usePoliticians';
import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import dynamic from 'next/dynamic';
import { useState, VFC } from 'react';
import { useForm } from 'react-hook-form';

const Editor: any = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), { ssr: false });

const AddSpeechForm: VFC = () => {
  const [content, setContent] = useState(() => EditorState.createEmpty());
  const { handleSubmit, register, setValue } = useForm();
  const politicians = usePoliticians((e) => e.politicians);

  const onSubmit = (): void => {
    const currentContentAsHTML = convertToHTML(content.getCurrentContent());
    console.log(currentContentAsHTML); //eslint-disable-line
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input id="title" {...register('title', { required: 'Title is required' })} />
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
      <Button mt="16px" colorScheme="facebook" type="submit">
        Save
      </Button>
    </form>
  );
};

export default AddSpeechForm;
