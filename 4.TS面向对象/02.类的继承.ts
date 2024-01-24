class Person {
  protected name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  // 方法变成私有方法: 只有在类内部才能访问
  private eating() {
    console.log(this.name, "在吃东西")
  }
}

const p = new Person("fjw", 18)
// p.eating()// 报错: 私有方法只能在类内部访问

// 子类中是否可以访问
class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }

  studying() {
    console.log(this.name, "在学习")
  }
}

const stu = new Student("fredo", 20)