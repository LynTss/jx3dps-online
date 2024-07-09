/**
 * 打包计算函数
 * 用做nodejs、worker等直接调用js进行计算
 */

import 根据装备信息获取基础属性, { 基础属性计算 } from '../../功能模块/基础设置/属性录入/配装器/工具函数/根据装备信息获取基础属性'
import 获取当前数据 from '../../数据/数据工具/获取当前数据'
import { 角色默认基础属性 } from '../../工具函数/init/默认数据'
import { 收益增益属性计算, 获取当前各属性最大附魔 } from '../../功能模块/计算结果/收益图表/工具'
import { 秒伤计算 } from '../计算函数'
import { 镶嵌名称映射 } from './maps.mjs'
import { 获取角色需要展示的面板数据 } from '../../功能模块/基础设置/面板信息/工具'
import { 自身属性系数 } from '../../数据/常量'

export const 计算秒伤 = (params) => {
  const { 心法 = '山海心诀', 奇穴 = [], 装备列表 = [], 装备增益 = {}, 五彩石 = { 属性数组: [] } } = params || {}

  const 循环类型 = 装备增益?.大橙武特效 ? '橙武' : '紫武'

  const 当前数据 = 获取当前数据(心法)
  const 全部循环信息 = 当前数据.计算循环 || []

  const 循环名称 = 获取对应的循环名称(心法, 奇穴, 循环类型)
  const 对应循环奇穴 = 全部循环信息?.find(item => item?.名称 === 循环名称)?.奇穴 || 奇穴

  if (!循环名称) {
    return {
      错误: '该心法不支持计算',
    }
  }

  const 计算用装备信息 = 获取需要计算的装备信息(装备列表, 装备增益)

  // 特殊处理部分门派需要指定加速的情况
  if(心法 === "花间游") {
    // 当花间配装无加速时，按一段加速计算
    if (!计算用装备信息.装备基础属性.加速等级) {
      计算用装备信息.装备基础属性.加速等级 = 96
    }
  }

  // 单独增加五彩石的属性
  计算用装备信息.装备基础属性 = 计算五彩石属性增益(计算用装备信息.装备基础属性, 五彩石)

  const 木桩计算结果 = 伤害计算函数(心法, 计算用装备信息, 对应循环奇穴, 循环名称, false, true)

  const 木桩属性收益 = 收益计算(心法, 计算用装备信息, 对应循环奇穴, 循环名称, false)

  const 副本计算结果 = 伤害计算函数(心法, 计算用装备信息, 对应循环奇穴, 循环名称, true, true)

  const 副本属性收益 = 收益计算(心法, 计算用装备信息, 对应循环奇穴, 循环名称, true)

  const 获取最终面板信息 = 获取角色需要展示的面板数据({
    装备信息:计算用装备信息,
    当前奇穴信息:对应循环奇穴,
  })

  const mapKeyList = [当前数据?.主属性, '攻击', '会心', '会效', '破防', '无双', '破招', '全能', '加速']


  const 显示信息 = {}
  mapKeyList.forEach(key => {
    显示信息[key] = {
      面板: 获取面板显示数据(key, 获取最终面板信息, 当前数据?.主属性),
      木桩收益: 木桩属性收益?.find(a => a.key === key)?.收益 || 0,
      副本收益: 副本属性收益?.find(a => a.key === key)?.收益 || 0,
    } 
  })

  const 人物面板 ={
    面板信息: 获取最终面板信息,
    显示信息: 显示信息
  }

  return {
    循环名称,
    对应循环奇穴,
    木桩计算结果,
    木桩属性收益,
    副本计算结果,
    副本属性收益,
    人物面板
  }
}

const 伤害计算函数 = (心法, 装备信息, 奇穴, 获取对应的循环名称, 增益启用, 是否郭氏计算 = false) => {
  const 团队增益数据列表 = 获取当前数据(心法)?.默认数据?.增益快捷设置数据 || []
  const 默认秘籍 = 获取当前数据(心法)?.默认数据?.秘籍 || []
  const 团队增益数据 = 团队增益数据列表?.find((item) => item?.快捷名称 === '副本常用')

  const 计算结果 = 秒伤计算?.({
    更新装备信息: 装备信息,
    更新奇穴数据: 奇穴,
    是否郭氏计算,
    更新计算循环名称: 获取对应的循环名称,
    更新增益启用: 增益启用,
    更新秘籍信息: 默认秘籍,
    更新增益数据: 增益启用 ? 团队增益数据 : [],
  })?.()

  // 收益计算
  return {
    总伤:计算结果.总伤,
    秒伤:计算结果.秒伤,
    秒伤计算时间:计算结果.秒伤计算时间,
    技能统计显示: 技能结果排序(计算结果)
  }
}

