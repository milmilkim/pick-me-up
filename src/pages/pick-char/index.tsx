import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export default function Home() {
  const [charImg, setCharImg] = useState<string>('');
  const [charType, setCharType] = useState<CharType>('g');

  function generateRandomNumber(min = 0, max = 999) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return String(randomNumber).padStart(3, '0');
  }

  type CharType = 'b' | 'g';

  const pickCharacter = async () => {
    const number = generateRandomNumber(1, 53);
    const path = charType === 'b' ? 'boy' : 'girl';
    const character = await import(`@/assets/images/char/${path}/${charType}${number}.png`);
    setCharImg(character.default.src);
  };

  const onChangeType = (e: ChangeEvent<HTMLInputElement>) => {
    setCharType(e.target.value as CharType);
    console.log(e.target.value);
  };

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

        {charImg && <img src={charImg} alt="img" width={150} height={150} />}
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
    border: 4px solid #000
  }
`