let names: string[] = ["aaa", "bbb", "ccc"]

// 匿名函数是否需要添加类型注解呢?
// 最好不要添加类型注解，因为ts会自动进行类型推断，如果添加了类型注解，可能会导致类型推断不准确
// 自动推断的类型 item: string
names.forEach(function(item) {
  console.log(item)
})