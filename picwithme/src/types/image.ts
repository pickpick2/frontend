export interface Box {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface Image {
  id: number;
  imageUrl: string;
  boxes: Box[];
}
