import toggleAddCard from './toggleAddCard';

describe('toggleAddCard reducer', () => {
  it('should have initial state set to false', () => {
    expect(toggleAddCard(undefined, {})).toEqual(false);
  });

  it('should toggle state to true', () => {
    expect(toggleAddCard(false, {
      type: 'TOGGLE_ADD_CARD',
    })).toEqual(true);
  });
});
