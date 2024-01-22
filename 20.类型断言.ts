// 获取DOM元素 <img class="img"/>
// 可以直接获取一个html元素
// 类型推断: imgEl1的类型是 HTMLImageElement | null
// HTMLImageElement 元素有属性src,alt
const imgEl1 = document.querySelector("img")
if (imgEl1 !== null) { // 类型缩小
  imgEl1.src = "xxx"
  imgEl1.alt = "yyy"
}

// 但是，如果获取的元素是一个类名为img的元素，那么就会报错
// 因为类型推断，imgEl2的类型是 Element | null
// Element 元素不一定有属性src,alt，可能是img，也可能是其他元素
// const imgEl2 = document.querySelector(".img")
// if (imgEl2 !== null) { // 类型缩小
//   imgEl2.src = "xxx"
//   imgEl2.alt = "yyy"
// }

// 使用类型断言
const imgEl = document.querySelector(".img") as HTMLImageElement
imgEl.src = "xxx"
imgEl.alt = "yyy"


// 类型断言的规则: 断言只能断言成更加具体的类型, 或者 不太具体(any/unknown) 类型
const age: number = 18
// 错误的做法
// const age2 = age as string

// TS类型检测来说是正确的, 但是这个代码本身不太正确
// const age3 = age as any
// const age4 = age3 as string
// console.log(age4.split(" "))

export {}