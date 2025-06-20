import { useNavigate } from "react-router";

const FindId = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-[24px] font-bold text-[#A054FF]">아이디 찾기</h1>
      <form className="w-full max-w-sm flex flex-col gap-6">
        {/* 아이디 입력 */}
        <div className="relative">
          <input
            type="text"
            placeholder="아이디를 입력해주세요."
            className="w-full border-b border-gray-300 text-sm py-2 placeholder-gray-400 focus:outline-none"
          />
        </div>
      </form>

      <button
        type="submit"
        className="bg-[#A054FF] w-full max-w-sm text-white py-3 rounded-lg text-sm font-semibold shadow-md hover:bg-[#933bff] transition"
        onClick={() => navigate("/login")}
      >
        로그인 하러가기
      </button>
      <button
        type="submit"
        className="bg-[#A054FF] w-full max-w-sm  text-white py-3 rounded-lg text-sm font-semibold shadow-md hover:bg-[#933bff] transition"
        onClick={() => navigate("/findPw")}
      >
        비밀번호 찾기
      </button>
    </>
  );
};

export default FindId;
