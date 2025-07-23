import { useEffect, useRef } from 'react';
import Tabs from '@/components/ui/Tabs';
import PenIcon from '@/assets/icons/pen.svg?react';
import StickerIcon from '@/assets/icons/sticker.svg?react';
import TextIcon from '@/assets/icons/text.svg?react';
import PenSettings from '@/components/draw/PenSettings';
import StickerSettings from '@/components/draw/StickerSettings';
import TextSettings from '@/components/draw/TextSettings';
import CanvasWrapper from '@/components/draw/CanvasWrapper';
import useFabricCanvasRef from '@/hooks/canvas/useFabricCanvasRef';
import useFabricTools from '@/hooks/canvas/useFabricTools';
import { useSocketStore } from '@/stores/useSocketStore';

// TODO: 추후 서버에서 캔버스 비율 받아오기
const CANVAS_ASPECT = 2 / 3; // 2:3 비율 (가로:세로)
const ROOM_ID = 123; // 임시 룸 ID, 추후 전역에서 관리

const DrawRoom = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvas = useFabricCanvasRef(canvasRef, CANVAS_ASPECT);
  const { setDrawingMode, changePenColor, changePenWidth, addSticker, addText } = useFabricTools(fabricCanvas);

  const connect = useSocketStore((state) => state.connect);
  const disconnect = useSocketStore((state) => state.disconnect);

  useEffect(() => {
    connect(ROOM_ID);

    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  const handleTabChange = (tabId: string) => {
    switch (tabId) {
      case 'pen':
        setDrawingMode(true);
        break;
      case 'sticker':
        setDrawingMode(false);
        break;
      case 'text':
        setDrawingMode(false);
        break;
    }
  };

  return (
    <div className='flex h-full flex-col overflow-hidden'>
      <CanvasWrapper canvasRef={canvasRef} canvasAspect={CANVAS_ASPECT} />

      <Tabs
        tabList={[
          { tabId: 'pen', icon: PenIcon },
          { tabId: 'sticker', icon: StickerIcon },
          { tabId: 'text', icon: TextIcon },
        ]}
        tabPanels={[
          <PenSettings onColorChange={changePenColor} onWidthChange={changePenWidth} />,
          <StickerSettings onAddSticker={addSticker} />,
          <TextSettings onAddText={addText} />,
        ]}
        onTabChange={handleTabChange}
      />
    </div>
  );
};

export default DrawRoom;
