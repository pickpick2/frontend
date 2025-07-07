import { useEffect, useRef } from 'react';
import * as fabric from 'fabric';
import Tabs from '@/components/ui/Tabs';
import PenIcon from '@/assets/icons/pen.svg?react';
import StickerIcon from '@/assets/icons/sticker.svg?react';
import TextIcon from '@/assets/icons/text.svg?react';
import tempImg from '@/assets/images/temp.png';
import PenSettings from '@/components/draw/PenSettings';
import StickerSettings from '@/components/draw/StickerSettings';
import TextSettings from '@/components/draw/TextSettings';

const DrawRoom = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvas = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current.parentElement;
    if (!container) return;

    // 부모 크기 측정 후 캔버스 해상도 동기화
    const { width, height } = container.getBoundingClientRect();
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    const canvas = new fabric.Canvas(canvasRef.current);
    fabricCanvas.current = canvas;

    canvas.isDrawingMode = true;

    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    canvas.freeDrawingBrush.width = 4;
    canvas.freeDrawingBrush.color = '#000000';

    return () => {
      canvas.dispose();
    };
  }, []);

  const handleTabChange = (tabId: string) => {
    if (!fabricCanvas.current) return;

    switch (tabId) {
      case 'pen':
        fabricCanvas.current.isDrawingMode = true;
        break;
      case 'sticker':
        fabricCanvas.current.isDrawingMode = false;
        break;
      case 'text':
        fabricCanvas.current.isDrawingMode = false;
        break;
    }
  };

  const handleColorChange = (colorHex: string) => {
    if (!fabricCanvas.current) return;

    fabricCanvas.current.freeDrawingBrush!.color = colorHex;
  };

  const handleWidthChange = (value: number[]) => {
    if (!fabricCanvas.current) return;

    fabricCanvas.current.freeDrawingBrush!.width = value[0];
  };

  const handleStickerClick = (stickerSrc: string) => {
    if (!fabricCanvas.current) return;

    const imgElement = document.createElement('img');
    imgElement.src = stickerSrc;

    const sticker = new fabric.FabricImage(imgElement);
    fabricCanvas.current.add(sticker);
    fabricCanvas.current.centerObject(sticker);
    fabricCanvas.current.setActiveObject(sticker);
  };

  const hadleAddText = (fontSize: number) => {
    if (!fabricCanvas.current) return;

    const text = new fabric.Textbox('텍스트 입력', {
      left: 50,
      top: 50,
      fontSize: fontSize,
      fill: '#000000',
      width: 200,
    });

    fabricCanvas.current.add(text);
    fabricCanvas.current.setActiveObject(text);
    fabricCanvas.current.renderAll();
  };

  return (
    <div className='flex h-full flex-col overflow-hidden'>
      <div className='relative flex-1'>
        <img src={tempImg} alt='촬영된 사진' className='absolute top-0 left-0 z-0 h-full w-full object-contain' />
        <canvas ref={canvasRef} className='absolute top-0 left-0 z-10' />
      </div>

      <Tabs
        tabList={[
          { tabId: 'pen', icon: PenIcon },
          { tabId: 'sticker', icon: StickerIcon },
          { tabId: 'text', icon: TextIcon },
        ]}
        tabPanels={[
          <PenSettings onColorChange={handleColorChange} onWidthChange={handleWidthChange} />,
          <StickerSettings onStickerClick={handleStickerClick} />,
          <TextSettings onAddText={hadleAddText} />,
        ]}
        onTabChange={handleTabChange}
      />
    </div>
  );
};

export default DrawRoom;
