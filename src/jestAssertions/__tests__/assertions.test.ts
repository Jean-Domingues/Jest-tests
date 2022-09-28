/* eslint-disable jest/max-expects */
describe('test assertions', () => {
  it('with primitive values', () => {
    const number = 2;

    expect(number * 2).toBe(4);
    expect(number * 2).toBeGreaterThan(2);
    expect(number * 2).toBeGreaterThanOrEqual(2);
    expect(number * 2).toBeLessThan(6);
    expect(number * 2).toBeLessThanOrEqual(4);

    expect(number).toHaveProperty('toString');
  });

  it('with objects values', () => {
    const person = { name: 'jean', age: 21 };
    const copyOfPerson = { ...person };

    expect(person).toStrictEqual(copyOfPerson);
    expect(person).toHaveProperty('name');
    expect(person).toHaveProperty('age', 21);
    expect(person).not.toHaveProperty('age', 22);
  });
});
