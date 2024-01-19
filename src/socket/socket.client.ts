import { Injectable } from '@nestjs/common';
import { Socket, io } from 'socket.io-client';

@Injectable()
export class SocketClient {
  public socketClient: Socket;

  constructor() {
    this.socketClient = io('http://localhost:4000');
  }

  onModuleInit() {
    this.socketClient.on('connect', () => {
      console.log('Connected to Gateway');
    });
    this.socketClient.on('onMessage', (payload: any) => {
      console.log(payload);
    });
  }
}
