import tempImg from '@/assets/images/temp.png';

interface CanvasWrapperProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  canvasAspect?: number;
}

const CanvasWrapper: React.FC<CanvasWrapperProps> = ({ canvasRef, canvasAspect = 2 / 3 }) => {
  return (
    <div className='relative mx-auto flex-1' style={{ aspectRatio: canvasAspect }}>
      <img src={tempImg} alt='촬영된 사진' className='absolute top-0 left-0 z-0 h-full w-full object-contain' />
      <canvas ref={canvasRef} className='absolute top-0 right-0 left-0 z-10' />
    </div>
  );
};

export default CanvasWrapper;
