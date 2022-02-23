import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  public socket: any;

  constructor() { }

  //* enviamos un token al backend
  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT, {
      auth: {
        token: 'cde'
      }
    })

    this.socket.emit('my message', 'Hello there from Angular.');
  };


  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

}
