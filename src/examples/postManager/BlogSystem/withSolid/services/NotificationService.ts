import { NotificationProtocol } from '../interfaces';

export class NotificationService implements NotificationProtocol {
  send(userName: string, message: string): void {
    return console.log(`O usuário ${userName} foi notificado sobre: ${message}`);
  }
}
