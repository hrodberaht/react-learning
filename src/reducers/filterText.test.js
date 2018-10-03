import filterText from './filterText';

describe('filterText reducer', () => {
  it('should have intial state set to empty string', () => {
    expect(filterText(undefined, {})).toEqual('');
  });

  it('should filter text equal to string passed by action', () => {
    expect(
      filterText('', {
        type: 'FILTER',
        filterText: 'foo',
      }),
    ).toEqual('foo');
  });
});
