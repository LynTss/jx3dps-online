import { 属性类型 } from '@/@types/属性'
import { 五彩石增益类型枚举 } from './枚举'

export interface 五彩石数据类型 {
  五彩石名称: string
  五彩石等级: number
  装备增益: Array<{
    增益数值: number
    增益名称: 五彩石增益类型枚举 | string
    增益类型: 属性类型 | string
  }>
  DiamondCount1: string | number // 条件1达成 全身的(五行石)大于等于
  DiamondCount2: string | number // 条件2达成 全身的(五行石)大于等于
  DiamondCount3?: string | number // 条件3达成 全身的(五行石)大于等于
  DiamondIntensity1: string | number // 条件1达成 (五行石)等级和大于等于90级
  DiamondIntensity2: string | number // 条件2达成 (五行石)等级和大于等于90级
  DiamondIntensity3?: string | number // 条件3达成 (五行石)等级和大于等于90级
}
