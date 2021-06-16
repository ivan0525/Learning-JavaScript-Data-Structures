import {lookBehind} from './lookBehind'

describe('test lookBehind', () => {
  it('search amount', () => {
    const str = '衬衫的价格是：$300，所以你选择B答案！'
    const expectResult = '$300'
    expect(lookBehind(str)).toEqual(expectResult)
  })
})