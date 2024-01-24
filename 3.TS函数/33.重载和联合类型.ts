// 0.普通的实现，any 实现，但是没有约束力【不推荐】
// function getLength(arg) {
//   return arg.length
// }

// 1.函数的重载
// function getLength(arg: string): number
// function getLength(arg: any[]): number
// function getLength(arg) {
//   return arg.length
// }


// 2.【推荐】联合类型实现(可以使用联合类型实现的情况, 尽量使用联合类型)
function getLength(arg: string | any[]) {
  return arg.length
}

getLength("aaaaa")
getLength(["aaa", "bbb", "ccc"])