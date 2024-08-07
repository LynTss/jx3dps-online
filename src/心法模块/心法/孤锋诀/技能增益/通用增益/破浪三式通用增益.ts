import { 属性类型 } from '@/@types/属性'
import { 技能增益列表类型 } from '@/@types/技能'

const 破浪三式通用增益: 技能增益列表类型[] = [
  {
    增益名称: '戗风_常驻',
    依赖奇穴: '戗风',
    增益所在位置: '奇穴',
    增益类型: '全局启用',
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 82 / 1024 }],
  },
  {
    增益名称: '戗风',
    增益所在位置: '奇穴',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 82 / 1024 }],
  },
]

export default 破浪三式通用增益
