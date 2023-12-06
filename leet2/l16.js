function Node(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const head = new Node(0)
head.next = new Node(1)
head.next.next = new Node(2)
head.next.next.next = new Node(3)
head.next.next.next.next = new Node(4)
head.next.next.next.next.next = new Node(5)
head.next.next.next.next.next.next = new Node(6)

let p = head
console.log('nodes start log ...');

while (p) {
  console.log(p.val);
  p = p.next
}

