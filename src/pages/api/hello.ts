import { NextApiRequest, NextApiResponse } from 'next';
import { withWrapper } from '@/utils/api/wrapper/withWrapper';
import { BadRequestError, CustomError } from '@/utils/api/wrapper/exceptions';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  throw new BadRequestError('그냥 에러 내봄', 401);
  return {
    id: 1,
  };
};

export default withWrapper<{ id: number }>(handler);
