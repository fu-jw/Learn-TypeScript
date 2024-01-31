class Person {
  // 原来写法, 但是这样写太麻烦了
  // public name: string;
  // private _age: number;
  // constructor(name: string, age: number) {
  //   this.name = name;
  //   this._age = age;
  // }

  // 语法糖
  // 注意：必须在构造函数中明确指出属性修饰符
  constructor(public name: string, private _age: number, readonly height: number) {
  }

  running() {
    console.log(this._age, "eating")
  }
}

const p = new Person("fjw", 18, 1.88)
console.log(p.name, p.height)

// p.height = 1.98 // readonly 修饰的属性不能修改

export {}