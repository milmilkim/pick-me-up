import { getRandomNumberByRange, getRandomValueByPossibility } from './ramdom';
import { Country, Tier, Status, MaxPercentage, StatusList, CharacterInput, Gender } from '@/types/character';
import { getRandomDate } from './date';
import { getKeyWithMaxValue } from '@/utils/common';

export const getRandomCharacterImgId = (min = 0, max = 999) => {
  const randomNumber = getRandomNumberByRange(min, max);
  return String(randomNumber).padStart(3, '0');
};

// 능력치별 최대값
const MAX_STATUS = 1000;
//  능력치 개수
const COUNT_STATUS = Object.keys(Status).length;
// 능력치합의 최대값
const SUM_MAX_STATUS = MAX_STATUS * COUNT_STATUS;

// 랭크별 최대 능력치 합 계산
const getSumMaxStatusByTier = (tier: Tier) => {
  const key = Object.keys(Tier)[Object.values(Tier).indexOf(tier)];
  const sum = SUM_MAX_STATUS * MaxPercentage[key as keyof typeof MaxPercentage];
  return sum;
};

// 국가 랜덤 선택
const getRandomCountry = () => {
  const country = [Country.Korean, Country.Japan, Country.America, Country.Thai];
  return getRandomValueByPossibility<Country>(country, [0.8, 0.07, 0.1, 0.03]);
};

// 티어 랜덤 선택
const getRandomTier = () => {
  const tiers = [Tier.One, Tier.Two, Tier.Three, Tier.Four];
  return getRandomValueByPossibility<Tier>(tiers, [0.65, 0.2, 0.1, 0.05]);
};

// 최대 값 안에서 능력치 개수대로 랜덤하게 나누고 정렬
const getRandomStatus = (tier: Tier) => {
  const status: number[] = [];
  let remain = getSumMaxStatusByTier(tier);
  for (let i = 0; i < COUNT_STATUS - 1; i++) {
    let max = remain >= 1000 ? 1000 : remain;
    const value = getRandomNumberByRange(0, max);
    status.push(value);
    remain = remain - value;
  }
  status.push(remain);

  const statusList: StatusList = {} as StatusList;
  Object.values(Status).forEach((statusKey, index) => {
    statusList[statusKey] = status[index];
  });
  return statusList;
};

const generateCharacterSet = (gender: Gender): CharacterInput => {
  const country = getRandomCountry();
  const tier = getRandomTier();
  const status = getRandomStatus(tier);
  const position = getKeyWithMaxValue<StatusList, Status>(status);
  const age = getRandomNumberByRange(17, 25);
  const birthday = getRandomDate().format('MM-DD');

  const characterInput: CharacterInput = {
    gender,
    country,
    birthday,
    status,
    position,
    tier,
    age,
  };

  return characterInput;
};

export default generateCharacterSet;
