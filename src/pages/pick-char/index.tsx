import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import axios from '@/utils/axios';
import { useEffect } from 'react';
import generateCharacterSet from '@/utils/character';
import type { Gender } from '@/types/character';

export default function Home() {
  const [charImg, setCharImg] = useState<string>('');
  const [charType, setCharType] = useState<Gender>('g');
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<any>(null);

  const getCharacterProfile = async () => {};

  const pickCharacter = async () => {};

  const onChangeType = (e: ChangeEvent<HTMLInputElement>) => {};

  useEffect(() => {
    generateCharacterSet(charType);
  }, []);

  return (
    <PickCharacter>
      <header>
        <h1>뽑기</h1>
        <hr style={{ marginBottom: '30px' }} />

        <label>
          <input type="radio" className="nes-radio" name="answer" onChange={onChangeType} value="g" checked={charType === 'g'} />
          <span>여</span>
        </label>

        <label>
          <input type="radio" className="nes-radio" name="answer" onChange={onChangeType} value="b" checked={charType === 'b'} />
          <span>남</span>
        </label>

        <hr />
        <button className="nes-btn" onClick={pickCharacter}>
          뽑기
        </button>

        <br />

        {isLoading ? (
          <span>Loading...</span>
        ) : (
          profile && (
            <div>
              <ul>
                <li>이름: {profile.이름}</li>
                <li>배경: {profile.배경설정}</li>
                <li>나이: {profile.나이} </li>
                <li>성격: {profile.성격}</li>
                <li>대사: {profile.대사}</li>
              </ul>
              <img src={charImg} alt="img" width={150} height={150} />
            </div>
          )
        )}
      </header>
      <style jsx>
        {`
          h1 {
            font-size: 32px;
          }

          p {
            color: gray;
          }
        `}
      </style>
    </PickCharacter>
  );
}

const PickCharacter = styled.div`
  img {
    border: 4px solid #000;
  }
`;
