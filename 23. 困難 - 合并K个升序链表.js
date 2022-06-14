///https://leetcode.cn/problems/merge-k-sorted-lists/submissions/
///https://labuladong.github.io/algo/2/17/16/#合并-k-个有序链表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var max = 10001
    var dummy = new ListNode(-10001)
    var p = dummy
    var obj = {}

    for (var i = 0; i < lists.length; i++) {
        var e = lists[i]
        if (e != null) {
            if (obj[e.val] == null) obj[e.val] = [e]
            else obj[e.val].push(e)
        }
    }

    while(Object.keys(obj).length > 0) {
        var min = max
        for (var valStr in obj) {
            var val = Number(valStr)
            if (val <= min) min = val
        }
        var newObj = {}
        for (var i = 0; i < obj[min].length; i++) {
            var e = obj[min][i]
            p.next = e
            p = p.next
            if (e.next != null) {
                if (obj[e.next.val] != null) obj[e.next.val].push(e.next)
                else if (newObj[e.next.val] == null) newObj[e.next.val] = [e.next]
                else newObj[e.next.val].push(e.next)
            }
        }
        delete obj[min]
        if (Object.keys(newObj).length > 0) {
            for (var val in newObj) {
                obj[val] = newObj[val]
            }
        }
    }

    return dummy.next
};
