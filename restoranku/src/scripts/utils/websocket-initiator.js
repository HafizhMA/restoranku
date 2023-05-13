import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler() {
    NotificationHelper.sendNotification({
      // menampilkan di notifikasi
      name: 'Selamat datang di restoran catalogue',
    });
  },
};

export default WebSocketInitiator;