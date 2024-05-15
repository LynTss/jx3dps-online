// import { 属性类型 } from '@/@types/属性'
import { 技能基础数据模型 } from '@/@types/技能'
import { 获取实际系数, 获取破招实际系数 } from '@/数据/数据工具/获取技能系数'
// import { 计算公式计算类型 } from '@/@types/伤害计算'
// import { 破招全局系数, 获取实际系数 } from '@/数据/数据工具/获取技能系数'
import 翼绝云天增益 from './技能增益/翼绝云天'
import 木落雁归增益 from './技能增益/木落雁归'
import 飘遥伞击增益 from './技能增益/飘遥伞击'
import 振翅图南增益 from './技能增益/振翅图南'
import 击水三千增益 from './技能增益/击水三千'
import 浮游天地增益 from './技能增益/浮游天地'
import 海运南冥增益 from './技能增益/海运南冥'
import 通用增益 from './技能增益/通用增益/通用'
import 溟海御波增益 from './技能增益/溟海御波'
import 逐波灵游增益 from './技能增益/逐波灵游'
import { 计算公式计算类型 } from '@/@types/伤害计算'

const 技能基础数据: 技能基础数据模型[] = [
  {
    // 20016
    技能名称: '翼绝云天',
    技能基础伤害_最小值: 417,
    技能基础伤害_最大值: 417 + 15,
    技能伤害系数: 获取实际系数(100 * 0.9 * 2 * 0.85),
    技能增益列表: 翼绝云天增益,
  },
  {
    // 32815
    技能名称: '破',
    技能伤害系数: 获取破招实际系数(1048576 * (1 - 1)),
    技能增益列表: 通用增益,
  },
  {
    // 19712
    技能名称: '飘遥伞击',
    技能伤害系数: 获取实际系数(16),
    技能基础伤害_最小值: 0,
    技能基础伤害_最大值: 0,
    武器伤害系数: 1,
    技能增益列表: 飘遥伞击增益,
  },
  {
    // 31250
    技能名称: '振翅图南',
    技能基础伤害_最小值: 458,
    技能基础伤害_最大值: 458 + 10,
    技能伤害系数: 获取实际系数(110 * 0.9 * 0.885 * 1.1),
    技能增益列表: 振翅图南增益,
  },
  {
    // 20054
    技能名称: '跃潮斩波',
    技能基础伤害_最小值: 1625,
    技能基础伤害_最大值: 1625 + 10,
    技能伤害系数: 获取实际系数(390 * 1.07 * 0.9 * 0.9),
    技能增益列表: 通用增益,
  },
  {
    // 20322
    技能名称: '溟海御波',
    技能基础伤害_最小值: 1625,
    技能基础伤害_最大值: 1625 + 15,
    技能伤害系数: 获取实际系数(390 * 0.9 * 1.065 * 0.9 * 0.8 * 1.1 * 1.15),
    技能增益列表: 溟海御波增益,
  },
  {
    // 20684
    技能名称: '海运南冥·远',
    统计名称: '海运南冥',
    所属武学技能: '海运南冥',
    技能基础伤害_最小值: 1562,
    技能基础伤害_最大值: 1562 + 15,
    技能伤害系数: 获取实际系数(250 * 1.8 * 0.8 * 1.1 * 0.9 * 0.85 * 1.1 * 1.15),
    技能增益列表: 海运南冥增益,
  },
  {
    // 20685
    技能名称: '海运南冥·近',
    统计名称: '海运南冥',
    所属武学技能: '海运南冥',
    技能基础伤害_最小值: 2083,
    技能基础伤害_最大值: 2083 + 15,
    技能伤害系数: 获取实际系数(250 * 2 * 0.8 * 1.1 * 0.9 * 0.85 * 1.1 * 1.15),
    技能增益列表: 海运南冥增益,
  },
  {
    // 20323
    技能名称: '逐波灵游',
    技能基础伤害_最小值: 833,
    技能基础伤害_最大值: 833 + 10,
    技能伤害系数: 获取实际系数(200 * 0.9 * 1.06 * 0.9 * 1.15),
    技能增益列表: 逐波灵游增益,
  },
  {
    // 36282
    技能名称: '定波砥澜',
    技能基础伤害_最小值: 86,
    技能基础伤害_最大值: 86 + 5,
    技能伤害系数: 获取实际系数(200 * 1.1),
    武器伤害系数: 1,
    技能增益列表: 通用增益,
  },
  {
    // 19819
    技能名称: '木落雁归',
    技能基础伤害_最小值: 1083,
    技能基础伤害_最大值: 1083 + 15,
    技能伤害系数: 获取实际系数(260 * 1.1 * 1.15),
    武器伤害系数: 2,
    技能增益列表: 木落雁归增益,
  },
  {
    // 19766
    技能名称: '击水三千·一',
    统计名称: '击水三千',
    所属武学技能: '击水三千',
    技能基础伤害_最小值: 500,
    技能基础伤害_最大值: 500 + 15,
    技能伤害系数: 获取实际系数(120 * 1.2 * 1.1),
    武器伤害系数: 1,
    技能增益列表: 击水三千增益,
  },
  {
    // 19767
    技能名称: '击水三千·二',
    统计名称: '击水三千',
    所属武学技能: '击水三千',
    技能基础伤害_最小值: 500,
    技能基础伤害_最大值: 500 + 15,
    技能伤害系数: 获取实际系数(135 * 1.2 * 1.1),
    武器伤害系数: 1,
    技能增益列表: 击水三千增益,
  },
  {
    // 19768
    技能名称: '击水三千·三',
    统计名称: '击水三千',
    所属武学技能: '击水三千',
    技能基础伤害_最小值: 500,
    技能基础伤害_最大值: 500 + 15,
    技能伤害系数: 获取实际系数(150 * 1.2 * 1.1),
    武器伤害系数: 1,
    技能增益列表: 击水三千增益,
  },
  {
    // 20052
    技能名称: '浮游天地',
    技能基础伤害_最小值: 833,
    技能基础伤害_最大值: 833 + 10,
    技能伤害系数: 获取实际系数(200 * 0.7),
    武器伤害系数: 2,
    技能增益列表: 浮游天地增益,
  },
  {
    // 25273
    技能名称: '青冥',
    技能基础伤害_最小值: 133,
    技能基础伤害_最大值: 133 + 10,
    技能伤害系数: 获取实际系数((130 + 16) * 1.15 * 0.7),
    技能增益列表: 通用增益,
  },
  {
    // 18386
    技能名称: '青冥(DOT)·六',
    统计名称: '青冥(DOT)',
    技能基础伤害_最小值: 50,
    技能基础伤害_最大值: 50,
    技能伤害系数: 获取实际系数(550, { dot跳数: 6, dot间隔: 32 }),
    伤害计算次数: 6,
    技能增益列表: 通用增益,
  },
  {
    // 25783
    技能名称: '木落雁归·神兵',
    技能基础伤害_最小值: 20,
    技能基础伤害_最大值: 20 + 2,
    技能伤害系数: 获取实际系数(50),
    技能增益列表: 通用增益,
  },
  {
    // 19557
    技能名称: '御波驾澜(DOT)·一',
    统计名称: '御波驾澜(DOT)',
    技能基础伤害_最小值: 25,
    技能基础伤害_最大值: 25,
    技能伤害系数: 获取实际系数(680, { dot跳数: 6, dot间隔: 48 }),
    伤害计算次数: 1,
    技能增益列表: 通用增益,
  },
  {
    // 19557
    技能名称: '御波驾澜(DOT)·二',
    统计名称: '御波驾澜(DOT)',
    技能基础伤害_最小值: 25,
    技能基础伤害_最大值: 25,
    技能伤害系数: 获取实际系数(680, { dot跳数: 6, dot间隔: 48 }),
    伤害计算次数: 2,
    技能增益列表: 通用增益,
  },
  {
    // 19557
    技能名称: '御波驾澜(DOT)·三',
    统计名称: '御波驾澜(DOT)',
    技能基础伤害_最小值: 25,
    技能基础伤害_最大值: 25,
    技能伤害系数: 获取实际系数(680, { dot跳数: 6, dot间隔: 48 }),
    伤害计算次数: 3,
    技能增益列表: 通用增益,
  },
  {
    // 伤腕
    技能名称: '昆吾·弦刃',
    真实伤害: 145300, // 雾海寻龙版本改为固定伤害，只吃秋肃和等级减伤
    伤害计算类型标记: [计算公式计算类型.真实伤害, 计算公式计算类型.等级减伤, 计算公式计算类型.易伤],
  },
  {
    // 伤鞋
    技能名称: '刃凌',
    真实伤害: 96900, // 雾海寻龙版本改为固定伤害，只吃秋肃和等级减伤
    伤害计算类型标记: [计算公式计算类型.真实伤害, 计算公式计算类型.等级减伤, 计算公式计算类型.易伤],
  },
]

const 技能增益 = {}

export { 技能增益 }
export default 技能基础数据
