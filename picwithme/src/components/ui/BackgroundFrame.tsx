import { useEffect, useRef, useState } from 'react';
import type { Box } from '@/types/image';

interface Props {
  imageUrl: string;
  boxes: Box[];
}

const BackgroundFrame = ({ imageUrl, boxes }: Props) => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    // 웹캠 스트림 요청
    const getWebcam = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        setStream(mediaStream);
      } catch (err) {
        console.error('웹캠 접근 실패', err);
      }
    };

    getWebcam();
  }, []);

  useEffect(() => {
    if (!stream) return;
    // 모든 video 태그에 같은 스트림 연결
    videoRefs.current.forEach((video) => {
      if (video) {
        video.srcObject = stream;
      }
    });
  }, [stream]);

  return (
    <div className='relative aspect-[2/3] w-full max-w-[600px]'>
      <img src={imageUrl} alt='배경 이미지' className='absolute inset-0 h-full w-full object-fill' />
      {boxes.map((box, idx) => (
        <video
          key={idx}
          ref={(element) => {
            if (element) videoRefs.current[idx] = element;
          }}
          autoPlay
          muted
          playsInline
          className='absolute scale-x-[-1] overflow-hidden rounded-lg object-cover'
          style={{
            top: `${box.top}%`,
            left: `${box.left}%`,
            width: `${box.width}%`,
            height: `${box.height}%`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundFrame;
