/* eslint-disable jest/no-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { ShoppingCartProtocol } from '../interfaces/shopping-cart-protocol';
import { CartItem } from '../interfaces/cart-item';
import { Order } from '../order';
import { MessagingProtocol } from '../interfaces/messaging-protocol';
import { PersistencyProtocol } from '../interfaces/persistency-protocol';
import { CustomerOrder } from '../interfaces/customer-protocol';

const shoppingCartMock: ShoppingCartProtocol = {
  items: [] as CartItem[],
  addItem: (item: CartItem) => {},
  removeItem: (index: number) => {},
  total: () => 20,
  totalWithDicount: () => 20,
  isEmpty: () => false,
  clear: () => {},
};

const messagingMock: MessagingProtocol = {
  sendMessage: (msg: string) => {},
};

const persistencyMock: PersistencyProtocol = {
  saveOrder: () => {},
};

const customerMock: CustomerOrder = {
  getIDN: () => '111.111.111-11',
  getName: () => 'Jean Domingues',
};

describe('order', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  describe('given an order instance', () => {
    const sut = new Order(shoppingCartMock, messagingMock, persistencyMock, customerMock);

    describe('when we call the checkout method', () => {
      describe('and shopping cart is empty', () => {
        it('must be log a message, and dont close the order', () => {
          jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValue(true);
          const consoleMock = jest.spyOn(console, 'log');

          sut.checkout();
          expect(consoleMock).toHaveBeenCalledWith('Seu carrinho está vazio');
          expect(sut.orderStatus).toBe('open');
        });
      });

      describe('and the shopping cart has items', () => {
        it('must be closed the order', () => {
          sut.checkout();
          expect(sut.orderStatus).toBe('closed');
        });

        it('should log the client name and IDN', () => {
          const consoleMock = jest.spyOn(console, 'log');
          sut.checkout();
          expect(consoleMock).toHaveBeenCalledWith(
            'O cliente é:',
            customerMock.getName(),
            customerMock.getIDN(),
          );
        });

        it('should call the send message', () => {
          const sendMessageSpy = jest.spyOn(messagingMock, 'sendMessage');
          sut.checkout();
          expect(sendMessageSpy).toHaveBeenCalledWith(
            `Seu pedido com total de ${shoppingCartMock.totalWithDicount()} foi recebido.`,
          );
        });

        it('should save the order', () => {
          const persistencySpy = jest.spyOn(persistencyMock, 'saveOrder');
          sut.checkout();
          expect(persistencySpy).toHaveBeenCalledTimes(1);
        });

        it('must be clear the shopping cart', () => {
          const shoppingCartSpy = jest.spyOn(shoppingCartMock, 'clear');
          sut.checkout();
          expect(shoppingCartSpy).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
