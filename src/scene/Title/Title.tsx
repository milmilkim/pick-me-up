import pickmeup from '@/assets/images/background/pickmeup.gif';
import useTyped from '@/hooks/useTyped';
import { useState } from 'react';
import Link from 'next/link';
import { animated, useSpring } from '@react-spring/web';
import { easeSinOut } from 'd3-ease';
import PixelContainer from '@/components/common/PixelContainer';
import Style from './Style';
import { useAtom } from 'jotai';
import { audioState } from '@/state/audioAtom';
import { settingAtom } from '@/state/settingAtom';
import { selectAtom } from 'jotai/utils';
import speaker from '@/assets/images/icon/speaker.png';
import mute from '@/assets/images/icon/mute.png';

const Title = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [audio] = useAtom(audioState);
  const [setting, setSetting] = useAtom(settingAtom);
  const springs = useSpring({
    from: {
      opacity: 0,
      width: '0',
      height: '0',
    },
    to: {
      opacity: isShowMenu ? 1 : 0,
      width: isShowMenu ? '100%' : '0',
      height: isShowMenu ? '100%' : '0',

      transform: isShowMenu ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
    },
    config: {
      duration: 300, // 애니메이션 지속 시간(ms 단위)
      easing: easeSinOut,
    },
  });

  const typed = useTyped(['계속하려면 클릭하세요']);

  const clickBackground = () => {
    if (setting.bgm) {
      audio.play();
    }
    setIsShowMenu(!isShowMenu);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isShowMenu) {
      event.stopPropagation();
    }
  };

  const toggleBgm = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    const next = !setting.bgm;
    setSetting((setting) => ({ ...setting, bgm: next }));

    if (next) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <Style background={pickmeup.src} onClick={clickBackground}>
      <div className="top">
        <div className="nes-pointer">{setting && <img onClick={toggleBgm} src={setting.bgm === true ? speaker.src : mute.src} alt="Speaker Icon" />} </div>
        <span className="ver">v.0.0.1</span>
      </div>
      <div className="menu-container" onClick={handleMenuClick}>
        <animated.div className="menu-animation" style={{ ...springs }}>
          <PixelContainer background="#fff">
            <ul className="menu">
              {/* <li>
                <Link href="/login">로그인</Link>
              </li> */}
              <li>
                <Link href="/pick-char">뽑기</Link>
              </li>
            </ul>
          </PixelContainer>
        </animated.div>
      </div>
      <div className="message">{typed}</div>
    </Style>
  );
};

export default Title;
