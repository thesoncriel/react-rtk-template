/**
 * 앱 환경 변수 설정 모음
 */
interface AppEnvironment {
  /**
   * 운영 환경 여부
   */
  production: boolean;
  /**
   * 로컬 개발 환경 여부
   */
  development: boolean;
  /**
   * 앱 버전
   */
  version: string;
  /**
   * 프로젝트 내 정적 에샛 경로
   */
  publicUrl: string;
  /**
   * API 기본 경로
   */
  baseApiUrl: string;
}

const nodeEnv = process.env.REACT_APP_ENV;

const env: AppEnvironment = {
  production: nodeEnv === 'production',
  development: nodeEnv === 'development',
  version: process.env.REACT_APP_VERSION || '',
  publicUrl: process.env.PUBLIC_URL,
  baseApiUrl: process.env.REACT_APP_BASE_API_URL || '',
};

export default env;
