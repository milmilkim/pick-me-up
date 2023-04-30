export class CustomError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends CustomError {
  constructor(message: string = '잘못된 요청입니다.', statusCode: number = 400) {
    super(message, statusCode);
    this.statusCode = statusCode;
    this.message = message;
  }
}
