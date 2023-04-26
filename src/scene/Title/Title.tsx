import pickmeup from '@/assets/images/background/pickmeup.gif';
import styled from 'styled-components';
import useTyped from '@/hooks/useTyped';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { animated, useSpring, config } from '@react-spring/web';
import { easeSinOut } from 'd3-ease';
import PixelContainer from '@/components/common/PixelContainer';
import Style from './Style';

const Title = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

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

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isShowMenu) {
      event.stopPropagation();
    }
  };

  return (
    <Style background={pickmeup.src} onClick={toggleMenu}>
      <span className="ver">v.0.0.1</span>

      <div className="menu-container" onClick={handleMenuClick}>
        <animated.div className="menu-animation" style={{ ...springs }}>
          <PixelContainer background="#fff">
            <ul className="menu">
              <li>
                <Link href="/login">로그인</Link>
              </li>
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
