import { useNavigate } from 'react-router';
import { useConsentStore } from '@/stores/useConsentStore';
import Button from '@/components/ui/Button';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const setAgreed = useConsentStore((state) => state.setAgreed);

  const handleAgree = () => {
    setAgreed(true);
    navigate('/auth/signup');
  };

  return (
    <>
      <header className='text-heading1 font-bold'>개인정보처리방침</header>
      <p>
        [Pic With Me] (이하 "서비스")는 사용자의 개인정보를 보호하며, 관련 법률을 준수하기 위해 다음과 같이
        개인정보처리방침을 마련하였습니다.
      </p>
      <p>
        <span className='text-heading4 font-semibold'>개인정보 수집 항목 및 목적</span>
        <br /> 사용자는 본 서비스를 이용하기 위해 아래와 같은 개인정보를 수집합니다: 이름, 이메일, 연락처: 서비스 제공을
        위한 기본 정보 수집 수집된 개인정보는 서비스 제공, 고객 지원, 안전 관리를 위한 목적으로 사용됩니다.
      </p>
      <p>
        <span className='text-heading4 font-semibold'>개인정보의 보유 및 이용 기간</span>
        <br /> 개인정보는 서비스 제공을 위해 필요한 기간 동안 보유되며, 사용자가 서비스 탈퇴를 요청하거나 이용이 종료된
        경우 즉시 삭제됩니다. 법적 의무가 있을 경우 해당 정보는 요구되는 기간 동안 보관됩니다.
      </p>
      <p>
        <span className='text-heading4 font-semibold'>개인정보의 제3자 제공 및 처리 위탁</span>
        <br /> 본 서비스는 제3자에게 개인정보를 제공하지 않습니다. 다만, 외부 업체에 의뢰하여 서비스 제공, 결제 처리,
        마케팅 활동을 할 수 있습니다. 개인정보 처리 위탁 시, 외부 업체에 적절한 보호조치를 취하며, 사용자의 동의를
        받습니다.
      </p>
      <Button onClick={handleAgree}>위 사항을 읽고 동의합니다.</Button>
    </>
  );
};

export default PrivacyPolicy;
