import products from './products';

describe('reducers products', () => {
  it('should have initial state []', () => {
    expect(products(undefined, {})).toEqual([]);
  });
});
