// TypeScript对于传入的函数类型的多余的参数会被忽略掉(the extra arguments are simply ignored.)
type CalcType = (num1: number, num2: number) => number
function calc(calcFn: CalcType) {
  calcFn(10, 20)
}

calc(function(num) {
  return 123
})

// forEach栗子:
// forEach的回调函数的参数有三个: item, index, array
// 但是我们只需要第一个参数, 可以省略后面两个参数，也不报错
const names = ["aaa", "bbb", "ccc"]
names.forEach(function(item) {
  console.log(item.length)
})

// TS对于很多类型的检测报不报错, 取决于它的内部规则
// TS版本在不断更新: 在进行合理的类型检测的情况, 让ts同时更好用(好用和类型检测之间找到一个平衡)
// 举一个栗子:
interface IPerson {
  name: string
  age: number
}
// 报错：Object literal may only specify known properties, and 'height' does not exist in type 'IPerson'.
// const info: IPerson = {
//   name: "fredo",
//   age: 18,
//   height: 1.88,
//   address: "深圳市"
// }

// 但是下面写法可以通过, 因为ts对于成员的检测是不严格的
// 这里面有一个“新鲜度”的概念: 如果是一个新的对象，那么ts会对它进行严格的检测
// 但是赋值一次之后，ts就不会再对它进行严格的检测了
const p = {
  name: "fredo",
  age: 18,
  height: 1.88,
  address: "深圳市"
}
const info: IPerson = p

export {}

