import profileImg from '@/assets/images/profile.jpg';
import type { UserInRoom } from '@/types/room';

const user1: UserInRoom = {
  id: 'User One',
  name: '서로짱',
  img: profileImg,
  isHost: true,
  isReady: true,
};

const user2: UserInRoom = {
  id: 'User Two',
  name: '지독한 개구리',
  img: profileImg,
  isHost: false,
  isReady: false,
};
const user3: UserInRoom = {
  id: 'User Three',
  name: '사려깊은 펭귄',
  img: profileImg,
  isHost: false,
  isReady: false,
};
const user4: UserInRoom = {
  id: 'User Four',
  name: '오지랖 고래',
  img: profileImg,
  isHost: false,
  isReady: true,
};
const user5: UserInRoom = {
  id: 'User Five',
  name: '수다쟁이 도마뱀',
  img: profileImg,
  isHost: false,
  isReady: false,
};
const user6: UserInRoom = {
  id: 'User Six',
  name: '빵실 웰시코기',
  img: profileImg,
  isHost: false,
  isReady: true,
};

export const usersData: UserInRoom[] = [user1, user2, user3, user4, user5, user6];
