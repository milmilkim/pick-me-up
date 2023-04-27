const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error('존재하지 않는 환경 변수');
  }
  return value
};

export default getEnv;