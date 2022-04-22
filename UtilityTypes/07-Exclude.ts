// Exclude<UnionType, ExcludedMembers>
// [排除] 注意是 UnionType 联合类型

type Food = Exclude<'scallion' | 'ginger' | 'galic' | 'coriander', 'galic'> // 把蒜扔出去

type Paramas = Exclude<string | number[] | number | undefined, undefined | number>;


function eat(food: Food) {
  return food
}

eat('ginger')
eat('coriander')
eat('galic')


function _slice(p: Paramas) {
  return p.slice(0, 2)
}

_slice('Im a string')
_slice([1, 2, 3])
_slice(666)


