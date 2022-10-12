import { EnterpriseCustomer, IndividualCustomer } from '../customer';

describe('customer', () => {
  describe('given a name and CNPJ', () => {
    const name = 'Loja do joão';
    const cnpj = '00.000.000/0000-00';

    describe('given a instance from EnterpriseCustomer', () => {
      const sut = new EnterpriseCustomer(name, cnpj);

      it('should not have the property cpf', () => {
        expect(sut).not.toHaveProperty('cpf');
      });

      describe('when we call the getName method', () => {
        it('must return the same value', () => {
          expect(sut.getName()).toBe(name);
        });
      });

      describe('when we call the getIDN method', () => {
        it('must return the cnpj', () => {
          expect(sut.getIDN()).toBe(cnpj);
        });
      });
    });
  });

  describe('given a name, last name and cpf', () => {
    const name = 'Jean';
    const lastName = 'Domingues';
    const cpf = '111.111.111-11';

    describe('given a instance from IndividualCustomer', () => {
      const sut = new IndividualCustomer(name, lastName, cpf);

      it('should not have the property cnpj', () => {
        expect(sut).not.toHaveProperty('cnpj');
      });

      describe('when we call the getName method', () => {
        it('must return name and last name', () => {
          expect(sut.getName()).toBe(`${name} ${lastName}`);
        });
      });

      describe('when we call the getIDN method', () => {
        it('must return the cpf', () => {
          expect(sut.getIDN()).toBe(cpf);
        });
      });
    });
  });
});
