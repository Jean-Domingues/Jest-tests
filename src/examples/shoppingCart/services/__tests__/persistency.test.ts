import { Persistency } from '../persistency';

describe('persistency', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  describe('given a Persistency instance', () => {
    // System under test
    const sut = new Persistency();
    describe('when invoke the saveOrder method', () => {
      it('should return undefined', () => {
        expect(sut.saveOrder()).toBeUndefined();
      });

      it('log Pedido salvo com sucesso...', () => {
        const consoleMock = jest.spyOn(console, 'log');
        sut.saveOrder();

        expect(consoleMock).toHaveBeenCalledWith('Pedido salvo com sucesso...');
      });

      it('should call console.log once', () => {
        const consoleMock = jest.spyOn(console, 'log');
        sut.saveOrder();

        expect(consoleMock).toHaveBeenCalledTimes(1);
      });
    });
  });
});
