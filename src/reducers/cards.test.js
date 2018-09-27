import cards from './cards';

describe('cards reducers', () => {
  const initialState = [
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
    },
    {
      id: 2,
      name: 'Rob',
      email: 'rob@gmail.com',
    },
  ];

  it('should have initialstate', () => {
    expect(cards(undefined, {})).toEqual([]);
  });

  it('should add card to cards', () => {
    const expected = {
      id: 3,
      name: 'Joh',
      email: 'test@test.pl',
    };
    expect(
      cards(initialState, {
        type: 'ADD_CARD',
        id: 3,
        name: 'Joh',
        email: 'test@test.pl',
      }),
    ).toEqual(expect.arrayContaining([
      expect.objectContaining(expected),
    ]));
  });

  it('should remove card', () => {
    expect(
      cards(initialState, {
        type: 'DELETE_CARD',
        id: 2,
      }),
    ).toEqual([
      ...initialState.slice(0, 1),
    ]);
  });
});
