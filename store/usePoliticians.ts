import create from 'zustand';

type UsePoliticians = {
  politicians: [];
  loadPoliticians: () => void;
};

export const usePoliticians = create<UsePoliticians>(() => ({
  politicians: [],
  loadPoliticians: (): void => {
    //
  },
}));
