// ThisType<Type>
// 此实用程序不返回已转换的类型。相反，它作为这种类型的上下文标记。 --NoImplicitt
// 通过 ThisType 我们可以在对象字面量中键入 this，并提供通过上下文类型控制 this 类型的便捷方式

// 外卖员
// 为什么用泛型, 不是所有外卖员都往城市送，有的往农村送，农村没有街道location.street
// 不是所有配送员都driverCar, 也许driverBycicle
// 意思就是我不确定你是哪种类型的配送员 location/delivery里是啥
type TakeOutClerk<L, D> = {
  location?: L;
  delivery?: D & ThisType<L & D>; // 但我能确定的是, 你在‘派送’时一定操作了上下文,一定有this操作,那么这个this是什么类型
}

// 京东培训中心
function createTakeOutClerk<L, D>(clerk: TakeOutClerk<L, D>): L & D {
  let location: object = clerk.location || {}
  let delivery: object = clerk.delivery || {}
  return { ...location, ...delivery } as L & D
}

// 1.会配送 2.知道往哪里送
let chow = createTakeOutClerk({
  location: {
    street: '',
    houseNumber: ''
  },
  delivery: {
    driverCar(s: string, h: string) {
      this.street = s
      this.houseNumber = h // 明确 this 是谁
    }
  }
})
// chow = { street: '', houseNumber: '', justGo() {} }

// 取餐
chow.street = '祥园路'
chow.houseNumber = '29号/麦当劳'

// 送餐
chow.driverCar('祥园路', '28号/图尔兹')
