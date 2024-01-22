// 可以用单引号或双引号表示字符串
let str1:string = 'Hello';
let str2 = "TypeScript";

// 可以字符串拼接
let str3 = str1 + str2;
console.log(str3);// HelloTypeScript

// 支持ES6的模板字符串来拼接变量和字符串
str3 = `你好 ${str2}`;
console.log(str3);// 你好 TypeScript

export {}