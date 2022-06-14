///https://leetcode.cn/problems/partition-list/
///https://labuladong.github.io/algo/2/17/16/#单链表的分解
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var dummy1 = new ListNode(-1),
        dummy2 = new ListNode(-1),
        p1 = dummy1, // 小於 x
        p2 = dummy2, // 大於 x
        p = head

    while (p != null) {
        if (p.val < x) {
            p1.next = p
            p1 = p1.next
        } else {
            p2.next = p
            p2 = p2.next
        }
        var tmp = p.next
        p.next = null
        p = tmp
    }

    p1.next = dummy2.next

    return dummy1.next
};
