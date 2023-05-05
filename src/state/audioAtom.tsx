import { atom } from 'jotai';

export const audioState = atom<{
  play: () => void;
  pause: () => void;
}>({
  play: () => {
    throw new Error('오디오 요소가 없습니다.');
  },
  pause: () => {
    throw new Error('오디오 요소가 없습니다.');
  },
});
