import type { NextApiRequest, NextApiResponse } from 'next';
import gpt from '@/utils/api/openai';
import type { Gender } from '@/types/character';
import generateCharacterSet from '@/utils/character';
import { withWrapper } from '@/utils/api/wrapper/withWrapper';
import { GPTCharacterResponse } from '@/types/character';
import { CustomError, BadRequestError } from '@/utils/api/wrapper/exceptions';
import { CharacterCard } from '@/types/character';

export function isGPTCharacterResponse(value: any): value is GPTCharacterResponse {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.이름 === 'string' &&
    typeof value.배경설정 === 'string' &&
    typeof value.성격 === 'string' &&
    typeof value.대사 === 'string' &&
    typeof value.좋아하는것 === 'string'
  );
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    throw new BadRequestError();
  }

  console.log('요청...');
  const gender = req.query.gender as Gender;

  if (!gender || (gender !== 'g' && gender !== 'b')) {
    throw new BadRequestError('gender 파라미터가 없거나 잘못되었습니다.');
  }

  const characterSet = generateCharacterSet(gender);

  const { country, age, position, birthday, status, tier } = characterSet;

  const characterPrompt = `
      Create a fictional character profile of a random ${gender === 'g' ? 'girl' : 'boy'} K-pop Idol Wannabe concept in JSON format.
      example:
      {
        이름: 
        배경설정: 
        성격: 
        대사: 
        좋아하는것:
      }
      she/he is from ${country}, and ${age} years old. position is ${position}
      For the name, don't use the actual idol's name.
      Write 대사 with personality, like a cartoon character.
      write in korean 
      `;

  console.log('gpt 요청 시작 ');

  const { data } = await gpt.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: characterPrompt }],
    temperature: 0.7,
  });
  console.log('gpt 요청 완료');

  const profile = JSON.parse(data.choices[0].message?.content as string);
  if (!isGPTCharacterResponse(profile)) {
    throw new CustomError('답변 오류. 다시 요청하세요', 500);
  }

  const characterCard: CharacterCard = {
    name: profile.이름,
    age,
    background: profile.배경설정,
    dialogue: profile.대사,
    favorite: profile.좋아하는것,
    personality: profile.성격,
    birthday,
    gender,
    position,
    country,
    status,
    tier,
  } as CharacterCard;

  return characterCard;
};

export default withWrapper<CharacterCard>(handler);
