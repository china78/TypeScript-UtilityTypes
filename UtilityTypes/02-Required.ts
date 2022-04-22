// Required<Type> Partial的反面

// 即使该类型被做成了可选
interface Women {
  chest?: string;
  butt?: string;
}

// 无颜提凶器
const lili: Women = {
  butt: 'bigAss'
}

// 招聘模特
const sasa: Required<Women> = {
  chest: 'BigMimi'
}

// 理想型
const zizi: Required<Women> = {
  chest: 'BigMini',
  butt: 'BigAss'
}


