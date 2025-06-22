export interface User {
  id: string;
  name: string;
  img: string;
}

export interface UserInRoom extends User {
  isHost: boolean;
  isReady: boolean;
}
