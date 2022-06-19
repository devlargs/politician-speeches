import client from '@graphql/client';
import { GET_POLITICIANS } from '@graphql/queries/politicians';
import { Politician } from '@graphql/types';
import { uniqBy } from 'lodash';
import create from 'zustand';

type UsePoliticians = {
  politicians: Politician[];
  loadPoliticians: () => void;
  loading: boolean;
  addPolitician: (e: Politician) => void;
};

export const usePoliticians = create<UsePoliticians>((set, get) => ({
  politicians: [],
  loadPoliticians: async (): Promise<void> => {
    set({ loading: true });
    const { data } = await client.query<{ politicians: Politician[] }>({
      query: GET_POLITICIANS,
    });
    set({ loading: false, politicians: data.politicians });
  },
  loading: false,
  addPolitician: (added: Politician): void => {
    set({
      politicians: uniqBy([...get().politicians, added], '_id'),
    });
  },
}));
