import { 技能增益列表类型 } from '@/@types/技能'
import { 属性类型 } from '@/@types/属性'

const 弓箭招式增益: 技能增益列表类型[] = [
  {
    // 70188
    增益名称: '射日·悟',
    增益所在位置: '奇穴',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.易伤增伤, 值: 256 / 1024 }],
  },
  {
    // 70188
    增益名称: '偕行·悟',
    增益所在位置: '奇穴',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.易伤增伤, 值: 205 / 1024 }],
  },
]

export default 弓箭招式增益
