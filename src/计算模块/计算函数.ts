import useCycle from '@/hooks/use-cycle'
import type { RootState } from '@/store/index'

import { 选中秘籍信息 } from '@/@types/秘籍'
import { 属性加成 } from '@/@types/属性'
import { 增益选项数据类型 } from '@/@types/团队增益'
// import { 角色基础属性类型 } from '@/@types/角色'
import { 装备信息数据类型 } from '@/@types/装备'
import { 循环技能详情 } from '@/@types/循环'
import { 当前计算结果类型 } from '@/@types/输出'
import { 更新当前计算结果 } from '@/store/data'
import { INT } from '@/工具函数/help'

import { 获取计算目标信息 } from './统一工具函数/工具函数'
import { 获取判断增益后技能系数 } from './统一工具函数/技能增益启用计算'
import 循环秒伤计算 from './循环秒伤计算'

interface CurrentDpsFunctionProps {
  是否更新显示计算结果?: boolean // 是否更新当前dps结果

  更新装备信息?: 装备信息数据类型 // 传入的需要更新的装备信息
  更新增益数据?: 增益选项数据类型 // 传入的需要更新团队增益数据
  更新默认增益集合?: 属性加成[] // 用于增益计算
  是否郭氏计算?: boolean // 是否郭氏计算
  更新计算循环名称?: string // 更新循环名称
  更新奇穴数据?: string[] // 更新奇穴数据
  更新秘籍信息?: 选中秘籍信息
  更新增益启用?: boolean

  // 用于模拟器计算
  更新循环技能列表?: 循环技能详情[]
  更新计算时间?: number
}

export const 秒伤计算 =
  (props?: CurrentDpsFunctionProps) =>
  (dispatch, getState): 当前计算结果类型 => {
    const {
      是否更新显示计算结果 = false,
      更新装备信息 = {},
      更新增益数据 = {},
      是否郭氏计算 = true,
      更新增益启用 = false,
      更新计算循环名称 = '',
      // 是否郭氏计算 = false,
      更新计算时间,
      更新循环技能列表,
      更新奇穴数据,
      更新秘籍信息,
    } = props || {}

    // console.time('计算耗时')
    const currentState: RootState = getState?.() || {}

    const 网络延迟 = currentState?.data?.网络延迟 || 0
    // const 当前角色面板 = { ...currentState?.data?.角色基础属性, ...更新角色基础属性 }
    const 当前装备信息 = { ...currentState?.data?.装备信息, ...更新装备信息 }
    const 奇穴数据 = 更新奇穴数据?.length ? 更新奇穴数据 : currentState.data.当前奇穴信息

    const 当前目标 = 获取计算目标信息(currentState?.data?.当前输出计算目标名称)
    const 增益启用 = 更新增益启用 || currentState?.data?.增益启用
    const 当前计算循环名称 = 更新计算循环名称 || currentState?.data?.当前计算循环名称
    const 当前秘籍信息 = 更新秘籍信息 || currentState?.data?.当前秘籍信息
    const 增益数据 = { ...currentState?.data?.增益数据, ...更新增益数据 }
    const 自定义循环列表 = currentState?.data?.自定义循环列表 || []

    const 技能基础数据 = 获取判断增益后技能系数({
      秘籍信息: 当前秘籍信息,
      奇穴数据: 奇穴数据,
      装备增益: 当前装备信息?.装备增益,
    })

    const { 当前循环信息, 计算循环详情 } = useCycle({
      覆盖数据: {
        装备信息: 当前装备信息,
        增益数据: 增益数据,
        增益启用: 增益启用,
        网络延迟: 网络延迟,
        自定义循环列表: 自定义循环列表,
        当前计算循环名称: 当前计算循环名称,
      },
      使用内存数据: false,
    })

    const 当前循环技能列表 = 更新循环技能列表?.length ? 更新循环技能列表 : 计算循环详情?.技能详情

    if (!当前循环技能列表?.length || !当前装备信息?.装备基础属性?.基础攻击) {
      const 计算结果 = { 总伤: 0, 秒伤: 0, 秒伤计算时间: 0, 计算结果技能列表: [] }
      if (是否更新显示计算结果) {
        dispatch?.(更新当前计算结果(计算结果))
      }
      return 计算结果
    }

    const 战斗时间 = 更新计算时间 || 计算循环详情?.战斗时间 || 0

    // dps结果计算
    const { 总伤, 计算结果技能列表 } = 循环秒伤计算({
      计算循环: 当前循环技能列表,
      装备信息: 当前装备信息,
      当前目标: 当前目标,
      技能基础数据: 技能基础数据,
      增益启用: 增益启用,
      增益数据: 增益数据,
      战斗时间,
      是否郭氏计算,
      快照计算: 当前循环信息?.快照计算 || [],
    })

    // 每秒dps
    const 秒伤 = 是否郭氏计算 ? INT(总伤 / 战斗时间) : 总伤 / 战斗时间

    const 计算结果 = { 总伤, 秒伤, 秒伤计算时间: 战斗时间, 计算结果技能列表 }

    if (是否更新显示计算结果) {
      dispatch?.(更新当前计算结果(计算结果))
    }

    // console.timeEnd('计算耗时')

    return 计算结果
  }

// 增加setTimeout，等dispatch的state都更新完了再执行计算函数
export const 触发秒伤计算 = (props?: CurrentDpsFunctionProps) => (dispatch) => {
  setTimeout(() => {
    dispatch?.(秒伤计算(props))
  }, 0)
}
