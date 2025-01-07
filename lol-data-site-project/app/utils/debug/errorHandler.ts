export const handleApiError = (error: any): string => {
    if (error.response) {
      // 서버 응답 에러
      const { status, data } = error.response;
      switch (status) {
        case 400:
          return data.message || 'Bad Request';
        case 401:
          return 'Unauthorized. Please log in again.';
        case 500:
          return 'Server Error. Please try again later.';
        default:
          return 'An unexpected error occurred.';
      }
    } else if (error.request) {
      // 네트워크 에러
      return 'Network error. Please check your connection.';
    } else {
      // 기타 에러
      return error.message;
    }
  };
  