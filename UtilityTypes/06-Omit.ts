// Omit<Type, keys> 省略
// 从Type中选择一个属性keys，然后删除掉它

interface Person {
  name: string;
  age: number;
  address: string;
  like: string;
}

// 哥哥不约
type _Person = Omit<Person, 'address'>

const tgg: _Person = {
  name: 'tiangg',
  age: 18,
  like: 'fitNess'
}