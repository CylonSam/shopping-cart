import Cart from './Cart';

describe('Cart', () => {
  let cart;
  let product = {
    title: 'Cool shoes',
    price: 35388,
  };
  let product2 = {
    title: 'Nice pants',
    price: 11990,
  };

  beforeEach(() => {
    cart = new Cart();
  });

  describe('getTotal()', () => {
    it('should return 0 when getTotal() is executed in a newly created instance', () => {
      const cart = new Cart();
      expect(cart.getTotal()).toEqual(0);
    });

    it('should multiply quantity and price and receive the total amount', () => {
      cart.add({
        product,
        quantity: 2, //78776
      });

      cart.add({
        product,
        quantity: 1, //78776
      });

      expect(cart.getTotal()).toEqual(35388);
    });

    it('should ensure no more than one product exists at a time', () => {});

    it('should update total when a product gets included and then removed', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 1,
      });

      cart.remove(product);

      expect(cart.getTotal()).toEqual(11990);
    });
  });

  describe('checkout()', () => {
    it('should return an object with the total and the list of items', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });
    });
  });
});
