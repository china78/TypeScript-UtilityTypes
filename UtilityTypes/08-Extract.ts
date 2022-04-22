// Extract<Type, Union>
// Extract 摘录 从Type联合类型中 摘录出不需要的 联合类型

type Food2 = Exclude<'scallion' | 'ginger' | 'galic' | 'coriander', 'scallion' | 'ginger'>
// 从 葱、姜、蒜、香菜中, 挑出 葱、姜。 所以还剩 蒜、香菜

type Paramas2 = Exclude<string | number[] | number | undefined, number | undefined>;


function eat2(food: Food2) {
  return food
}

eat2('ginger') // 姜
eat2('coriander') // 香菜
eat2('galic') // 蒜


function _slice2(p: Paramas2) {
  return p.slice(0, 2)
}

_slice2('Im a string')
_slice2([1, 2, 3])
_slice2(666)

