// NonNullable<Type> 不可空的
// 注: 严格的 null 检查需要开启编译器选项 --strictNullChecks.
type T0 = NonNullable<number | string | undefined | null>

const a: T0 = 1
const b: T0 = 'Im a string'
const c: T0 = undefined //error
const d: T0 = null //error

function print(a: T0) {
  return a;
}

print(1)
print('Im a string')
print(undefined) //error
print(null) //error
