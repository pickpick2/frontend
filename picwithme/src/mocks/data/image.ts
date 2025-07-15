import defaultImg from '@/assets/images/defaultImg.png';
import type { Image } from '@/types/image';

// 배경이미지 흰 색 칸 위치정보
export const testImage: Image = {
  id: 1,
  imageUrl: defaultImg,
  boxes: [
    { top: 23.3, left: 5.0, width: 45.0, height: 36.1 },
    { top: 3.3, left: 51.67, width: 45.0, height: 36.1 },
    { top: 60.6, left: 5.0, width: 45.0, height: 36.1 },
    { top: 40.6, left: 51.7, width: 45.0, height: 36.1 },
  ],
};

export const backImageList = Array.from({ length: 4 }, (_, index) => ({
  ...testImage,
  id: index,
}));
