import { 属性类型 } from '@/@types/属性'
import { 技能增益列表类型 } from '@/@types/技能'

const 小橙武技能增益: 技能增益列表类型[] = [
  {
    增益名称: '小CW会心5%',
    增益所在位置: '装备',
    增益启用: false,
    增益类型: '全局启用',
    增益集合: [{ 属性: 属性类型.外功会心百分比, 值: 0.05 }],
  },
]

export default 小橙武技能增益
