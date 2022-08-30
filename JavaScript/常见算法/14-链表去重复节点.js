[1, 2, 3, 3, 3, 3, 4, 5]

function getList(head) {

  const listNode = new ListNode()

  listNode.next = head
  let current = listNode.next;

  while (current) {
    let next = current.next;
    while (next && next.val === current.val) {
      next = next.next;
    }
    if (current.next === next) {
      listNode = current
    } else {
      current = next
    }
    // current.next = next;
    // current = current.next;
  }

  return listNode.next
}