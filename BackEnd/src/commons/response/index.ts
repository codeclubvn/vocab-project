import { HttpStatus, HttpException } from '@nestjs/common';

/**
 *  ResponseCustomError helps handle custom error overmaster
 * @param data is data response object or string
 * @param message is notice about status of the response
 * @param statusCode  default 200
 * @returns its will return response data
 */
export class ResponseCustomData<D> {
  data: D | D[];
  message: string;
  statusCode: number;
  constructor(data: D | D[], message: string, statusCode: HttpStatus = 200) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
    return this;
  }
}

/**
 *  ResponseCustomError helps handle custom error overmaster
 * @param err error in catch(error)
 * @param statusCode  default 404
 * @returns its will return response statusCode
 */
export function ResponseCustomError(
  error: { message: string },
  statusCode: HttpStatus = 400,
) {
  throw new HttpException(error.message, statusCode);
}
