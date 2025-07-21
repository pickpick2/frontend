export interface DrawPayload {
  roomId: number;
  tool: 'PEN' | 'ERASER';
  color: string;
  strokeWidth: number;
  x: number;
  y: number;
}
