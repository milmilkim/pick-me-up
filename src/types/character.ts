// 성별 (b: boy, g: girl)
export type Gender = 'b' | 'g';

// 캐릭터 국적 종류
export enum Country {
  Korean = 'korea',
  Japan = 'japan',
  America = 'america',
  Thai = 'thai',
}

// 캐릭터 랭크(별 개수)
export enum Tier {
  One = 1,
  Two,
  Three,
  Four,
}

// 캐릭터 능력치 종류
export enum Status {
  Vocal = 'vocal',
  Dance = 'dance',
  Rap = 'rap',
  Charm = 'charm',
}

// 능력치별 퍼센테이지
export enum MaxPercentage {
  One = 0.15,
  Two = 0.3,
  Three = 0.4,
  Four = 0.5,
}

export interface StatusList {
  [Status.Vocal]: number;
  [Status.Dance]: number;
  [Status.Rap]: number;
  [Status.Charm]: number;
}

export interface CharacterInput {
  gender: Gender;
  birthday: string;
  position: Status;
  country: Country;
  status: StatusList;
  tier: Tier;
  age: number;
}

export interface GPTCharacterResponse {
  이름: string;
  배경설정: string;
  성격: string;
  대사: string;
  좋아하는것: string;
}

export interface CharacterCard extends CharacterInput {
  name: string;
  background: string;
  personality: string;
  dialogue: string;
  favorite: string;
  imgNumber: number;
}
