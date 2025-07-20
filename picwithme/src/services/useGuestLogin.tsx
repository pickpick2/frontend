import { useMutation } from '@tanstack/react-query';
import { axiosInstance, type Response } from './axios';
import { authApi } from '@/constants/api';

interface GuestLoginResponse {
  memberId: number;
  accessToken: string;
}

const guestLogin = (): Promise<Response<GuestLoginResponse>> => {
  return axiosInstance.post(authApi.GUESTLOGIN).then((res) => res.data);
};

export function useGuestLogin(onSuccess: (data: Response<GuestLoginResponse>) => void, onError?: () => void) {
  return useMutation({
    mutationFn: guestLogin,
    onSuccess: (data) => {
      onSuccess(data); // 컴포넌트에서 정의한 행동 실행
    },
    onError: (err: any) => {
      // 서버에서 응답 메시지가 있을 경우 추출해서 보여주기
      const msg = err?.response?.data?.message || '게스트 로그인 실패';
      alert(msg);
      onError?.();
    },
  });
}
