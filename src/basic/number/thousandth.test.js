import { thousandth } from './thousandth'

describe('number to thousandth', () => {
  it('no result', () => {
    const num = {};
    const result = '';
    expect(thousandth(num)).toEqual(result);
  })
  it('has result', () => {
    const num = 123412222111;
    const result = '123,412,222,111';
    expect(thousandth(num)).toEqual(result);
  });
})

