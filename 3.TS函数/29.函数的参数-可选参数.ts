// y就是一个可选参数，用 ? 表示
// 可选参数类型是什么? number | undefined 联合类型
function foo(x: number, y?: number) {
  // 使用前先进行类型缩小
  if (y !== undefined) {
    console.log(y + 10)
  }
}

foo(10)
foo(10, 20)

export {}