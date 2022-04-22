// ReturnType<Type>
// 构造一个类型，从函数类型的返回类型
// 从函数的返回值中取类型


declare function men1(person: {name: string, age: number}): number[];

type P00 = ReturnType<() => void> // void
type P10 = ReturnType<(name: string) => string> // string
type P20 = ReturnType<(name: string, age: number) => boolean> // boolean
type P30 = ReturnType<<T>(name: T) => T> // unknow
type P40 = ReturnType<string> // 前提是函数
type P50 = ReturnType<Function>
type P60 = ReturnType<never> // never 我不确定你返回的不是函数，因为我永远得不到验证，索性放过你
type P70 = ReturnType<typeof men1> // number[]


const p11: P10 = 'Im a string'
const p22: P20 = true
const p33: P70 = [50, 100, 150]