///https://leetcode.cn/problems/middle-of-the-linked-list/
///https://labuladong.github.io/algo/2/17/16/#单链表的中点
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var slow = head, fast = head

    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow

    // if (head.length <= 1) return null
    // if (head.length === 2) return head.next

    // var p = head, ps = []
    
    // while (p != null) {
    //     ps.push(p)
    //     p = p.next
    // }

    // var halfLen = Math.floor(ps.length / 2)

    // return ps[halfLen]

    // var p = head, len = 0
    
    // while (p != null) {
    //     p = p.next
    //     len++
    // }

    // var halfLen = Math.floor(len / 2)
    // p = head
    // for (var i = 0; i < halfLen; i++) {
    //     p = p.next
    // }

    // return p
};
