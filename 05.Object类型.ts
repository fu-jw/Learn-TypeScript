/**
 * 不明确指定类型的时候，ts会自动推断出一个类型
 * {
 *  name: string;
 *  age: number;
 *  height: number;
 * }
 * 
 */
let info1 = {
  name: "fredo",
  age: 18,
  height: 1.88
}

console.log(info1.name)
console.log(info1.age)

// 也可以明确指定类型
type infoType = {
  name: string;
  age: number;
  height: number;
}

let info2:infoType = {
  name: "fjw",
  age: 18,
  height: 1.88
}

console.log(info2.name)
console.log(info2.age)

// 不建议指定类型为Object，因为Object类型没有属性，所以会报错
let info3:Object = {
  name: "菠萝吹雪",
  age: 18,
  height: 1.88
}

// console.log(info3.name) // 报错: Property 'name' does not exist on type 'Object'.