import React, { useMemo, useState } from 'react'
import { Checkbox, Tooltip } from 'antd'

import { 自身属性系数 } from '@/数据/常量'
import 获取当前数据 from '@/数据/数据工具/获取当前数据'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { useAppSelector } from '@/hooks'
import useCycle from '@/hooks/use-cycle'
import { 角色基础属性类型 } from '@/@types/角色'

import { 获取判断增益后技能系数 } from '@/计算模块/统一工具函数/技能增益启用计算'
import DpsKernelOptimizer from '@/计算模块/dps-kernel-optimizer'
import { 获取计算目标信息 } from '@/计算模块/统一工具函数/工具函数'
import { 获取加速等级 } from '@/工具函数/data'

import { 获取角色需要展示的面板数据 } from './工具'
import './index.css'

const { 主属性, 性能功能关闭数组 = [] } = 获取当前数据()

function 面板信息() {
  const 当前奇穴信息 = useAppSelector((state) => state?.data?.当前奇穴信息)
  const 装备信息 = useAppSelector((state) => state?.data?.装备信息)
  const 当前输出计算目标名称 = useAppSelector((state) => state?.data?.当前输出计算目标名称)
  const 当前秘籍信息 = useAppSelector((state) => state?.data?.当前秘籍信息)
  const 增益数据 = useAppSelector((state) => state?.data?.增益数据)
  const 增益启用 = useAppSelector((state) => state?.data?.增益启用)
  const 当前计算目标 = 获取计算目标信息(当前输出计算目标名称)

  const { 计算循环详情, 当前循环信息 } = useCycle()

  const [开启优化算法, 切换开启优化算法] = useState<boolean>(false)
  const [显示增益后面板, 切换显示增益后面板] = useState<boolean>(false)

  const mapKeyList = [
    '装分',
    '气血',
    主属性,
    '攻击',
    '会心',
    '会效',
    '破防',
    '无双',
    '破招',
    '全能',
    '加速',
  ]

  const 显示数据 = useMemo(() => {
    return 获取角色需要展示的面板数据({
      装备信息,
      当前奇穴信息,
      增益数据,
      增益启用,
      显示增益后面板,
    })
  }, [装备信息, 当前奇穴信息, 增益数据, 增益启用, 显示增益后面板])

  const 最大秒伤数据: any = useMemo(() => {
    if (!开启优化算法) {
      return {}
    }
    if (显示数据?.基础攻击 && 计算循环详情?.技能详情?.length) {
      const 计算后技能基础数据 = 获取判断增益后技能系数({
        秘籍信息: 当前秘籍信息,
        奇穴数据: 当前奇穴信息,
        装备增益: 装备信息?.装备增益,
      })

      const res = DpsKernelOptimizer({
        计算循环: 计算循环详情?.技能详情,
        当前装备信息: 装备信息,
        当前输出计算目标: 当前计算目标,
        技能基础数据: 计算后技能基础数据,
        增益启用,
        增益数据,
        快照计算: 当前循环信息?.快照计算 || [],
      })

      // 计算最大秒伤数据的面板
      const 面板 = 获取角色需要展示的面板数据({
        装备信息: {
          ...装备信息,
          装备基础属性: res?.maxCharacterData?.装备基础属性,
        },
        当前奇穴信息,
        增益数据,
        增益启用,
        显示增益后面板,
      })

      return { ...res, 面板 }
    } else {
      return {}
    }
  }, [
    当前计算目标,
    当前循环信息,
    计算循环详情,
    装备信息,
    当前奇穴信息,
    增益启用,
    增益数据,
    开启优化算法,
    显示增益后面板,
  ])

  return (
    <div className={'character-show'}>
      <div className={'character-title-wrapper'}>
        <h1 className={'character-title'}>角色属性</h1>
        <div>
          <Checkbox
            checked={显示增益后面板}
            onChange={(e) => 切换显示增益后面板(e?.target?.checked)}
          >
            <Tooltip
              title={
                <div>
                  <p>开启后将展示阵眼常驻增益，小吃小药、团队宴席、常驻团队buff增益</p>
                  <p>不显示其他团队增益的面板提升</p>
                </div>
              }
            >
              增益面板
            </Tooltip>
          </Checkbox>
          {!性能功能关闭数组?.includes('优化算法') ? (
            <Checkbox checked={开启优化算法} onChange={(e) => 切换开启优化算法(e?.target?.checked)}>
              优化算法
              <Tooltip title='采用拟牛顿法对属性做优化演算，仅能代表在当前已穿装备总属性容量不变的情况下的，各属性近似最优收益方向。仅作参考，开启后会消耗额外性能。'>
                <QuestionCircleOutlined className={'character-max-title-tip'} />
              </Tooltip>
            </Checkbox>
          ) : null}
        </div>
      </div>
      <div className={`character-item-wrap`}>
        {mapKeyList.map((item, index) => {
          const 最优属性: any =
            开启优化算法 && 最大秒伤数据?.面板
              ? 获取最优属性展示(item, 最大秒伤数据?.面板, 显示数据)
              : {}
          return (
            <div className={`character-item ${index < 4 ? 'character-item-harf' : ''}`} key={item}>
              <h1 className='character-label'>{item}</h1>
              <Tooltip
                placement='topLeft'
                title={() => 获取面板显示数据数值(item, 显示数据, 显示数据?.装分)}
              >
                <div className='character-content'>
                  <span className='character-content-normal'>
                    {获取面板显示数据(item, 显示数据, 显示数据?.装分)}
                  </span>
                  {开启优化算法 && 最优属性 && 最优属性?.value !== '-1' ? (
                    <span
                      className={`character-content-max ${
                        !最优属性?.upperStatus
                          ? 'character-content-upper'
                          : 'character-content-down'
                      }`}
                    >
                      {最优属性?.value}
                    </span>
                  ) : null}
                </div>
              </Tooltip>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default 面板信息

// 获取属性展示
export const 获取面板显示数据 = (
  key: string,
  角色最终属性: 角色基础属性类型,
  装备分数?: number
) => {
  switch (key) {
    case '装分':
      return 装备分数 || 0
    case '气血':
      return 角色最终属性?.最终气血上限 || 0
    case 主属性:
      return 角色最终属性?.[主属性] || 0
    case '攻击':
      return 角色最终属性.面板攻击 || 0
    case '会心':
      return Math.min((角色最终属性.会心等级 / 自身属性系数.会心) * 100, 100).toFixed(2) + `%`
    case '会效':
      return (
        Math.min((角色最终属性.会心效果等级 / 自身属性系数.会效) * 100 + 175, 300).toFixed(2) + `%`
      )
    case '破防':
      return ((角色最终属性.破防等级 / 自身属性系数.破防) * 100).toFixed(2) + `%`
    case '无双':
      return ((角色最终属性.无双等级 / 自身属性系数.无双) * 100).toFixed(2) + `%`
    case '破招':
      return 角色最终属性.破招值 || 0
    case '全能':
      return 角色最终属性.全能等级 || 0
    case '加速':
      return (
        <>
          <span>{(((角色最终属性.加速等级 || 0) / 自身属性系数.急速) * 100).toFixed(2) + `%`}</span>
          <span>{加速等级枚举[获取加速等级(角色最终属性.加速等级 || 0)]}</span>
        </>
      )
  }
  return undefined
}

const 加速等级枚举 = ['零段加速', '一段加速', '二段加速', '三段加速', '四段加速', '五段加速']

export const 获取面板显示数据数值 = (
  key: string,
  角色最终属性: 角色基础属性类型,
  装备分数?: number
) => {
  switch (key) {
    case '装分':
      return 装备分数 || undefined
    case '气血':
      return (
        <div>
          <p>体质</p>
          <p> {角色最终属性?.体质 || 0}</p>
          <p>最终气血上限</p>
          <p> {角色最终属性.最终气血上限 || 0}</p>
        </div>
      )
    case 主属性:
      return 角色最终属性?.[主属性] || 0
    case '攻击':
      return (
        <div>
          <p>基础攻击：{角色最终属性.基础攻击 || 0}</p>
          <p>面板攻击：{角色最终属性.面板攻击 || 0}</p>
        </div>
      )
    case '会心':
      return 角色最终属性.会心等级
    case '会效':
      return 角色最终属性.会心效果等级
    case '破防':
      return 角色最终属性.破防等级
    case '无双':
      return 角色最终属性.无双等级
    case '破招':
      return 角色最终属性.破招值 || 0
    case '全能':
      return 角色最终属性.全能等级
    case '加速':
      return 角色最终属性.加速等级
  }
  return undefined
}

// 获取最优属性展示
export const 获取最优属性展示 = (key: string, 装备基础属性: 角色基础属性类型, oldData) => {
  const data = 装备基础属性
  let value: number | string | undefined = '-1'
  let upperStatus = false
  switch (key) {
    case '会心':
      value = ((data.会心等级 / 自身属性系数.会心) * 100).toFixed(2) + `%`
      upperStatus = data.会心等级 >= oldData?.会心等级
      break
    case '破防':
      value = ((data.破防等级 / 自身属性系数.破防) * 100).toFixed(2) + `%`
      upperStatus = data.破防等级 >= oldData?.破防等级
      break
    case '无双':
      value = ((data.无双等级 / 自身属性系数.无双) * 100).toFixed(2) + `%`
      upperStatus = data.无双等级 >= oldData?.无双等级
      break
    case '破招':
      value = Math.floor(data.破招值) || 0
      upperStatus = data.破招值 >= oldData?.破招值
      break
    default:
      break
  }

  return { value, upperStatus }
}