const 技能结果排序 = (显示计算结果) => {
  let list = []
    const 根据统计名称生成数组 = []
    const 同名数组 = {}
    显示计算结果?.计算结果技能列表?.forEach((技能) => {
      if (技能?.统计名称) {
        同名数组[技能?.统计名称] = {
          显示名称: 技能?.统计名称 || 技能?.技能名称,
          统计名称: 技能?.统计名称,
          技能名称: 技能?.技能名称,
          技能数量: (同名数组[技能?.统计名称]?.技能数量 || 0) + (技能?.技能数量 || 0),
          总会心个数:
            (同名数组[技能?.统计名称]?.总会心个数 || 0) + (技能?.会心几率 || 0) * 技能?.技能数量,
          技能总输出: (同名数组[技能?.统计名称]?.技能总输出 || 0) + (技能?.技能总输出 || 0),
        }
      } else {
        根据统计名称生成数组.push({显示名称:技能?.技能名称, ...技能})
      }
    })
    Object.keys(同名数组).forEach((key) => {
      const 技能 = 同名数组[key]
      根据统计名称生成数组.push({
        显示名称: 技能?.统计名称 || 技能?.技能名称,
        ...技能,
        会心几率: (技能.总会心个数 || 0) / 技能.技能数量,
      })
    })
    list = [...根据统计名称生成数组]

  list.sort((a, b) => {
    return b.技能总输出 - a.技能总输出
  })

  return list.filter((item) => {
    return +item.技能总输出 > 0
  })
}
const 收益计算 = (心法, 计算用装备信息, 奇穴, 获取对应的循环名称, 增益启用) => {
  const 附魔收益列表 = (获取当前各属性最大附魔(心法) || []).concat([{ 收益: '全能', 值: 487}]) // 全能写了一半的数值

  const 旧秒伤 =
    伤害计算函数(心法, 计算用装备信息, 奇穴, 获取对应的循环名称, 增益启用, false)?.秒伤 || 0

  const 收益结果列表 = 附魔收益列表.map((item) => {
    const 增益后装备基础数据 = 收益增益属性计算(item?.收益, item?.值, 计算用装备信息?.装备基础属性,心法)
    const 收益秒伤 =
      伤害计算函数(心法, { ...计算用装备信息, 装备基础属性: 增益后装备基础数据 }, 奇穴, 获取对应的循环名称, 增益启用, false)?.秒伤 || 0
    const 收益结果 = Number(((收益秒伤 / 旧秒伤) * 100).toFixed(2))

    return {
      key: `${item.收益}`,
      收益: `${收益结果}%`,
    }
  })

  return 收益结果列表
}

const 获取对应的循环名称 = (心法, 奇穴 = [], 循环类型) => {
  if (心法 === '山海心诀') {
    if (循环类型 === '橙武') {
      return '朝仪_橙武'
    } else if (奇穴.includes('丛云隐月')) {
      if (奇穴.includes('朱厌')) {
        return '朱厌_丛云'
      } else {
        return '朝仪_丛云'
      }
    } else if (奇穴.includes('朱厌')) {
      return '朱厌_压缩'
    } else if (奇穴.includes('桑柘') && 奇穴.includes('棘矢')) {
      return '朝仪_考古'
    } else {
      return '朝仪_三压'
    }
  } else if (心法 === '山海心诀_悟') {
    if (循环类型 === '橙武_手动') {
      return '橙武_手动'
    } else {
      return '紫武_手动'
    }
  } else if (心法 === '孤锋诀') {
    if (循环类型 === '橙武') {
      return '橙武'
    } else if (奇穴.includes('聚疏')) {
      return '无影刀'
    } else {
      return '六破'
    }
  } else if (心法 === '孤锋诀_悟') {
    if (循环类型 === '橙武_手动') {
      return '橙武_手动'
    } else {
      return '紫武_手动'
    }
  } else if (心法 === '凌海诀') {
    if (循环类型 === '橙武') {
      return '橙武'
    } else {
      return '烟涛'
    }
  } else if (心法 === '太玄经') {
    if (循环类型 === '橙武') {
      return '橙武'
    } else if (奇穴.includes('列宿游')) {
      return '鬼列'
    } else if (奇穴.includes('枭神') && 奇穴.includes('追叙')) {
      return '鬼追'
    } else {
      return '堪炸'
    }
  } else if (心法 === '无方') {
    if (循环类型 === '橙武') {
      if (奇穴.includes('避奚') && 奇穴.includes('养荣')) {
        return '避奚养荣_橙武'
      } else if (奇穴.includes('养荣')) {
        return '养荣_橙武'
      } else {
        return '应理_橙武'
      }
    } else if (奇穴.includes('避奚') && 奇穴.includes('养荣')) {
      return '避奚养荣_紫武'
    } else if (奇穴.includes('养荣')) {
      return '养荣_紫武'
    } else {
      return '资深战犯'
    }
  } else if (心法 === '花间游') {
    if (循环类型 === '橙武') {
      if (奇穴.includes('故幽')) {
        return '橙武_故幽'
      } else {
        return '橙武'
      }
    } else if (奇穴.includes('故幽')) {
      return '故幽'
    } else {
      return '焚玉'
    }
  }
}

