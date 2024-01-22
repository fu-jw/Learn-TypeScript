// 联合类型，用 | 分隔每个类型
type ID = number | string
const id1: ID = "abc"
const id2: ID = 123

// 交叉类型: 两种(多种)类型要同时满足，用 & 分隔每个类型
// 对于基本类型无意义
type NewType = number & string // 没有意义


// 对于对象类型，可以将多个类型的属性合并成一个类型
interface IKun {
  name: string
  age: number
}

interface ICoder {
  name: string
  coding: () => void
}

type InfoType = IKun & ICoder

const info: InfoType = {
  name: "fredo",
  age: 18,
  coding: function() {
    console.log("coding")
  }
}