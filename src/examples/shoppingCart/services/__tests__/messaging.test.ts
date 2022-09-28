import { Messaging } from '../messaging';

describe('messaging', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  describe('given a Messaging instance', () => {
    // System under test
    const sut = new Messaging();
    describe('and given a message', () => {
      const message = 'uma mensagem qualquer';

      describe('when invoke the sendMessage method', () => {
        it('should return undefined', () => {
          expect(sut.sendMessage(message)).toBeUndefined();
        });

        it('should call console.log once', () => {
          const consoleMock = jest.spyOn(console, 'log');
          sut.sendMessage(message);

          expect(consoleMock).toHaveBeenCalledTimes(1);
        });

        it('should call console.log with the message parm', () => {
          const consoleMock = jest.spyOn(console, 'log');
          sut.sendMessage(message);

          expect(consoleMock).toHaveBeenCalledWith('Mensagem enviada:', message);
        });
      });
    });
  });
});
