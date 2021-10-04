import env from '@common/env';
import { errorParser } from '@common/httpErrorParser';
import {
  createHttpApi,
  createHttpHeaderProvider,
  createTokenProvider,
  headerPipe,
} from 'ts-fe-toolkit';

export const tokenProvider = createTokenProvider('local', 'auth_token');

function createHeaderProvider() {
  return createHttpHeaderProvider()(headerPipe.contentTypeJson);
}
function createAuthHeaderProvider() {
  return createHttpHeaderProvider(tokenProvider)(headerPipe.contentTypeJson);
}

export const publicApi = createHttpApi(
  env.publicUrl,
  errorParser,
  createHeaderProvider,
);

export const baseApi = createHttpApi(
  env.baseApiUrl,
  errorParser,
  createHeaderProvider,
  true,
);

export const authApi = createHttpApi(
  env.baseApiUrl,
  errorParser,
  createAuthHeaderProvider,
);
