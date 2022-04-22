// Partial 部分的
// 我是该接口的其中一部分

interface Person {
  name: string;
  age: number;
  address: string;
  like: string;
}

function printLover(man: Person, women: Partial<Person>) {
  return { ...man, ...women }
}

const jone = {
  name: 'Jone',
  age: 90,
  address: '浙江省',
  like: 'play'
}

// 女人的年龄是秘密
const saler = {
  name: 'saler',
  like: 'eat'
}

printLover(jone, saler)