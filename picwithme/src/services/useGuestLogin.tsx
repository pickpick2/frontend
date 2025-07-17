import { useMutation } from '@tanstack/react-query';
import { axiosInstance, type Response } from './axios';

interface GuestLoginResponse {
  memberId: number;
}

const guestLogin = (): Promise<Response<GuestLoginResponse>> => {
  return axiosInstance.post('/api/auth/guest').then((res) => res.data);
};

export function useGuestLogin(onSuccess: () => void, onError?: () => void) {
  return useMutation({
    mutationFn: guestLogin,
    onSuccess: () => {
      onSuccess(); // 컴포넌트에서 정의한 행동 실행
    },
    onError: (err) => {
      console.error(err);
      alert('게스트 로그인 실패! 다시 시도해주세요.');
      onError?.();
    },
  });
}
