import { AppProps } from 'next/app';
import userApi from '../api/userApi';
import { handleApiError } from '../utils/debug/errorHandler';

if (typeof window !== 'undefined') {
  // 클라이언트 환경에서만 전역 변수 설정
  global.userApi = userApi;
  global.handleApiError = handleApiError;
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
