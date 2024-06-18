import { 奇穴列表数据类型 } from '@/@types/奇穴'
import { 循环数据 } from '@/@types/循环'
import { 技能基础数据模型, 技能增益列表类型 } from '@/@types/技能'
import { 角色基础属性类型 } from '@/@types/角色'

// 心法配置类型
export interface 心法配置类型 {
  /**
   * @name 数据提供
   * 本心法模块的数据提供者
   */
  数据提供: string
  /**
   * @name 名称
   * 对应心法名称
   */
  名称: string
  /**
   * @name 名称
   * 对应心法名称，为避免网页上中文名字过长做的简写
   */
  简写: string
  /**
   * @name 所属门派
   * 决定能否穿哪个门派的套装
   * 这里的门派必须按以下类型填写，因为涉及到和魔盒数据的对接问题
   */
  所属门派: 门派类型
  /**
   * @name 心法所属端
   */
  心法所属端?: '旗舰' | '无界'
  /**
   * @name 主属性
   * 职业的主属性
   * 例：天策 力道
   */
  主属性: 主属性类型
  /**
   * @name 功法类型
   * 对应魔盒字段 duty
   */
  功法: 功法类型
  /**
   * @name 伤害属性
   * 混元 | 毒性 | 阴性 | 阳性 | 外功
   * @default 外功
   */
  伤害属性?: 伤害属性类型
  /**
   * @name 基础属性
   * 该心法的被动基础属性
   */
  基础属性: Partial<角色基础属性类型>
  /**
   * @name 主属性额外加成
   * 该心法主属性对其他属性的加成系数
   * 注意，心法的属性加成计算均为郭氏系数
   */
  主属性额外加成: Partial<角色基础属性类型>
  /**
   * @name 系统配置
   * 计算器系统配置，主题色，背景图等
   */
  系统配置: 系统配置类型
  /**
   * @name 默认秘籍
   */
  默认数据: any
  /**
   * @name 技能系数
   */
  技能系数: 技能基础数据模型[]
  /**
   * @name 技能增益
   */
  技能增益: { [key: string]: 技能增益列表类型[] }
  /**
   * @name 计算循环
   */
  计算循环: 循环数据[]
  /**
   * @name 奇穴数据
   */
  奇穴数据: 奇穴列表数据类型[]
  /**
   * @name 性能功能关闭数组
   * @description 针对某些心法需要关闭的很耗费性能的功能
   */
  性能功能关闭数组?: 性能功能关闭数组类型[]
  /**
   * @name 覆盖率
   * @description 针对心法的覆盖率数值覆盖
   */
  覆盖率?: Partial<{ [key in 支持修改覆盖率类型]: number }>
}

type 主属性类型 = '力道' | '身法' | '根骨' | '元气'

type 功法类型 = '内功' | '外功' // | '坦' | '奶' duty 1 内功 2 外功

type 伤害属性类型 = '外功' | '混元' | '毒性' | '阴性' | '阳性'

type 性能功能关闭数组类型 = '优化算法' | '一键附魔'

type 门派类型 =
  | '天策'
  | '少林'
  | '万花'
  | '七秀'
  | '五毒'
  | '藏剑'
  | '纯阳'
  | '丐帮'
  | '明教'
  | '唐门'
  | '苍云'
  | '长歌'
  | '霸刀'
  | '蓬莱'
  | '凌雪'
  | '衍天'
  | '药宗'
  | '刀宗'
  | '万灵'

type 系统配置类型 = {
  主题色: string
  心法图标: string
  背景色?: string // 背景色
  收益柱形图颜色?: string
  背景图: string[] // 最好放在线连接地址，节约本地项目占用空间
  背景色渐变?: string // 背景美化样式的css，不知道怎么写好看就先空着
}

export type 支持修改覆盖率类型 = '套装会心会效' | '风特效腰坠'
