export interface NotificationProtocol {
  send(userName: string, message: string): void;
}
