import type { Photo } from '@/types/album';
import tempImg from '@/assets/images/temp.png';

export const albumData: Photo[] = Array.from({ length: 20 }, (_, index) => ({
  id: `album-${index + 1}`,
  title: '강아지 귀여워',
  img: tempImg,
  createdAt: `2025-06-${1 + index}`,
}));
