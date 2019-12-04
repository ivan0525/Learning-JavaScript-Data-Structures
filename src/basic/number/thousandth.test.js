import { thousandth } from './thousandth'

describe('number to thousandth', () => {
  it('no result', () => {
    const num = {};
    const result = '';
    expect(thousandth(num)).toEqual(result);
  })
  it('has result', () => {
    const num = 1234;
    const result = '1,234';
    expect(thousandth(num)).toEqual(result);
  });
})

