// 在定义一个TypeScript中的函数时, 都要明确的指定参数的类型
// 函数的返回值类型可以省略, TS可以自动识别函数返回值的类型
// 如果函数没有返回任何类型, 则使用void表示
function sum(num1: number, num2: number) {
  return num1 + num2
}

const res = sum(123, 321)
console.log(res)
// sum("abc", "cba") // error:Argument of type 'string' is not assignable to parameter of type 'number'.
// sum({}, {}) // error:Argument of type '{}' is not assignable to parameter of type 'number'.

// 练习自定义对象类型
// 定义对象类型
type InfoType = {
  name: string
  age: number
}

// 信息解析工具
function parseInfo(info: string): InfoType[] {
  const infos: InfoType[] = []
  infos.push({ name: "fu-jw", age: 28 })
  return infos
}

const myInfos = parseInfo("fdafdafdafa")
for (const item of myInfos) {
  console.log(item.name, item.age)
}