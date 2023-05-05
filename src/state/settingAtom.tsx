import { atomWithStorage } from 'jotai/utils';

export const settingAtom = atomWithStorage('setting', {
  bgm: true,
});
