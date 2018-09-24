import isAddCardVisible from './isAddCardVisible';

describe('toggleAddCard reducer', () => {
  it('should have initial state set to false', () => {
    expect(isAddCardVisible(undefined, {})).toEqual(false);
  });

  it('should toggle state to true', () => {
    expect(isAddCardVisible(false, {
      type: 'IS_ADD_CARD_VISABLE',
    })).toEqual(true);
  });
});
