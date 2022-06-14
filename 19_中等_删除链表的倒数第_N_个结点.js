///https://leetcode.cn/problems/remove-nth-node-from-end-of-list/submissions/
///https://labuladong.github.io/algo/2/17/16/#单链表的倒数第-k-个节点
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head.next == null) return null

    var p1 = head, p2 = head
    
    for (var i = 0; i < n; i++) {
        p1 = p1.next
    }

    if (p1 == null) return head.next
    
    while (p1 != null) {
        p1 = p1.next
        if (p1 == null) {
            p2.next = p2.next.next
            break
        }
        p2 = p2.next
    }

    return head
};
