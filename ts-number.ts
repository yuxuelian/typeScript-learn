/**
 * Number类使用
 */

 // 类似java包装类型
var myNumber = new Number(123.123456)
// toExponential 指数计数方式展示
var val1 = myNumber.toExponential()
console.log("typeof = " + (typeof val1) + ", toExponential val1 = " + val1)
// toFixed 指定固定小数位数
var val2 = myNumber.toFixed(3)
console.log("typeof = " + (typeof val2) + ", toFixed val2 = " + val2)
// toLocaleString 直接转成同样的string
var val3 = myNumber.toLocaleString()
console.log("typeof = " + (typeof val3) + ", toLocaleString val3 = " + val3)
// toPrecision 指定长度,包括整数位数
var val4 = myNumber.toPrecision(5)
console.log("typeof = " + (typeof val4) + ", toPrecision val4 = " + val4)
// toString 2-36 进制的格式输出
var val5 = myNumber.toString(2)
console.log("typeof = " + (typeof val5) + ", 二进制 val5 = " + val5)
var val6 = myNumber.toString(8)
console.log("typeof = " + (typeof val6) + ", 八进制 val6 = " + val6)
var val7 = myNumber.toString(10)
console.log("typeof = " + (typeof val7) + ", 十进制 val7 = " + val7)
var val8 = myNumber.toString(16)
console.log("typeof = " + (typeof val8) + ", 十六进制 val8 = " + val8)
// 获取基础数值  类似java拆箱
var val9 = myNumber.valueOf()
console.log("typeof = " + (typeof val9) + ", valueOf val9 = " + val9)
