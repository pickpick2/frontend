import type { UserList } from '@/types/room';
import { create } from 'zustand';
import { connectSocket, disconnectSocket, sendDrawData } from '@/services/socket';
import type { DrawPayload } from '@/types/draw';

type HandlerMap = {
  [key: string]: (data: unknown) => void;
};

interface SocketState {
  isConnected: boolean;
  userList: UserList[];
  handlers: HandlerMap;

  setConnected: (value: boolean) => void;
  setUserList: (users: UserList[]) => void;
  setHandlers: (map: HandlerMap) => void;

  connect: (roomId: number) => void;
  disconnect: () => void;

  sendDrawData: (payload: DrawPayload) => void;
}

export const useSocketStore = create<SocketState>((set) => ({
  isConnected: false,
  userList: [],
  handlers: {},

  setConnected: (v) => set({ isConnected: v }),
  setUserList: (users) => set({ userList: users }),
  setHandlers: (handlers) => set((s) => ({ handlers: { ...s.handlers, ...handlers } })),

  connect: (roomId: number) => {
    connectSocket(roomId, () => set({ isConnected: true }));
  },
  disconnect: () => {
    disconnectSocket(() => set({ isConnected: false, userList: [] }));
  },

  sendDrawData: (payload) => {
    sendDrawData(payload);
  },
}));