const 计算五彩石属性增益 = (装备基础信息, 五彩石数据) => {
  let 计算后属性 = { ...装备基础信息 }
  if (五彩石数据?.属性数组?.length) {
    五彩石数据?.属性数组?.forEach((五彩石增益) => {
      const 属性Key = Object.keys(镶嵌名称映射).find((key) => 五彩石增益?.增益类型.includes(key)) || ''
      const 属性类型 = 镶嵌名称映射[属性Key]
      if (属性类型) {
        计算后属性 = 基础属性计算(
          { 属性: 属性类型, 值: +五彩石增益.增益数值 },
          计算后属性
        )
      }
    })
  }
  return 计算后属性
}

const 获取需要计算的装备信息 = (装备列表, 装备增益) => {
  const { 大附魔_伤帽, 大附魔_伤衣, 大附魔_伤腰, 大附魔_伤腕, 大附魔_伤鞋 } = 装备增益

  const 最终装备列表 = 格式化装备列表(装备列表)

  const 附魔列表增益 = 装备列表.map(装备 => 附魔格式化(装备.附魔)).filter(item => item)

  const 装备信息 = 根据装备信息获取基础属性({
    装备基础属性: { ...角色默认基础属性 },
    装备列表: 最终装备列表,
    五彩石: "",
    装备增益: { 大附魔_伤帽, 大附魔_伤衣, 大附魔_伤腰, 大附魔_伤腕, 大附魔_伤鞋 },
  })

  let 装备基础属性 = { ...装备信息.装备基础属性 }


  if (附魔列表增益?.length) {
    附魔列表增益?.forEach((附魔) => {
      if (附魔) {
        装备基础属性 = 基础属性计算(
          { 属性: 附魔.属性, 值: +附魔.值 },
          装备基础属性
        )
      }
    })
  }

  return {
    ...装备信息,
    装备基础属性
  }
}

const 格式化装备列表 = (传入装备列表) => {
  const 装备列表 = 传入装备列表.map((装备) => {
    return {
      id: 装备.id,
      当前精炼等级: 装备.当前精炼等级,
      装备部位: 装备部位格式化(装备),
      附魔: '',
      镶嵌孔数组: 镶嵌格式化(装备.镶嵌孔数组),
    }
  })
  return 装备列表
}

const 装备部位格式化 = (传入装备 = {}) => {
  const { kind, subKind} = 传入装备 
  if (kind === "武器") {
    if (subKind === "投掷囊") {
      return "暗器"
    } else {
      return "武器"
    }
  } else {
    return 装备部位转化枚举[subKind]
  }
}

const 装备部位转化枚举 = {
  "上衣":"衣服",
  "帽子":"帽子",
  "项链":"项链",
  "戒指":"戒指",
  "腰带":"腰带",
  "腰坠":"腰坠",
  "裤子":"下装",
  "鞋":"鞋子",
  "护臂":"护腕",
}

const 附魔格式化 = (传入附魔名称) => {
  const 附魔数值 = 传入附魔名称.match(/\d+/g)
  const 属性Key = Object.keys(镶嵌名称映射).find((key) => 传入附魔名称.includes(key)) || ''
  const 附魔属性 = 镶嵌名称映射[属性Key]
  if (附魔属性 && 附魔数值) {
    return {
      属性: 附魔属性,
      值: +(附魔数值?.[0] || 0),
    }
  } else {
    return undefined
  }
}

const 镶嵌格式化 = (传入镶嵌孔数组) => {
  return (传入镶嵌孔数组 || [])
    ?.map((镶嵌) => {
      const 镶嵌Key = Object.keys(镶嵌名称映射).find((key) => 镶嵌.镶嵌类型.includes(key)) || ''
      const 镶嵌类型 = 镶嵌名称映射[镶嵌Key]

      return {
        镶嵌宝石等级: 镶嵌?.镶嵌宝石等级,
        镶嵌类型: 镶嵌类型 || '',
      }
    })
    .filter((item) => !!item?.镶嵌类型)
}

export const 获取面板显示数据 = (key, 角色最终属性, 主属性) => {
  switch (key) {
    case 主属性:
      return 角色最终属性?.[主属性] || 0
    case '攻击':
      return 角色最终属性.面板攻击 || 0
    case '会心':
      return ((角色最终属性.会心等级 / 自身属性系数.会心) * 100).toFixed(2) + `%`
    case '会效':
      return ((角色最终属性.会心效果等级 / 自身属性系数.会效) * 100 + 175).toFixed(2) + `%`
    case '破防':
      return ((角色最终属性.破防等级 / 自身属性系数.破防) * 100).toFixed(2) + `%`
    case '无双':
      return ((角色最终属性.无双等级 / 自身属性系数.无双) * 100).toFixed(2) + `%`
    case '破招':
      return 角色最终属性.破招值 || 0
    case '全能':
      return 角色最终属性.全能等级 || 0
    case '加速':
      return (((角色最终属性.加速等级 || 0) / 自身属性系数.急速) * 100).toFixed(2) + `%`
  }
  return ''
}

export default 计算秒伤
