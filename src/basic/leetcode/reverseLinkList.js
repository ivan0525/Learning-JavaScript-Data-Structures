class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  push (val) {
    const node = new Node(val);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      // 将其next赋值为新节点，建立连接
      current.next = node;
    }
    this.count++;
  }
}

// 递归
function reverse (head) {
  if (head.next === null) {
    return null;
  }
  const last = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}

// 迭代
function reverse (head) {
  let pre = null;
  let cur = next = head;
  while (cur !== null) {
    next = cur.next;
    cur.next = pre;
    // 更新指针位置
    pre = cur;
    cur = next;
  }
}

let successor = null; // 后驱节点
function reverseN (head, n) {
  if (n === 1) {
    // 记录第n+1个节点
    successor = head.next;
    return head;
  }
  // 已head.next为起点，需要反转n-1个节点
  const last = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = successor;
  return last;
}
