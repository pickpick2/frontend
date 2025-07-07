import { useEffect, useRef, useState } from 'react';
import Camera from '@/assets/icons/camera.svg?react';
import type { Box } from '@/types/image';

interface Props {
  imageUrl: string;
  boxes: Box[];
}

const Video = ({ imageUrl, boxes }: Props) => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImages, setCapturedImages] = useState<(string | null)[]>(Array(boxes.length).fill(null));

  useEffect(() => {
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
    videoRefs.current.forEach((video) => {
      if (video) {
        video.srcObject = stream;
      }
    });
  }, [stream]);

  const capturePhoto = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 좌우반전 복구 후 비디오 프레임 복사
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/png');

    setCapturedImages((prev) => {
      const copy = [...prev];
      copy[index] = dataUrl;
      return copy;
    });
  };

  return (
    <div className='relative aspect-[2/3] w-11/12 max-w-[600px]'>
      <img src={imageUrl} alt='배경 이미지' className='absolute inset-0 h-full w-full object-fill' />
      {boxes.map((box, idx) => (
        <div
          key={idx}
          className='absolute'
          style={{
            top: `${box.top}%`,
            left: `${box.left}%`,
            width: `${box.width}%`,
            height: `${box.height}%`,
          }}
        >
          {capturedImages[idx] ? (
            <img src={capturedImages[idx]!} alt={`캡처된 이미지 ${idx}`} className='h-full w-full object-cover' />
          ) : (
            <video
              ref={(el) => {
                if (el) videoRefs.current[idx] = el;
              }}
              autoPlay
              muted
              playsInline
              className='h-full w-full scale-x-[-1] overflow-hidden object-cover'
            />
          )}
          <button
            onClick={() => capturePhoto(idx)}
            className='bg-primary-default absolute right-1 bottom-1 z-10 rounded-full px-2 py-2 text-xs shadow'
          >
            <Camera className='text-white' />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Video;
