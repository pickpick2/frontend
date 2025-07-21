import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import type { DrawPayload } from '@/types/draw';

let stompClient: Client | null = null;

export const connectSocket = (roomId: number, onConnect: () => void) => {
  const socket = new SockJS(import.meta.env.VITE_BASE_URL + '/wss/connection');
  const token = sessionStorage.getItem('accessToken');

  stompClient = new Client({
    webSocketFactory: () => socket,
    connectHeaders: {
      Authorization: `Bearer ${token}`,
      roomId: roomId.toString(),
    },
    onConnect: () => {
      onConnect();
    },
    onStompError: (frame) => {
      console.error('STOMP Error:', frame);
    },
  });

  stompClient.activate();
};

export const disconnectSocket = (onDisconnect: () => void) => {
  if (stompClient) {
    stompClient.deactivate();
    stompClient = null;
    onDisconnect();
  }
};

export const getStompClient = () => stompClient;

export const sendDrawData = (payload: DrawPayload) => {
  if (!stompClient || !stompClient.connected) {
    console.warn('STOMP client is not connected');
    return;
  }

  stompClient.publish({
    destination: '/app/decor/pen',
    body: JSON.stringify(payload),
  });
};
