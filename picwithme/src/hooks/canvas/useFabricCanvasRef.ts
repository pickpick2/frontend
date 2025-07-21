import * as fabric from 'fabric';
import { useCallback, useEffect, useRef } from 'react';
import { useSocketStore } from '@/stores/useSocketStore';

const ROOM_ID = 123; // 임시 룸 ID, 추후 전역에서 관리

const useFabricCanvasRef = (canvasRef: React.RefObject<HTMLCanvasElement | null>, canvasAspect: number) => {
  const fabricCanvas = useRef<fabric.Canvas | null>(null);

  const sendDrawData = useSocketStore((state) => state.sendDrawData);

  const emitDraw = useCallback(
    (pointer: { x: number; y: number }) => {
      if (!fabricCanvas.current) return;

      sendDrawData({
        roomId: ROOM_ID,
        tool: 'PEN',
        color: fabricCanvas.current.freeDrawingBrush!.color,
        strokeWidth: fabricCanvas.current.freeDrawingBrush!.width,
        x: pointer.x,
        y: pointer.y,
      });
    },
    [sendDrawData]
  );

  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current.parentElement;
    if (!container) return;

    // 부모 크기 측정 후 캔버스 해상도 동기화
    const { height } = container.getBoundingClientRect();
    canvasRef.current.height = height;
    canvasRef.current.width = height * canvasAspect;

    const canvas = new fabric.Canvas(canvasRef.current);
    fabricCanvas.current = canvas;

    canvas.isDrawingMode = true;

    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    canvas.freeDrawingBrush.width = 4;
    canvas.freeDrawingBrush.color = '#000000';

    let isDrawing = false;

    canvas.on('mouse:down', (opt) => {
      if (canvas.isDrawingMode) {
        isDrawing = true;
        const pointer = canvas.getScenePoint(opt.e);
        console.log('🟢 그리기 시작:', pointer);
        emitDraw(pointer);
      }
    });

    canvas.on('mouse:move', (opt) => {
      if (canvas.isDrawingMode && isDrawing) {
        const pointer = canvas.getScenePoint(opt.e);
        console.log('✏️ 현재 그리는 위치:', pointer);
        emitDraw(pointer);
      }
    });

    canvas.on('mouse:up', (opt) => {
      if (canvas.isDrawingMode) {
        isDrawing = false;
        const pointer = canvas.getScenePoint(opt.e);
        console.log('🔴 그리기 끝:', pointer);
        emitDraw(pointer);
      }
    });

    return () => {
      canvas.dispose();
    };
  }, [canvasRef, canvasAspect, emitDraw]);

  return fabricCanvas;
};

export default useFabricCanvasRef;
