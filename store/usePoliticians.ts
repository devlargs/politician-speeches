import client from '@graphql/client';
import { GET_POLITICIANS } from '@graphql/queries/politicians';
import { Politician } from '@graphql/types';
import create from 'zustand';

type UsePoliticians = {
  politicians: Politician[];
  loadPoliticians: () => void;
  loading: boolean;
};

export const usePoliticians = create<UsePoliticians>((set) => ({
  politicians: [],
  loadPoliticians: async (): Promise<void> => {
    set({ loading: true });
    const { data } = await client.query<{ politicians: Politician[] }>({
      query: GET_POLITICIANS,
    });
    set({ loading: false, politicians: data.politicians });
  },
  loading: false,
}));
