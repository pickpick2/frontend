import * as fabric from 'fabric';
import { useCallback } from 'react';

const useFabricTools = (fabricCanvasRef: React.RefObject<fabric.Canvas | null>) => {
  const setDrawingMode = useCallback(
    (drawingMode: boolean) => {
      if (!fabricCanvasRef.current) return;

      fabricCanvasRef.current.isDrawingMode = drawingMode;
    },
    [fabricCanvasRef]
  );

  const changePenColor = useCallback(
    (colorHex: string) => {
      if (!fabricCanvasRef.current) return;

      fabricCanvasRef.current.freeDrawingBrush!.color = colorHex;
    },
    [fabricCanvasRef]
  );

  const changePenWidth = useCallback(
    (value: number[]) => {
      if (!fabricCanvasRef.current) return;

      fabricCanvasRef.current.freeDrawingBrush!.width = value[0];
    },
    [fabricCanvasRef]
  );

  const addSticker = useCallback(
    (stickerSrc: string) => {
      if (!fabricCanvasRef.current) return;

      const imgElement = document.createElement('img');
      imgElement.src = stickerSrc;

      const sticker = new fabric.FabricImage(imgElement);
      fabricCanvasRef.current.add(sticker);
      fabricCanvasRef.current.centerObject(sticker);
      fabricCanvasRef.current.setActiveObject(sticker);
    },
    [fabricCanvasRef]
  );

  const addText = useCallback(
    (fontSize: number) => {
      if (!fabricCanvasRef.current) return;

      const text = new fabric.Textbox('텍스트 입력', {
        left: 50,
        top: 50,
        fontSize: fontSize,
        fill: '#000000',
        width: 200,
      });

      fabricCanvasRef.current.add(text);
      fabricCanvasRef.current.setActiveObject(text);
      fabricCanvasRef.current.renderAll();
    },
    [fabricCanvasRef]
  );

  return {
    setDrawingMode,
    changePenColor,
    changePenWidth,
    addSticker,
    addText,
  };
};

export default useFabricTools;
