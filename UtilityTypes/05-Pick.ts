// Pick<Type, Keys>
// 挑选, 在已有的接口中, 挑选出你需要的属性, 组成新的类型

interface KTV {
  princess_1: object;
  princess_2: object;
  princess_3: object;
  princess_4: object;
  princess_5: object;
  princess_6: object;
}


const youLike: Pick<KTV, "princess_2" | "princess_6"> = {
  princess_2: { name: 'lili', begood: '奶推' },
  princess_6: { name: 'sala', begood: '盐浴' },
}