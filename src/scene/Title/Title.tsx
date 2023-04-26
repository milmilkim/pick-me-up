import pickmeup from '@/assets/images/background/pickmeup.gif';
import styled from 'styled-components';
import useTyped from '@/hooks/useTyped';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { animated, useSpring, config } from '@react-spring/web';
import { easeSinOut } from 'd3-ease';

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

      transform: isShowMenu
      ? 'translate(-50%, -50%) scale(1)'
      : 'translate(-50%, -50%) scale(0)',
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
    if(isShowMenu) {
      event.stopPropagation();
    }
  };

  return (
    <StyledTitle background={pickmeup.src} onClick={toggleMenu}>
      <animated.span className='ver'>v.0.0.1</animated.span>

      <div className='menu-container' onClick={handleMenuClick} >
        <animated.div className='nes-container' style={{...springs}}>
          <ul>
            <li>
              <Link href='/pick-char'>뽑기</Link>
            </li>
          </ul>
        </animated.div>
      </div>
      <div className='message'>{typed}</div>
    </StyledTitle>
  );
};

const StyledTitle = styled.div<{ background: string }>`
  position: absolute;
  padding: 5px;
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.background})`};
  background-color: #251f43;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;

  .ver {
    margin-left: auto;
  }

  .message {
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translateX(-50%) translateY(-50%);
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
  }


  .menu-container {
    position: relative;
    color: #000;
    margin-top: auto;
    left: 50%;
    width: 300px;
    height: 200px;
    transform: translateX(-50%);
    margin-bottom: 20px;

    .nes-container {
      position: absolute;
      white-space: nowrap;
      overflow: hidden;
      width: 0;
      height: 0;
      background-color: #fff;
      left: 50%;
      top: 50%;

    }
  }
`;
export default Title;
