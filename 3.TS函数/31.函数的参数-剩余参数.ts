// 剩余参数是一个数组，个数不定
function foo(...args: (string | number)[]) {
  args.forEach( item => {
    console.log(item)
  })
}

foo(123, 321)
foo("abc", 111, "cba")