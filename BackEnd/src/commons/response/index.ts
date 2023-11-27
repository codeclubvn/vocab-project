import { HttpStatus, HttpException } from '@nestjs/common';
import { CreateLogger } from '../logger/index.logger';

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
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    console.log('-------------------------------');
    CreateLogger('Data trả về ==>', data);
    console.log('-------------------------------');
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
  console.log('-------------------------------');
  CreateLogger('Đang lỗi==>', error);
  console.log('-------------------------------');
  throw new HttpException(error.message, statusCode);
}
