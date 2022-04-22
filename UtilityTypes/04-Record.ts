// Record<keys, Type> 记录/记载
// Record 用来构造一个[对象类型]， keys->键 / types->值

// 球类
type BallType = 'footBall' | 'basketball' | 'pipang';


// 球描述
interface BallDesc {
  color: string;
  size: string;
}

// 迪卡侬-球类专柜
const balls: Record<BallType, BallDesc> = {
  footBall: { color: 'lines', size: 'middle' },
  basketball: { color: 'brown', size: 'biger' },
  pipang: { color: 'yellow', size: 'small' } // 你要非说白色,我也拦不住
}