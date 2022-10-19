/* eslint-disable jest/no-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { ShoppingCartProtocol } from '../interfaces/shopping-cart-protocol';
import { CartItem } from '../interfaces/cart-item';
import { Order } from '../order';
import { MessagingProtocol } from '../interfaces/messaging-protocol';
import { PersistencyProtocol } from '../interfaces/persistency-protocol';
import { CustomerOrder } from '../interfaces/customer-protocol';

const emptyShoppingCartMock: ShoppingCartProtocol = {
  items: [] as CartItem[],
  addItem: (item: CartItem) => {},
  removeItem: (index: number) => {},
  total: () => 2,
  totalWithDicount: () => 2,
  isEmpty: () => true,
  clear: () => {},
};

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

  describe('given a order instance with a empty shopping cart', () => {
    const sut = new Order(emptyShoppingCartMock, messagingMock, persistencyMock, customerMock);
    describe('when we call the checkout method', () => {
      it('must be log', () => {
        const consoleMock = jest.spyOn(console, 'log');

        sut.checkout();
        expect(consoleMock).toHaveBeenCalledWith('Seu carrinho está vazio');
      });
    });
  });

  describe('given a order instance with items in the shopping cart', () => {
    const sut = new Order(shoppingCartMock, messagingMock, persistencyMock, customerMock);
    describe('when we call the checkout method', () => {
      it('must be closed the order', () => {
        sut.checkout();
        expect(sut.orderStatus).toBe('closed');
      });

      it('must be log', () => {
        const consoleMock = jest.spyOn(console, 'log');

        sut.checkout();
        expect(consoleMock).toHaveBeenCalledWith(
          'O cliente é:',
          customerMock.getName(),
          customerMock.getIDN(),
        );
      });

      it('must be call the send message', () => {
        const sendMessageSpy = jest.spyOn(messagingMock, 'sendMessage');
        sut.checkout();
        expect(sendMessageSpy).toHaveBeenCalledWith(
          `Seu pedido com total de ${shoppingCartMock.totalWithDicount()} foi recebido.`,
        );
      });

      it('must be save the order', () => {
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
