import { useRef, useEffect } from 'react';
import music from '@/assets/music/adventure.mp3';
import { audioState } from '@/state/audioAtom';
import { useAtom } from 'jotai';

const BgmPlayer = () => {
  const bgmRef = useRef<HTMLAudioElement>(null);
  const [, setAudioState] = useAtom(audioState);

  useEffect(() => {
    setAudioState({
      play: () => bgmRef.current?.play(),
      pause: () => bgmRef.current?.pause(),
    });
  }, [bgmRef, setAudioState]);

  return <audio ref={bgmRef} src={music} loop />;
};

export default BgmPlayer;
