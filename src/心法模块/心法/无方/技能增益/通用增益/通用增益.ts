import { 属性类型 } from '@/@types/属性'
import { 技能增益列表类型 } from '@/@types/技能'
import 获取快照增益 from '@/心法模块/统一数据/快照增益'

const 通用增益: 技能增益列表类型[] = [
  ...获取快照增益('内功'),
  {
    增益名称: '非侠',
    增益所在位置: '职业',
    增益启用: true,
    增益类型: '全局启用',
    增益集合: [{ 属性: 属性类型.非侠增伤, 值: 102 / 1024 }],
  },
  // 套装双会特效
  {
    增益名称: '断肠',
    增益所在位置: '装备',
    增益类型: '部分启用',
    快照类型: '套装会心会效',
    依赖装备增益: '套装会心会效',
    增益集合: [
      { 属性: 属性类型.内功会心百分比, 值: 0.04 },
      { 属性: 属性类型.郭氏内功会心效果等级, 值: 41 },
    ],
  },
  {
    增益名称: '相使',
    增益所在位置: '奇穴',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.郭氏内功基础攻击, 值: 154 }],
  },
  {
    增益名称: '凄骨',
    增益所在位置: '奇穴',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.郭氏全无视防御, 值: 512 }],
  },
  {
    增益名称: '养荣',
    增益所在位置: '奇穴',
    增益类型: '部分启用',
    增益集合: [
      { 属性: 属性类型.郭氏内功破防等级, 值: 256 },
      { 属性: 属性类型.郭氏无双, 值: 307 },
    ],
  },
  // 给dot用的快照增益
  {
    增益名称: '养荣_常驻',
    依赖奇穴: '养荣',
    增益所在位置: '奇穴',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.郭氏内功破防等级, 值: 256 }],
  },
  {
    增益名称: '养荣_快照',
    依赖奇穴: '养荣',
    增益所在位置: '奇穴',
    增益类型: '部分启用',
    增益集合: [{ 属性: 属性类型.郭氏无双, 值: 307 }],
  },
]

export default 通用增益
