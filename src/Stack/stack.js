
/**
 * 使用数组来模拟栈这种数据结构
 *
 * 栈是遵循后进先出(LIFO)的原则。
 * 新添加或待删除的元素都保存在栈的同一端，称作栈顶。
 * 另一端叫做栈底，在栈中，新的元素都靠近栈顶，旧的元素都靠近栈底。
 */
export class Stack {
  constructor(array) {
    this.items = Array.isArray(array) ? array : []
  }

  // 向栈添加元素
  push (el) {
    this.items.push(el)
  }

  // 移除栈顶元素
  pop () {
    this.items.pop()
  }

  // 查看栈顶元素
  peek () {
    return this.items[this.items.length - 1]
  }

  // 检查栈是否为空
  isEmpty () {
    return this.items.length === 0
  }

  // 查看栈的长度
  size () {
    return this.items.length
  }

  // 清空栈中元素
  clear () {
    this.items = []
  }

  toString (connector) {
    return this.items.join(connector)
  }

}




