class Person {
  // 成员属性: 声明成员属性
  name: string
  age: number
  // 构造函数: 实例化对象的时候触发的方法
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  // 成员方法: 实例方法
  eating() {
    console.log(this.name + " eating")
  }

  running() {
    console.log(this.name + " running")
  }
}

// 实例对象: instance
const p1 = new Person("fjw", 18)
const p2 = new Person("fredo", 20)

console.log(p1.name, p2.age)

export {}