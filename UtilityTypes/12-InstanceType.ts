// InstanceType<Type> 实例类型
// 构造一个类型，由一个构造函数的实例类型
// 这个类型是一个实例的类型 

class UED {
  leader = 'zhouHuan'
  numberOfPeople = 6
}

type I1 = InstanceType<typeof UED>

//部门
const department: I1 = {
  leader: '一个外卖员',
  numberOfPeople: 100
}

// ---- FunctionConstructor不可以当作类型

function Car(name: string, color: string) {
  this.name = name;
  this.color = color
}

const bicycle: typeof Car = new Car('山地车', '银色')

// 虽然说这里可以 new 一个构造函数
type I2 = InstanceType<typeof Car>

// 基本类型肯定是不可以的
// 类型“string”不满足约束“new (...args: any) => any”。
type I3 = InstanceType<string>

type I4 = InstanceType<Function>


