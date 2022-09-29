import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from '../discount';

describe('discount', () => {
  describe('given a instance from NoDiscount', () => {
    const sut = new NoDiscount();
    describe('and given a price', () => {
      const price = 99.8;
      describe('when we call the calculate method', () => {
        it('must return the same value', () => {
          expect(sut.calculate(price)).toBe(price);
        });
      });
    });
  });

  describe('given a instance from FiftyPercentDiscount', () => {
    const sut = new FiftyPercentDiscount();
    describe('and given a price', () => {
      const price = 99.8;
      describe('when we call the calculate method', () => {
        it('must return the half of value', () => {
          expect(sut.calculate(price)).toBe(price / 2);
        });
      });
    });
  });

  describe('given a instance from TenPercentDiscount', () => {
    const sut = new TenPercentDiscount();
    describe('and given a price', () => {
      const price = 99.8;
      describe('when we call the calculate method', () => {
        it('must return ninety percent of value', () => {
          expect(sut.calculate(price)).toBe(price * 0.9);
        });
      });
    });
  });
});
