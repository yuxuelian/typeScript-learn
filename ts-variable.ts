/**
 * 变量
 */

var uname: string = "Runoob"
// 如果 断言成功 返回值本身 失败抛出异常
var assertRes: string = uname as string
// 类型断言
console.log(typeof assertRes)

// 变量作用域


//全局变量
var global_num = 321
class Numbers {
    // 成员变量
    name_val = 123
    // 类静态变量
    static sval = 1000
    storeNum(): void {
        // 局部变量
        var local_num = 167;
        console.log("局部变量: local_num = " + local_num)
    }
}

console.log("全局变量: global_num = " + global_num)
console.log("静态变量: Numbers.sval = " + Numbers.sval)
var obj = new Numbers()
console.log("成员变量: obj.name_val = " + obj.name_val)
obj.storeNum()

var list = [4, 5, 6]
console.log('forEach 不可提前终止循环')
list.forEach((val, idx, arr) => {
    console.log('val = ' + val)
    console.log('idx = ' + idx)
    console.log('arr = ' + arr)
    console.log('-------------')
})

console.log('every 可提前终止循环')

// every 可提前终止循环
list.every((val, idx, arr) => {
    console.log('val = ' + val)
    console.log('idx = ' + idx)
    console.log('arr = ' + arr)
    console.log('-------------')
    if (idx == 1) {
        return false
    }
    return true
})


