
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './index';

const mockStore = configureMockStore([thunk]);

describe('cards actions', () => {
  it('should run fetchCards action', async () => {
    const store = mockStore();
    await store.dispatch(actions.fetchCards());
    const act = store.getActions();

    expect(act[0].type).toEqual('FETCH_CARDS');
  });

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
