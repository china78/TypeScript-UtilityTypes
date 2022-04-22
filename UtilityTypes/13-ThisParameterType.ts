// ThisParameterType<Type>
// 获取函数中 this 的数据类型，如果没有则返回 unknown 类型

// 先拆分来看函数们在做什么
function toHex(this: Number) { // 这里要明确自己的this是什么类型-Number{15}, 不明确就会返回unknow
  return this.toString(16)
}

// 为何要这么写-ThisParameterType
// 因为接下来，当前参数n，要作为某个函数的上下文this使用
// n你是什么我不知道，但是我知道他（toHex）要什么，所以我要去问他，按照他的回答来约束你
function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n)
}

numberToString(15) //f

// ------------------------------
// 编程语言
type Language = {
  name: string,
  mother: string,
  flow: string
}

// 自我介绍
function sayDetails(this: Language) {
  return `${this.name} 的生产者是 ${this.mother}, 我是 ${this.flow}`
}

function byReact(r: ThisParameterType<typeof sayDetails>) {
  return sayDetails.apply(r)
}

byReact({
  name: 'react',
  mother: 'facefuck',
  flow: 'unidirectional data flow'
})