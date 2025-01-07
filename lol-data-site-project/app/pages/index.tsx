import { GetServerSideProps } from 'next';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

// 서버 측에서 실행되는 함수
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;

  // 쿠키에서 토큰 가져오기 (예: 'auth-token' 이름의 쿠키)
  const token = req.cookies['auth-token'];

  if (!token) {
    // 토큰이 없으면 로그인 페이지로 리다이렉트
    return {
      redirect: {
        destination: '/login', // 리다이렉트할 경로
        permanent: false, // 302 리다이렉트 (임시)
      },
    };
  }

  // 토큰이 있으면 페이지를 렌더링
  return {
    props: {}, // 페이지에 전달할 props
  };
};

export default HomePage;
