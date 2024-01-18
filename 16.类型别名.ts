// 类型别名: type
type MyNumber = number
const age: MyNumber = 18

// 给ID的类型起一个别名
// 主要用于简化联合类型
type IDType = number | string

function printID(id: IDType) {
  console.log(id)
}


// 打印坐标
type PointType = { x: number, y: number, z?: number }
function printCoordinate(point: PointType) {
  console.log(point.x, point.y, point.z)
}