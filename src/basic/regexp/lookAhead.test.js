import {lookAhead} from './lookAhead'

describe('test lookAhead',() => {
  it('search amount', ()=> {
    // const str = '1 turkey costs 30€'
    //  const str = '0 12 -5 123 -18'
    // /(?=(\d{3})+\b)/g
    // const str = '517654321'
    const str = `He said: "She's the one!".`
    const expectResult = "She's the one!"
    expect(lookAhead(str)).toEqual(expectResult)
  })
})