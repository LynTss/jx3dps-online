import { 属性类型 } from '@/@types/属性'
import { 技能基础数据模型 } from '@/@types/技能'
import { 计算公式计算类型 } from '@/@types/伤害计算'
import { 获取破招实际系数 } from '@/数据/数据工具/获取技能系数'

import 通用增益 from './技能增益/通用增益/通用增益'
import 裁叶饮刃增益 from './技能增益/裁叶饮刃'
import 银光照雪增益 from './技能增益/银光照雪'
import 且待时休增益 from './技能增益/且待时休'
import 川乌射罔增益 from './技能增益/川乌射罔'
import 钩吻断肠增益 from './技能增益/钩吻断肠'
import 商陆缀寒增益 from './技能增益/商陆缀寒'
import 无方中和增益 from './技能增益/无方中和'
import 苍棘缚地增益 from './技能增益/苍棘缚地'

const 逆乱数据: Partial<技能基础数据模型> = {
  统计名称: '逆乱(DOT)',
  DOT生效间隔: 32,
  DOT跳数: 8,
  基础伤害_基础值: 95,
  技能伤害系数: 90 * 1.5 * 0.8 * 1.05 * 1.1,
  技能增益列表: 通用增益,
}

const 技能基础数据: 技能基础数据模型[] = [
  {
    技能名称: '破', // 32841
    统计名称: '破',
    技能伤害系数: 获取破招实际系数(1048576 * (0.525 * 1.2 - 1)),
    技能增益列表: 通用增益,
    技能等级数据: {
      1: { 技能伤害系数: 获取破招实际系数(1048576 * (0.525 * 1.2 - 1)) },
      2: { 技能伤害系数: 获取破招实际系数(1048576 * (1.008 * 1.2 - 1)) },
      3: { 技能伤害系数: 获取破招实际系数(1048576 * (0.21 * 1.2 - 1)) },
      4: { 技能伤害系数: 获取破招实际系数(1048576 * (0.35 * 1.2 - 1)) },
      5: { 技能伤害系数: 获取破招实际系数(1048576 * (0.7 * 1.2 - 1)) },
      6: { 技能伤害系数: 获取破招实际系数(1048576 * (1.05 * 1.2 - 1)) },
    },
  },
  {
    技能名称: '裁叶饮刃', // 27451
    伤害类型: '外功',
    技能伤害系数: 16,
    武器伤害系数: 1,
    技能增益列表: 裁叶饮刃增益,
  },
  {
    技能名称: '无方中和', // 28081
    技能伤害系数: 160 * 0.9 * 0.92 * 1.1 * 1.1,
    基础伤害_基础值: 100,
    基础伤害_浮动值: 10,
    技能增益列表: 无方中和增益,
  },
  {
    技能名称: '逆乱(DOT)·一', // 24846
    ...逆乱数据,
    伤害计算次数: 1,
  },
  {
    技能名称: '逆乱(DOT)·二', // 24846
    ...逆乱数据,
    伤害计算次数: 2,
  },
  {
    技能名称: '逆乱(DOT)·三', // 24846
    ...逆乱数据,
    伤害计算次数: 3,
  },
  {
    技能名称: '逆乱(DOT)·四', // 24846
    ...逆乱数据,
    伤害计算次数: 4,
  },
  {
    技能名称: '逆乱(DOT)·五', // 24846
    ...逆乱数据,
    伤害计算次数: 5,
  },
  {
    技能名称: '逆乱(DOT)·六', // 24846
    ...逆乱数据,
    伤害计算次数: 6,
  },
  {
    技能名称: '逆乱(DOT)·七', // 24846
    ...逆乱数据,
    伤害计算次数: 7,
  },
  {
    技能名称: '逆乱(DOT)·八', // 24846
    ...逆乱数据,
    伤害计算次数: 8,
  },
  {
    技能名称: '逆乱(DOT)·九', // 24846
    ...逆乱数据,
    伤害计算次数: 9,
  },
  {
    技能名称: '逆乱(DOT)·十', // 24846
    ...逆乱数据,
    伤害计算次数: 10,
  },
  {
    技能名称: '逆乱(DOT)·十一', // 24846
    ...逆乱数据,
    伤害计算次数: 11,
  },
  {
    技能名称: '逆乱(DOT)·十二', // 24846
    ...逆乱数据,
    伤害计算次数: 12,
  },
  {
    技能名称: '逆乱(DOT)·十三', // 24846
    ...逆乱数据,
    伤害计算次数: 13,
  },
  {
    技能名称: '逆乱(DOT)·十四', // 24846
    ...逆乱数据,
    伤害计算次数: 14,
  },
  {
    技能名称: '逆乱(DOT)·十五', // 24846
    ...逆乱数据,
    伤害计算次数: 15,
  },
  {
    技能名称: '逆乱(DOT)·十六', // 24846
    ...逆乱数据,
    伤害计算次数: 16,
  },
  {
    技能名称: '逆乱(DOT)', // 24846
    ...逆乱数据,
  },
  {
    技能名称: '商陆缀寒', // 27552
    技能伤害系数: 200 * 1.15,
    基础伤害_基础值: 379,
    基础伤害_浮动值: 20,
    技能增益列表: 商陆缀寒增益,
  },
  {
    技能名称: '钩吻断肠', // 27555
    技能伤害系数: 120,
    基础伤害_基础值: 114,
    基础伤害_浮动值: 10,
    技能增益列表: 钩吻断肠增益,
  },
  {
    技能名称: '川乌射罔', // 27557
    技能伤害系数: 208,
    基础伤害_基础值: 144,
    基础伤害_浮动值: 10,
    技能增益列表: 川乌射罔增益,
  },
  {
    技能名称: '沾衣未妨', // 27579
    统计名称: '沾衣未妨',
    技能伤害系数: 150 * 0.8,
    基础伤害_基础值: 125,
    基础伤害_浮动值: 10,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '且待时休', // 27584
    统计名称: '且待时休',
    技能伤害系数: 72 * 1.8 * 1.2 * 1.15,
    基础伤害_基础值: 206,
    基础伤害_浮动值: 10,
    技能增益列表: 且待时休增益,
  },
  {
    技能名称: '且待时休·苍棘缚地', // 28409
    统计名称: '且待时休',
    技能伤害系数: 72 * 1.8,
    基础伤害_基础值: 206,
    基础伤害_浮动值: 10,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '银光照雪', // 28346
    秘籍依赖技能: '银光照雪',
    技能伤害系数: 120,
    基础伤害_基础值: 410,
    基础伤害_浮动值: 20,
    技能增益列表: 银光照雪增益,
  },
  {
    技能名称: '银光照雪·结草', // 34699
    秘籍依赖技能: '银光照雪',
    技能伤害系数: 120,
    基础伤害_基础值: 410,
    基础伤害_浮动值: 20,
    技能增益列表: 银光照雪增益,
  },
  {
    技能名称: '惊鸿掠水', // 27539
    技能伤害系数: 100,
    基础伤害_基础值: 156,
    基础伤害_浮动值: 15,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '含锋破月', // 29505
    技能伤害系数: 280 * 1.15 * 0.85,
    基础伤害_基础值: 575,
    基础伤害_浮动值: 20,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '含锋破月·结草', // 34700
    技能伤害系数: 280 * 1.15 * 0.85,
    基础伤害_基础值: 575,
    基础伤害_浮动值: 20,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '飞叶满襟', // 29506
    技能伤害系数: 340 * 1.15 * 0.85,
    基础伤害_基础值: 625,
    基础伤害_浮动值: 20,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '飞叶满襟·结草', // 34702
    技能伤害系数: 340 * 1.15 * 0.85,
    基础伤害_基础值: 625,
    基础伤害_浮动值: 20,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '折枝拂露', // 30735
    技能伤害系数: 410 * 1.15 * 1.1 * 0.65,
    基础伤害_基础值: 730,
    基础伤害_浮动值: 20,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '折枝留春', // 32922
    技能伤害系数: 600,
    基础伤害_基础值: 730,
    基础伤害_浮动值: 20,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '苍棘缚地', // 27657
    技能伤害系数: 300 * 0.9,
    基础伤害_基础值: 137,
    基础伤害_浮动值: 10,
    技能增益列表: 苍棘缚地增益,
  },
  {
    技能名称: '疾根', // 29674
    技能伤害系数: 170 * 0.5 * 0.7 * 1.1,
    基础伤害_基础值: 120,
    基础伤害_浮动值: 10,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '紫叶沉疴', // 28385
    技能伤害系数: 190,
    基础伤害_基础值: 417,
    基础伤害_浮动值: 15,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '紫伏', // 28434
    技能伤害系数: 125 * 1.5,
    基础伤害_基础值: 33,
    基础伤害_浮动值: 5,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '应理与药', // 35367
    技能伤害系数: 580 * 1.15 * 1.5,
    基础伤害_基础值: 100,
    基础伤害_浮动值: 10,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '商陆缀寒·神兵', // 29698
    技能伤害系数: 65,
    基础伤害_基础值: 20,
    基础伤害_浮动值: 2,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '鹿王本生', // 29695
    技能伤害系数: 220,
    基础伤害_基础值: 20,
    基础伤害_浮动值: 2,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '养荣', // 36508
    技能伤害系数: 300 * 1.9,
    基础伤害_基础值: 100,
    基础伤害_浮动值: 10,
    技能增益列表: 通用增益,
  },
  {
    技能名称: '荆障', // 36068
    技能伤害系数: 125,
    基础伤害_基础值: 33,
    基础伤害_浮动值: 5,
    技能增益列表: 通用增益,
  },
  // --------------
  {
    技能名称: '逐云寒蕊',
    技能伤害系数: 384,
    基础伤害_基础值: 40,
    基础伤害_浮动值: 17,
    伤害计算次数: 1,
    技能增益列表: [
      ...通用增益,
      {
        增益名称: '飘黄',
        增益所在位置: '技能',
        增益类型: '全局启用',
        增益启用: true,
        增益集合: [{ 属性: 属性类型.郭氏外功基础防御, 值: -1024 }],
      },
    ],
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
  {
    // 龙门武器
    技能名称: '剑风',
    基础伤害_基础值: 3950,
    技能增益列表: 通用增益,
  },
]

export default 技能基础数据

const 技能增益 = {
  通用增益,
  裁叶饮刃增益,
  银光照雪增益,
  且待时休增益,
  川乌射罔增益,
  钩吻断肠增益,
  商陆缀寒增益,
  无方中和增益,
}

export { 技能增益 }
