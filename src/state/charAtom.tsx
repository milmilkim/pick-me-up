import { CharacterCard } from '@/types/character';
import { atomWithStorage } from 'jotai/utils';

export const charAtom = atomWithStorage('saved-cards', {
  cards: [] as CharacterCard[],
});
