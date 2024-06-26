import { 属性加成, 属性类型 } from './属性'
// import { 镶嵌增伤类型枚举 } from './枚举'
import { 角色基础属性类型 } from './角色'

// 装备类型
export enum 装备类型枚举 {
  普通 = '普通',
  副本精简 = '副本精简',
  切糕 = '切糕',
  门派套装 = '门派套装',
  试炼精简 = '试炼精简',
  特效武器 = '特效武器',
  橙武 = '橙武',
  PVX = 'PVX',
}

// 装备特效枚举
export enum 装备特效枚举 {
  外功_水特效武器 = '外功_水特效武器',
  外功_水特效武器_英雄 = '外功_水特效武器_英雄',
  内功_水特效武器 = '内功_水特效武器',
  内功_水特效武器_英雄 = '内功_水特效武器_英雄',
  门派套装_两件套双会 = '门派套装_两件套双会',
  门派套装_四件套双会 = '门派套装_四件套双会',
  切糕_普通 = '切糕_普通',
  切糕_英雄 = '切糕_英雄',
  冬至套装 = '冬至套装',
  大橙武特效 = '大橙武特效',
  小橙武特效 = '小橙武特效',
  风特效腰坠 = '风特效腰坠',
  风特效腰坠_英雄 = '风特效腰坠_英雄',
  龙门飞剑武器 = '龙门飞剑武器',
}

/**
 * @name 装备属性信息模型
 */
export interface 装备属性信息模型 {
  /**
   * @name 装备id
   */
  id?: number
  /**
   * @name 装备iid
   */
  uid?: string | number
  /**
   * @name 装备名称
   */
  装备名称: string
  /**
   * @name 装备品级
   */
  装备品级: number
  /**
   * @name 装备主属性
   */
  装备主属性: '通用' | '力道' | '身法' | '元气' | '根骨'
  /**
   * @name 武器伤害_最小值
   */
  武器伤害_最小值?: number
  /**
   * @name 武器伤害_最大值
   */
  武器伤害_最大值?: number
  /**
   * @name 装备类型
   */
  装备类型: 装备类型枚举
  /**
   * @name 最大精炼等级
   */
  最大精炼等级?: number
  /**
   * @name 当前精炼等级
   */
  当前精炼等级?: number
  /**
   * @name 装备增益
   */
  装备增益: 属性加成[]
  /**
   * @name 镶嵌孔数组
   */
  镶嵌孔数组?: 镶嵌孔数组类型[]
  /**
   * @name 装备特效
   */
  装备特效?: 装备特效枚举
  /**
   * @name 所属门派
   * @default 通用
   */
  所属门派?: '通用' | string
  /**
   * @name 装备部位
   */
  装备部位?: string
}

// 镶嵌孔数据
export interface 镶嵌孔数组类型 {
  /**
   * @name 镶嵌孔名
   */
  镶嵌类型?: 属性类型
  /**
   * @name 镶嵌宝石等级
   */
  镶嵌宝石等级?: number
}

export interface 装备增益类型 {
  /**{
    /**
     * @name 套装技能
     */
  套装技能?: number
  /**
   * @name 套装会心会效
   */
  套装会心会效?: boolean
  /**
   * @name 水特效武器
   */
  水特效武器?: boolean
  /**
   * @name 水特效武器_英雄
   */
  水特效武器_英雄?: boolean
  /**
   * @name 龙门飞剑武器
   */
  龙门飞剑武器?: boolean
  /**
   * @name 特效腰坠
   */
  风特效腰坠?: boolean
  /**
   * @name 特效腰坠_英雄
   */
  风特效腰坠_英雄?: boolean
  /**
   * @name 大橙武特效
   */
  大橙武特效?: boolean
  /**
   * @name 大橙武特效
   */
  小橙武特效?: boolean
  /**
   * @name 切糕双会加成数量
   */
  切糕会心?: boolean
  /**
   * @name 切糕无双加成数量
   */
  切糕无双?: boolean
  /**
   * @name 切糕双会加成数量_英雄
   */
  切糕会心_英雄?: boolean
  /**
   * @name 切糕无双加成数量_英雄
   */
  切糕无双_英雄?: boolean
  /**
   * @NAME 冬至套装全属性加成
   */
  冬至套装?: boolean
  /**
   * @name 装备大附魔_伤帽
   */
  大附魔_伤帽?: boolean
  /**
   * @name 装备大附魔_伤衣
   */
  大附魔_伤衣?: boolean
  /**
   * @name 装备大附魔_伤腰
   */
  大附魔_伤腰?: boolean
  /**
   * @name 装备大附魔_伤腕
   */
  大附魔_伤腕?: boolean
  /**
   * @name 装备大附魔_伤鞋
   */
  大附魔_伤鞋?: boolean
}

/**
 * @name 配装器装备信息模型-装备列表
 */
export interface 选择装备数据类型 {
  /**
   * @name 装备id
   */
  id: number
  /**
   * @name 当前精炼等级
   */
  当前精炼等级: number
  /**
   * @name 镶嵌孔数组
   */
  镶嵌孔数组: 镶嵌孔数组类型[]
  /**
   * @name 附魔名
   */
  附魔?: string
  /**
   * @name 装备部位枚举
   */
  装备部位: 装备位置部位枚举
}

/**
 * @name 装备位置部位枚举
 */
export enum 装备位置部位枚举 {
  '_1' = '帽子',
  '_2' = '衣服',
  '_3' = '腰带',
  '_4' = '护腕',
  '_5' = '下装',
  '_6' = '鞋子',
  '_7' = '项链',
  '_8' = '腰坠',
  '_9' = '戒指',
  '_10' = '戒指',
  '_11' = '暗器',
  '_12' = '武器',
}

export interface 装备信息数据类型 {
  /**
   * @name 装备基础属性
   * 本部分为装备上所有属性的加成和，方便计算
   * 主属性对各个其他属性的加成在这一步还没有进行计算
   */
  装备基础属性: 角色基础属性类型
  /**
   * @name 装备列表
   */
  装备列表: 选择装备数据类型[]
  /**
   * @name 五彩石
   */
  五彩石: string
  /**
   * @name 装备增益
   * 在这里提前保存，避免最后计算的时候再获取。提升效率
   */
  装备增益: 装备增益类型
}

export type 装备增益数据类型 = {
  [key in 装备增益可选类型类型]: 属性加成[]
}

export type 装备增益可选类型类型 =
  | '套装会心会效'
  | '切糕会心'
  | '切糕无双'
  | '切糕会心_英雄'
  | '切糕无双_英雄'
  | '风特效腰坠'
  | '风特效腰坠_英雄'
  | '大附魔_伤帽'
  | '大附魔_伤腰'
  | '大附魔_伤腕'
  | '大附魔_伤鞋'
  | '龙门飞剑武器'
  | '冬至套装'
  | '水特效武器'
  | '水特效武器_英雄'
  | '大附魔_伤衣'
