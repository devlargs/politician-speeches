import { useMutation } from '@apollo/client';
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react';
import { CREATE_POLITICIANS } from '@graphql/mutations/politicians';
import { isValidHttpUrl } from '@helpers//isValidUrl';
import usePoliticianModal from '@store/usePoliticianModal';
import { usePoliticians } from '@store/usePoliticians';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

const AddPoliticianModal: FC = () => {
  const setVisible = usePoliticianModal((e) => e.setVisible);
  const visible = usePoliticianModal((e) => e.visible);
  const addPolitician = usePoliticians((e) => e.addPolitician);
  const [createPolitician, { loading }] = useMutation(CREATE_POLITICIANS);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const toast = useToast();

  const closeModal = (): void => {
    reset();
    setVisible(false);
  };

  const onSubmit = async (e): Promise<void> => {
    try {
      await createPolitician({
        variables: {
          input: {
            ...e,
          },
        },
        onCompleted: (data) => {
          addPolitician(data.createPolitician);
        },
      });
    } catch ({ message }) {
      if (message) {
        toast({
          title: message,
          status: 'error',
          duration: 2000,
        });
      }
    } finally {
      closeModal();
    }
  };

  return (
    <Modal onClose={closeModal} isOpen={visible}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Politician</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormControl mb="1">
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input id="firstName" type="text" {...register('firstName', { required: 'First Name is required' })} />
              {errors.firstName?.message && (
                <FormHelperText color="red.400">{errors.firstName?.message}</FormHelperText>
              )}
            </FormControl>
            <FormControl mb="1">
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input id="lastName" type="text" {...register('lastName', { required: 'Last Name is required' })} />
              {errors.lastName?.message && <FormHelperText color="red.400">{errors.lastName?.message}</FormHelperText>}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="imageUrl">Image Url</FormLabel>
              <Input
                id="imageUrl"
                type="text"
                {...register('imageUrl', {
                  validate: (e) => {
                    return isValidHttpUrl(e) ? true : "Image Url isn't valid";
                  },
                })}
              />
              {errors.imageUrl?.message && <FormHelperText color="red.400">{errors.imageUrl?.message}</FormHelperText>}
            </FormControl>
            <Button colorScheme="facebook" mt="4" type="submit" isLoading={loading}>
              Add
            </Button>
          </ModalBody>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AddPoliticianModal;
