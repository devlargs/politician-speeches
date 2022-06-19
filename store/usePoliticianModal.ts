import create from 'zustand';

type ModalProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const usePoliticianModal = create<ModalProps>((set) => ({
  visible: false,
  setVisible: (visible: boolean): void =>
    set(() => ({
      visible,
    })),
}));

export default usePoliticianModal;
