import * as actions from './index';

describe('cards actions', () => {
  it('addCard should create addCard action', () => {
    const expected = {
      type: 'ADD_CARD',
      name: 'John',
      email: 'test@test.pl',
    };
    expect(actions.addCard('John', 'test@test.pl'))
      .toEqual(expect.objectContaining(expected));
  });

  it('deleteCard should create deleteCard action', () => {
    const expected = {
      type: 'DELETE_CARD',
      id: 1,
    };
    expect(actions.deleteCard(1))
      .toEqual(expect.objectContaining(expected));
  });

  it('filter should create filter action', () => {
    const event = {
      target: {
        value: 'foo',
      },
    };
    const expected = {
      type: 'FILTER',
      filterText: 'foo',
    };
    expect(actions.filter(event))
      .toEqual(expect.objectContaining(expected));
  });

  it('toggleAddCard should create toggleAddcard action', () => {
    expect(actions.toggleCardVisable()).toEqual({
      type: 'TOGGLE_CARD_VISABLE',
    });
  });
});
