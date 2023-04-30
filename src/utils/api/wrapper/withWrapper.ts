import { NextApiRequest, NextApiResponse } from 'next';
import type { ApiResponse } from '@/types/common';
import { CustomError } from './exceptions';

export const withWrapper =
  <T>(handler: (req: NextApiRequest, res: NextApiResponse<ApiResponse<T>>) => Promise<T>) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const result = await handler(req, res);
      res.status(200).json({ data: result });
    } catch (error) {
      let message = '알 수 없는 오류';
      let statusCode = 500;

      if (error instanceof CustomError) {
        message = error.message || '서버 내부 오류';
        statusCode = error.statusCode || 500;
      }
      res.status(statusCode).json({
        message,
      });
    }
  };
