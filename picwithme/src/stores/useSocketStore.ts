import type { UserList } from '@/types/room';
import { create } from 'zustand';

type HandlerMap = {
  [key: string]: (data: any) => void;
};

interface SocketState {
  isConnected: boolean;
  userList: UserList[];
  handlers: HandlerMap;
  setConnected: (value: boolean) => void;
  setUserList: (users: UserList[]) => void;
  setHandlers: (map: HandlerMap) => void;
}

export const useSocketStore = create<SocketState>((set) => ({
  isConnected: false,
  userList: [],
  handlers: {},
  setConnected: (v) => set({ isConnected: v }),
  setUserList: (users) => set({ userList: users }),
  setHandlers: (handlers) => set((s) => ({ handlers: { ...s.handlers, ...handlers } })),
}));
