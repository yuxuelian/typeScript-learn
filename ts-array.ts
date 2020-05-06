/**
 * 数组类型
 */

var aar = [1, 2, 3, 4, 5]

// 将数组计算为某个值
const reduceRes = aar.reduce((sum, item) => {
    console.log('sum = ' + sum)
    console.log('item = ' + item)
    return sum + item
})
console.log('reduceRes = ' + reduceRes)
console.log('-----------------------------')
// 检查数组中是否有符合条件的元素
var retval = aar.some((item, index, aar) => {
    return item === 2
})
console.log('retval = ' + retval)
console.log('-----------------------------')
const newLen = aar.unshift(1, 3, 4)
console.log(aar.toString())
console.log('-----------------------------')
// 解构
var [a, b, c] = aar
console.log('a = ' + a)
console.log('b = ' + b)
console.log('c = ' + c)

