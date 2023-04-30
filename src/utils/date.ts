import dayjs, { Dayjs } from 'dayjs';

export const getRandomDate = (defaultYear?: number): Dayjs => {
  const year = defaultYear || dayjs().year();
  const month = Math.floor(Math.random() * 12) + 1; // 1~12
  const maxDays = dayjs(`${year}-${month}-01`).daysInMonth(); // 해당 월의 최대 일 수
  const day = Math.floor(Math.random() * maxDays) + 1; // 1~최대 일 수
  return dayjs(`${year}-${month}-${day}`);
};
