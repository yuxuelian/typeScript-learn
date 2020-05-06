/**
 * class 学习
 */


class Site {

    name: String

    constructor(name: String = '123') {
        this.name = name
    }

    getName(): void {
        console.log('Site,name 哈哈')
    }
}

var obj = new Site()
console.log('obj.getName() = ' + obj.getName())
console.log('obj.name = ' + obj.name)

console.log('--------------------')
class Animal {
    // 不加修饰符默认是 public 关键字修饰
    color: String
    private name: String
    protected age: String
    say(): void {
        console.log('不知道怎么叫')
    }
}

class Cat extends Animal {
    // 方法重写
    say(): void {
        // 可以使用super来调用父类方法
        // super.say()
        console.log('小猫 喵喵叫')
    }
}

class Dog extends Animal {
    // 方法重写
    say(): void {
        // private 关键字修饰的成员不可以在子类中访问
        // this.name
        // protected 关键字修饰的成员可以在子类中访问
        console.log('this.age = ' + this.age)
        console.log('小狗 汪汪叫')
    }
}

var cat: Animal = new Cat()
cat.say()
var dog: Animal = new Dog()
dog.say()

console.log('--------------')
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)
console.log(cat instanceof Dog)
console.log('--------------')
console.log(dog instanceof Animal)
console.log(dog instanceof Cat)
console.log(dog instanceof Dog)

console.log('类可以实现接口------')
interface USB {
    input: (param1: string) => void
    output: () => string
}

// 创建一个打印机类
class Printer implements USB {
    // 品牌
    brand: string

    constructor(brand: string) {
        this.brand = brand
    }

    input(param1: string): void {
        console.log('接收到输入数据 param1 = ' + param1)
    }
    output(): string {
        return '返回输出数据----aaa'
    }
}


var usb: USB = new Printer('戴尔')
usb.input('哈哈哈哈')
console.log('usb.output() = ' + usb.output())

// 将 usb 类型转换为它本来的类型
var printer = usb as Printer
console.log('打印机品牌 printer.brand = ' + printer.brand)


