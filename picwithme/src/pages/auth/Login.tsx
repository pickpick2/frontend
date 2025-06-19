// src/pages/auth/Login.tsx
import { useState } from "react";
import AuthLayout from "@/components/Layouts/AuthLayout";
import Eye from "@/assets/icons/eyes.svg?react";
import Eyeoff from "@/assets/icons/sreyes.svg?react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout>
      <h1 className="text-[24px] font-bold text-[#A054FF]">로그인</h1>

      <form className="w-full max-w-sm flex flex-col gap-6">
        {/* 아이디 입력 */}
        <div className="relative">
          <input
            type="text"
            placeholder="아이디를 입력해주세요."
            className="w-full border-b border-gray-300 text-sm py-2 placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요."
            className="w-full border-b border-gray-300 text-sm py-2 placeholder-gray-400 focus:outline-none pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400"
          >
            {showPassword ? <Eye /> : <Eyeoff />}
          </button>
        </div>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          className="bg-[#A054FF] text-white py-3 rounded-lg text-sm font-semibold shadow-md hover:bg-[#933bff] transition"
        >
          로그인
        </button>
      </form>

      {/* 링크 */}
      <div className="text-sm text-gray-500 flex gap-2">
        <a href="/find-id" className="hover:underline">
          아이디 찾기
        </a>
        <span>|</span>
        <a href="/find-password" className="hover:underline">
          비밀번호 찾기
        </a>
      </div>
    </AuthLayout>
  );
};

export default Login;
