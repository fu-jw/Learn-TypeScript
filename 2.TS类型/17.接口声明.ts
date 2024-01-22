const name = "fredo"

console.log("fredo")
console.log(name)
// type定义类型别名
type PointType = {
  x: number
  y: number
  z?: number
}

// 接口: interface
// 声明的方式
interface PointType2 {
  x: number
  y: number
  z?: number
}

function printCoordinate(point: PointType2) {
  
}

export {}