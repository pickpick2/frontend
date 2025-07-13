import defaultImg from '@/assets/images/default.png';
import Frame1 from '@/assets/images/frames/Frame1x4.png';
import Frame2 from '@/assets/images/frames/Frame2x2.png';
import Frame3 from '@/assets/images/frames/Frame2x4.png';

export const FrameData = [
  {
    id: '1',
    img: Frame1,
    name: 'frame1x4',
    userList: [
      { id: '1', name: '유저1', img: defaultImg },
      { id: '2', name: '유저2', img: defaultImg },
      { id: '3', name: '유저3', img: defaultImg },
    ],
  },
  {
    id: '2',
    img: Frame2,
    name: 'frame2x2',
    userList: [
      { id: '6', name: '유저4', img: defaultImg },
      { id: '7', name: '유저5', img: defaultImg },
    ],
  },
  {
    id: '3',
    img: Frame3,
    name: 'frame2x4',
    userList: [
      { id: '8', name: '유저6', img: defaultImg },
      { id: '9', name: '유저6', img: defaultImg },
      { id: '10', name: '유저6', img: defaultImg },
      { id: '11', name: '유저6', img: defaultImg },
      { id: '12', name: '유저6', img: defaultImg },
      { id: '12', name: '유저6', img: defaultImg },
      { id: '12', name: '유저6', img: defaultImg },
      { id: '12', name: '유저6', img: defaultImg },
    ],
  },
];
