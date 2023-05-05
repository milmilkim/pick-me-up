import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import axios from '@/utils/axios';
import type { Gender, CharacterCard } from '@/types/character';
import { getRandomCharacterImgId } from '@/utils/character';
import { AxiosError } from 'axios';

export default function Home() {
  const [charImg, setCharImg] = useState<string>('');
  const [gender, setGender] = useState<Gender>('g');
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<CharacterCard | null>(null);

  const getCharacterProfile = async () => {
    const {
      data: { data },
    } = await axios.get('/api/random-char', {
      params: {
        gender,
      },
    });

    setProfile(data);
  };

  const pickCharacter = async () => {
    try {
      setIsLoading(true);
      await getCharacterProfile();
      const number = getRandomCharacterImgId(1, 53);
      const path = gender === 'b' ? 'boy' : 'girl';
      const character = await import(`@/assets/images/char/${path}/${gender}${number}.png`);
      setCharImg(character.default.src);
    } catch (err) {
      console.error(err);
      alert((err as any).message);
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeType = (e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.currentTarget.value as Gender);
  };

  return (
    <PickCharacter>
      <header>
        <h1>뽑기</h1>
        <hr style={{ marginBottom: '30px' }} />

        <label>
          <input type="radio" className="nes-radio" name="answer" onChange={onChangeType} value="g" checked={gender === 'g'} />
          <span>여</span>
        </label>

        <label>
          <input type="radio" className="nes-radio" name="answer" onChange={onChangeType} value="b" checked={gender === 'b'} />
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
                <li>이름: {profile.name}</li>
                <li>배경: {profile.background}</li>
                <li>나이: {profile.age} </li>
                <li>성격: {profile.personality}</li>
                <li>대사: {profile.dialogue}</li>
                <li>국적: {profile.country}</li>
                <li>좋아하는것: {profile.favorite}</li>
                <li>생일: {profile.birthday}</li>
                <li>별: {profile.tier}</li>
                <li>노래: {profile.status.vocal}</li>
                <li>춤: {profile.status.dance}</li>
                <li>랩: {profile.status.rap}</li>
                <li>매력: {profile.status.charm}</li>
                <li>포지션: {profile.position}</li>
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
