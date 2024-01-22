// 1.字面量类型的基本上
// 不明确指明类型，TS会把字面量类型当成一个普通的字面量类型
const name = "fjw"
// 也可明确指明字面量类型
let age: 18 = 18

//【主要用法】2.将多个字面量类型联合起来 |
type Direction = "left" | "right" | "up" | "down"
// d1的类型是Direction时，就不能随意赋值
// 只能是上面四个字面量类型中的一个，类似枚举
const d1: Direction = "left"

// 例如: 封装请求方法
type MethodType = "get" | "post"
function request(url: string, method: MethodType) {
}

request("http://xxxx.org/api/aaa", "post")

// TS细节
const info = {
  url: "xxxx",
  method: "post"
}
// 下面的做法是错误: info.method获取的是string类型
// request(info.url, info.method)

// 解决方案一: info.method 进行类型断言
request(info.url, info.method as "post")

// 解决方案二: 直接让info对象类型是一个字面量类型
const info2: { url: string, method: "post" } = {
  url: "xxxx",
  method: "post"
}
// 或者
const info3 = {
  url: "xxxx",
  method: "post"
} as const
// xxx 本身就是一个 string
// 可以info2或info3的method属性直接赋值给MethodType类型
request(info2.url, info3.method)

export {}