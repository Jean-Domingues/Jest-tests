import { Product } from '../product';

describe('product', () => {
  describe('given a product name and product price', () => {
    const productName = 'camiseta';
    const productPrice = 20;
    describe('and given a product instance with this values', () => {
      const sut = new Product(productName, productPrice);
      it('should be contain a price', () => {
        expect(sut).toHaveProperty('price', productPrice);
      });

      it('should be contain a name', () => {
        expect(sut).toHaveProperty('name', productName);
      });
    });
  });
});
