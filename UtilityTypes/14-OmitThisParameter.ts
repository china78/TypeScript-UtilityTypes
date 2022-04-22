// OmitThisParameter<Type>
// 移除函数中的this数据类型, 如果Type没有显式声明这个参数(this)，那么结果就是Type
// “--strictFunctionTypes”

// 移除函数中的this数据类型,前提是你明确了this的类型
function Ot_fn_0(this: object, x: number) { }
function Ot_fn_1(x: boolean): boolean { return x }

type Ot_1 = OmitThisParameter<typeof Ot_fn_0> // (x: number) => void
type Ot_2 = OmitThisParameter<typeof Ot_fn_1> // (x: boolean) => boolean
type Ot_3 = OmitThisParameter<string> // string

function add(x: number): void {
  console.log(x)
}

function switchs(x: boolean): boolean {
  return x
}

const result: Ot_1 = add
const stc: Ot_2 = switchs
const str: Ot_3 = 'Im a string'
