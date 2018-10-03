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
    expect(cards(undefined, {})).toEqual(initialState);
  });

  it('should add card to cards', () => {
    expect(
      cards(initialState, {
        type: 'ADD_CARD',
        id: 3,
        name: 'Joh',
        email: 'test@test.pl',
      }),
    ).toEqual([
      ...initialState,
      {
        id: 3,
        name: 'Joh',
        email: 'test@test.pl',
      },
    ]);
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
