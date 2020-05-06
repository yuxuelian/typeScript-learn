/**
 * 基础数据类型学习
 */

// 二进制写法
let binaryLiteral: number = 0b1010
// 八进制写法
let octalLiteral: number = 0o744
// 十进制写法
let decLiteral: number = 6
// 十六进制写法
let hexLiteral: number = 0xf00d

// 字符串类型
let myName: string = 'Runoob'
let words: string = `您好, ${myName}`

// 布尔类型
let flag: boolean = true

// 数组类型
let arr: number[] = [1, 2]
let arr2: Array<number> = [1, 2]
// 元组 (类似map数据结构)
let x: [string, number]
x = ['key', 1]

// 枚举
enum Color { Red, Green, Blue }
let c: Color = Color.Blue
console.log(c)

// void 
let v: void = null
console.log('let v: void = ', v)

// null 类型
let obj2: null = null
console.log(obj2)

// undefined 未定义
let unde: undefined = undefined
console.log(unde)

// Any类型 类似于java的 Object 类型
let xx: any = 1
xx = 'haha string'
xx = false

// 变量多类型赋值
let xx2: number | null | undefined
xx2 = 123
xx2 = null
xx2 = undefined

// 抛出异常  返回 never 类型
// let ne: never = (() => {
//     throw new Error('抛出异常')
// })()
// console.log(ne)

// 表达式 枚举
const getValue = () => {
    return 0
}

enum List {
    A = getValue(),
    B = 2,
    C
}

console.log(List.A)
console.log(List.B)
console.log(List.C)


