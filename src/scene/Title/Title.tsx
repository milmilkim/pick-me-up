import pickmeup from '@/assets/images/background/pickmeup.gif';
import styled from 'styled-components';
import useTyped from '@/hooks/useTyped';
import { useState } from 'react';
import Link from 'next/link';

const Title = () => {
  const typed = useTyped(['계속하려면 클릭하세요']);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // 클릭 이벤트 전파를 중단시킵니다.
  };

  return (
    <StyledTitle background={pickmeup.src} onClick={toggleMenu}>
      <span className="ver">v.0.0.1</span>
      {isShowMenu && (
        <div className="menu-container" onClick={handleMenuClick}>
          <div className="nes-container">
            <ul>
              <li>
                <Link href="/pick-char">뽑기</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="message">{typed}</div>
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
  }

  @keyframes fadein {
    from {
      width: 0;
      height: 0;
      top: 50%;
      left: 50%;
      opacity: 0;
    }
    to {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
    }
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
      animation: fadein 300ms ease-in-out forwards;
      animation-fill-mode: forwards;
      white-space: nowrap;
      overflow: hidden;
      background-color: #fff;
    }
  }
`;
export default Title;
