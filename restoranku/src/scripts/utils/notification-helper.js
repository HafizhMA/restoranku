const NotificationHelper = {
  sendNotification({
    name,
  }) {
    if (!this._checkAvailability()) {
      console.log('Notification not supported in this browser');
      return;
    }

    if (!this._checkPermission()) {
      console.log('User did not yet granted permission');
      this._requestPermission();
      return;
    }

    this._showNotification({
      name,
    });
  },

  _checkAvailability() {
    return 'Notification' in window;
  },

  _checkPermission() {
    return Notification.permission === 'granted';
  },

  async _requestPermission() {
    const status = await Notification.requestPermission();

    if (status === 'denied') {
      console.log('Notification Denied');
    }

    if (status === 'default') {
      console.log('Permission closed');
    }
  },

  async _showNotification({
    // menampilkan pesan yang ada pada file websocket-initiator
    name,
  }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(name);
  },
};

export default NotificationHelper;