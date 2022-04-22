// Parameters<Type> 参数
// 从函数类型中，取出所有参数，组成元组类型

declare function men(person: {name: string, age: number}): void;

// 首先得是函数类型
type P0 = Parameters<() => void> // []
type P1 = Parameters<(name: string) => void> // [name: string]
type P2 = Parameters<(name: string, age: number) => void> // [name: string, age: number]
type P3 = Parameters<<T>(name: T) => T> // [name: unknow]
type P4 = Parameters<string>
type P5 = Parameters<Function>
type P6 = Parameters<never> // never-永远达不到的类型,我不确定你不是函数，所以我不给你报错，就返回never
type P7 = Parameters<typeof men> // [person: { name: string, age: number }]


const p1: P1 = ['Im a string']
const p2: P2 = ['Jone', 100]
const p3: P2 = ['Jone', 100, true]
