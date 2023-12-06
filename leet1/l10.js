const nodesToArray = (head) => {
  const res = []
  let p = head
  while (p) {
    res.push(p.val)
    p = p.next
  }
  console.log('res = ', res)
  return res
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
const head = new ListNode()
head.next = new ListNode(1)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(3)

const result = nodesToArray(head)

console.log(result);
