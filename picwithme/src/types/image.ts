export type Box = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export interface Image {
  imageUrl: string;
  boxes: Box[];
}
