import { Stack } from './stack'

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  // 是否暴露了这些公共api
  it('exposes the public apis', () => {
    expect(stack).toHaveProperty('push')
    expect(stack).toHaveProperty('pop')
    expect(stack).toHaveProperty('peek')
    expect(stack).toHaveProperty('isEmpty')
    expect(stack).toHaveProperty('size')
    expect(stack).toHaveProperty('clear')
  })

  // 测试push方法
  it('stack.push', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.toString()).toBe('1,2,3')
  })

  it('stack.size', () => {
    expect(stack.size()).toBe(0)
  })

  it('stack.isEmpty', () => {
    expect(stack.isEmpty()).toBe(true)
  })


  it('stack.peek', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.peek()).toBe(3)
  })


})
