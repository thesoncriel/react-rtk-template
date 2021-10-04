import { AxiosError } from 'axios';
import { HttpApiErrorParser } from 'ts-fe-toolkit';

// TODO: 네트워킹 오류 파싱 로직이 확인되면 완성 할 것 - theson
export const errorParser: HttpApiErrorParser<AxiosError> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parse(_: AxiosError<any>): Error {
    return new Error();
  },
  throwOther<E extends Error>(err: E): never {
    throw err;
  },
  interrupt: <E extends Error>(_error: E) => Promise.resolve(),
};
