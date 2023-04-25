import styled from 'styled-components';
import crystal from '@/assets/images/icon/crystal.png';
import PixelContainer from '../common/PixelContainer';
import SettingsIcon from '@/assets/images/icon/settings.png';

import { useRef } from 'react';
import Settings from '../settings/Settings';

export default function Header() {
  const settingsRef = useRef<HTMLDialogElement>(null);

  const showSettings = () => {
    settingsRef.current?.showModal();
  };

  return (
    <PixelContainer
      background='linear-gradient(
		84deg,
		rgba(197, 157, 234, 1) 0%,
		rgba(176, 201, 221, 1) 100%
	  )'>
      <StyledHeader>
        <div>
          <ul className='user-info'>
            <li className='user-name'>멋진유저네임</li>
            <li className='company-name'>멋진컴퍼니</li>
          </ul>

          <ul className='money'>
            <li>
              <i className='nes-icon coin is-small'></i>
              500
            </li>
            <li>
              <img
                width={20}
                height={20}
                src={crystal.src}
                alt='크리스탈 아이콘'
              />
              700
            </li>
          </ul>
        </div>
        <div className='nes-pointer settings' onClick={showSettings}>
          <img width={30} height={30} src={SettingsIcon.src} alt='설정' />
        </div>
      </StyledHeader>
	  <Settings ref={settingsRef} />
    </PixelContainer>
  );
}

const StyledHeader = styled.header`
  padding: 10px;
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    align-items: center;
  }

  .user-info li {
    padding: 3px 5px;
    margin-right: 10px;

    &.user-name {
      background-color: #fe99c6;
      border: 4px outset #c578d6;
    }

    &.company-name {
      background-color: #fdd8d8;
      border: 4px outset #6139bc;
    }
  }

  .money {
    height: 30px;

    li {
      display: flex;
      align-items: center;
      margin-right: 10px;

      & > :first-child {
        margin-right: 5px;
      }
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .settings {
    width: 30px;
    height: 30px;

    &:hover {
      animation: spin 2000ms linear infinite;
    }
  }
`;
