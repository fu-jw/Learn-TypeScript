// 定义接口
interface IPerson {
  name: string
  age: number
  friend?: {// 可选属性
    name: string
  }
}

const info: IPerson = {
  name: "fjw",
  age: 18
}

// 访问属性: 可选链: ?.
console.log(info.friend?.name)

// 属性赋值:
// info.friend?.name = "fredo" // 报错, 因为friend可能为空

// 解决方案一: 类型缩小
if (info.friend) {
  info.friend.name = "kobe"
}

// 解决方案二: 非空类型断言
// 存在安全隐患, TS编译器将跳过类型检查, 只有确保friend一定有值的情况, 才能使用
info.friend!.name = "james"

export {}