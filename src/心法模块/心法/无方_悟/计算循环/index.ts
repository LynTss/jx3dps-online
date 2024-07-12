import type { 循环数据 } from '@/@types/循环'

/**
 * @name 用于计算的循环数据
 * 该数据可以通过JCL分析器进行获取，也可以自己根据实际情况编写
 */

// import 测试循环 from './测试循环.json'
import 紫武_沾且青川 from './紫武_沾且青川.json'
import 紫武_并且青川 from './紫武_并且青川.json'
import 橙武_沾且青川 from './橙武_沾且青川.json'
import 橙武_并且青川 from './橙武_并且青川.json'

const 计算循环: 循环数据[] = [
  // 测试循环,
  紫武_并且青川,
  紫武_沾且青川,
  橙武_并且青川,
  橙武_沾且青川,
] as 循环数据[]

export default 计算循环
