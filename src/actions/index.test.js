
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetchMock from 'fetch-mock/es5/client';

import * as actions from './index';

const mockStore = configureMockStore([thunk]);

describe('cards actions', () => {
  let store;
  const url = 'http://localhost:3004/cards/';
  beforeEach(() => {
    store = mockStore();
  });
  afterEach(() => {
    fetchMock.reset();
  });

  it('should run fetchCards action', async () => {
    const cards = { name: 'test', email: 'test' };
    fetchMock
      .get(url, cards);
    await store.dispatch(actions.fetchCards());
    const act = store.getActions();

    expect(act[0]).toEqual({ type: 'FETCH_CARDS', cards });
  });

  it('addCard should create addCard action', async () => {
    const card = {
      type: 'ADD_CARD',
      name: 'John',
      email: 'test@test.pl',
    };
    fetchMock
      .post(url, card);

    await store.dispatch(actions.addCard(card.name, card.email));
    const act = store.getActions();
    expect(act[0]).toEqual(card);
  });

  it('deleteCard should create deleteCard action', async () => {
    const card = {
      type: 'DELETE_CARD',
      id: 1,
    };
    fetchMock
      .delete(url + card.id, {});

    await store.dispatch(actions.deleteCard(card.id));
    const act = store.getActions();
    expect(act[0]).toEqual(card);
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
