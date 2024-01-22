// 自动类型推断：number[]
let num = [123, 234, 345];

// 明确的指定<数组>的类型注解: 两种写法
// 1. string[]: 数组类型, 并且数组中存放的字符串类型
// 2. Array<string>: 数组类型, 并且数组中存放的是字符串类型

// 注意事项: 在真实的开发中, 数组一般存放相同的类型, 不要存放不同的类型
let names: string[] = ["aaa", "bbb", "ccc"]
names.push("ddd")
// names.push(123)// error: Argument of type 'number' is not assignable to parameter of type 'string'.

let nums: Array<number> = [111, 222, 333]

export {}