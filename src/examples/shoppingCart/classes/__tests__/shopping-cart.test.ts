import { Discount } from '../discount';
import { ShoppingCart } from '../shopping-cart';

class FakeDiscount extends Discount {}
const products = [
  { name: 'lapis', price: 2 },
  { name: 'borracha', price: 3 },
  { name: 'caderno', price: 15 },
];

describe('shopping cart', () => {
  describe('given a discount intance for shopping cart', () => {
    const discountInstance = new FakeDiscount();

    describe('and given a shopping cart instance without products', () => {
      const sut = new ShoppingCart(discountInstance);

      describe('when we call the method isEmpty', () => {
        it('should return true', () => {
          expect(sut.isEmpty()).toBe(true);
        });
      });
    });

    describe('and given a shopping cart with 3 products', () => {
      const sut = new ShoppingCart(discountInstance);

      sut.addItem(products[0]);
      sut.addItem(products[1]);
      sut.addItem(products[2]);

      describe('when we call the method total', () => {
        it('must return 20', () => {
          expect(sut.total()).toBe(20);
        });
      });

      describe('when we call the method totalWithDiscount', () => {
        it('must return 20 too', () => {
          expect(sut.totalWithDicount()).toBe(20);
        });
      });

      describe('when we get the items', () => {
        it('must equal to products array', () => {
          expect(sut.items).toStrictEqual(products);
        });
      });

      describe('when we call the method isEmpty', () => {
        it('should return false', () => {
          expect(sut.isEmpty()).toBe(false);
        });
      });
    });

    describe('and given a shopping cart with 1 product', () => {
      const sut = new ShoppingCart(discountInstance);
      sut.addItem(products[0]);

      describe('when we remove this product', () => {
        sut.removeItem(0);

        it('should is empty', () => {
          expect(sut.isEmpty()).toBe(true);
        });
      });
    });

    describe('and given an another shopping cart with 3 products', () => {
      const sut = new ShoppingCart(discountInstance);
      sut.addItem(products[0]);
      sut.addItem(products[1]);
      sut.addItem(products[2]);

      describe('when we call the clear shopping cart', () => {
        sut.clear();
        it('should is empty', () => {
          expect(sut.isEmpty()).toBe(true);
        });
      });
    });
  });
});
