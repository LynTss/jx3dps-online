/**
 * @name 心法模块-山海心诀
 * 模块写入者：唐宋
 */
import type { 心法配置类型 } from '@/心法模块/interface'

import 背景图 from './资源/背景图'
import 默认数据 from './默认数据'
import 技能系数, { 技能增益 } from './技能系数'
import 奇穴数据 from './奇穴'
import 计算循环 from './计算循环'
import 增益快捷设置数据 from './增益快捷设置数据'

const 心法配置: 心法配置类型 = {
  名称: '山海心诀',
  所属门派: '万灵',
  主属性: '身法',
  功法: '外功',
  伤害属性: '外功',
  基础属性: { 基础攻击: 3277, 会心等级: 2929 },
  主属性额外加成: { 面板攻击: 1485 / 1024, 会心等级: 594 / 1024 },
  系统配置: {
    主题色: '#dca53e',
    心法图标: 'https://img.jx3box.com/image/xf/10756.png',
    背景图: 背景图,
    背景色渐变: `linear-gradient(to right, rgba(124, 85, 2, 0.4) 5%, rgba(105, 86, 5, 0.15) 70%)`,
  },
  奇穴数据: 奇穴数据,
  默认数据: 默认数据,
  技能系数: 技能系数,
  技能增益: 技能增益,
  计算循环: 计算循环,
  增益快捷设置数据: 增益快捷设置数据,
}

export default 心法配置
