import defaultImg from '@/assets/images/defaultImg.png';
import type { Image } from '@/types/image';

export const testImage: Image = {
  imageUrl: defaultImg,
  boxes: [
    { top: 23.3, left: 5.0, width: 45.0, height: 36.1 },
    { top: 3.3, left: 51.67, width: 45.0, height: 36.1 },
    { top: 60.6, left: 5.0, width: 45.0, height: 36.1 },
    { top: 40.6, left: 51.7, width: 45.0, height: 36.1 },
  ],
};
