// 定义节点类
class Node<T> {
  data: T;
  next: Node<T> | null | undefined;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

// 定义单链表类
export class LinkedList<T> {
  head: Node<T> | null | undefined;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data: T): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  insert(data: T, index: number): void {
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let currentIndex = 0;
      while (currentIndex < index - 1 && current) {
        current = current.next;
        currentIndex++;
      }
      if (!current) {
        return;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
    this.length++;
  }

  remove(index: number): void {
    if (index === 0) {
      this.head = this.head?.next;
    } else {
      let current = this.head;
      let currentIndex = 0;
      while (currentIndex < index - 1 && current?.next) {
        current = current.next;
        currentIndex++;
      }
      if (!current || !current.next) {
        return;
      }
      current.next = current.next.next;
    }
    this.length--;
  }

  get(index: number): T | null {
    let current = this.head;
    let currentIndex = 0;
    while (currentIndex < index && current) {
      current = current.next;
      currentIndex++;
    }
    return current ? current.data : null;
  }
}
//  // 创建单链表实例
//  const list = new LinkedList();
//  // 在链表末尾插入节点
//  // list.append();
//  // list.append();
//  // list.append();
//  list.append(0);
//  list.append(1);
//  list.append(2);
//  list.append(3);
//  list.append(4);
//  list.insert(10, 3);
//  // console.log(list.get(1)); // 输出null
//  // list.remove(3)
//  // list.remove(4)
//  console.log(list)
