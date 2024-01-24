// 1.表示类 Person
// 2.还表示构造函数 Person，默认无参构造函数
class Person {
}

interface ICTORPerson {
  // 3.所以此处可以使用 new () => Person，就是调用了构造函数
  new (): Person // 构造函数签名
}

// 4.这个工厂函数的参数是一个接口，返回值是一个 Person 类型的实例
// 5.如果没有上面的构造函数签名，这里就不能使用 new fn()，因为 fn 是一个接口，不能使用 new
function factory(fn: ICTORPerson) {
  const f = new fn()
  return f
}

factory(Person)