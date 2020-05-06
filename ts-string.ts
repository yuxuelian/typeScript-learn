/**
 * String 类型
 */

var txt = new String('A-B-C-D')

txt.charAt(1)

txt.charCodeAt(1)

txt.concat('-E-F')

txt.indexOf('B')

txt.lastIndexOf('C')

txt.localeCompare('CDE')

txt.match(/A/)

txt.replace('A', 'E')

txt.search(/A/)

txt.slice(1)

txt.split('-')

// 从1开始 截取长度为 2
txt.substr(1, 2)

// 提取 3-5 索引的字符串
txt.substring(3, 5)

// 根据本地语言转成小写
txt.toLocaleLowerCase()

// 根据本地语言转成大写
txt.toLocaleUpperCase()

// 返回 string
txt.toString()

// 转成小写
txt.toLowerCase()

// 转成大写
txt.toUpperCase()

// 获取 string
txt.valueOf()


