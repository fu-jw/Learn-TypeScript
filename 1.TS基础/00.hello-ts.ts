let msg:string = 'Hello TypeScript';
// msg = 123;// error: Type 'number' is not assignable to type 'string'
console.log(msg);
///////////////////////////////////////////////////////////////////////////
let num = 123;// 可自动推断类型，let num: number
// num = '123';// error: Type 'string' is not assignable to type 'number'
//字面量类型
const hight = 345;// 但const自动推断类型成，const hight: 345

export {}