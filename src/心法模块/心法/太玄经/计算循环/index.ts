import type { 循环数据 } from '@/@types/循环'

/**
 * @name 用于计算的循环数据
 * 该数据可以通过JCL分析器进行获取，也可以自己根据实际情况编写
 */

// 循环
import 堪炸 from './堪炸.json'
import 鬼追 from './鬼追.json'
import 鬼枭 from './鬼枭.json'
import 鬼枭_欧皇 from './鬼枭_欧皇.json'
import 鬼列 from './鬼列.json'
import 橙武 from './橙武.json'
// import 测试循环 from './测试循环.json'
// import 橙武加速测试 from './橙武加速测试.json'

const 计算循环: 循环数据[] = [鬼列, 堪炸, 鬼追, 鬼枭, 鬼枭_欧皇, 橙武] as 循环数据[]

export default 计算循环
