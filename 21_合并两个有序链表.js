/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    var node = new ListNode(-1), 
        p = node
        l1 = list1 
        l2 = list2

    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            p.next = l1
            l1 = l1.next
        } else {
            p.next = l2
            l2 = l2.next
        }
        p = p.next
    }

    if (l1 != null) {
        p.next = l1
    }

    if (l2 != null) {
        p.next = l2
    }

    return node.next
};
