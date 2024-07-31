/**
 * 收益展示
 */

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import * as G2 from '@antv/g2'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { message, Popover, Radio } from 'antd'
import { 秒伤计算 } from '@/计算模块/计算函数'
import { 找到最大最小值, 收益增益属性计算, 获取当前各属性最大附魔, 获取当前比例 } from './工具'
import {
  会破招无比收益信息,
  渲染会破招无比折线图,
  获取会破招无图表数据,
} from './渲染函数/会破招无比'
import { 渲染属性收益柱状图, 获取属性收益柱状图数据, 附魔单点收益信息 } from './渲染函数/属性收益'
import 属性置换收益, { 附魔属性置换收益信息 } from './自定义图表/属性置换'
import './index.css'

const 附魔收益列表 = 获取当前各属性最大附魔()

const checkTypeList = [...附魔单点收益信息, ...会破招无比收益信息, ...附魔属性置换收益信息]

function 收益图表(_, ref) {
  const 增益面板显示状态 = useAppSelector((state) => state?.system?.增益面板显示状态)
  const 装备信息 = useAppSelector((state) => state?.data?.装备信息)

  const [chartData, setChartData] = useState<any>()
  const [currentIncomeType, setCurrentIncomeType] = useState<string>('附魔')

  const currentIncomeList = useRef<any>(附魔收益列表)

  const limitRef: any = useRef<any>()

  const dispatch = useAppDispatch()

  // 计算单点增益
  const 计算增加后收益 = (装备基础属性) => {
    const 计算结果 = dispatch(
      秒伤计算({
        是否郭氏计算: false,
        更新装备信息: {
          ...装备信息,
          装备基础属性: {
            ...装备信息?.装备基础属性,
            ...装备基础属性,
          },
        },
      })
    )
    return 计算结果
  }

  const 获取图表数据 = (type) => {
    if (['附魔', '单点'].includes(type) || !type) {
      const list = currentIncomeList?.current || 附魔收益列表
      const { 秒伤: 旧秒伤 } = dispatch(
        秒伤计算({
          是否郭氏计算: false,
        })
      )
      return 获取属性收益柱状图数据(list, 旧秒伤, 装备信息, 收益增益属性计算, 计算增加后收益)
    } else if (['会破比', '招无比']?.includes(type)) {
      return 获取会破招无图表数据(type, currentIncomeList?.current, 装备信息, 计算增加后收益)
    }
  }

  useImperativeHandle(ref, () => ({
    initChart: initChart,
  }))

  const handleChangeType = (e) => {
    const list = checkTypeList?.find((item) => item.label === e)?.list
    if (list) {
      currentIncomeList.current = list
      setCurrentIncomeType(e)
      initChart(e)
    } else {
      message.error('出现异常，请联系开发者')
    }
  }

  useEffect(() => {
    limitRef.current = false
    return () => {
      limitRef.current = false
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      chartData && chartData.forceFit()
    }, 200)
  }, [增益面板显示状态])

  const initChart = (type?) => {
    const currentType = type || currentIncomeType

    if (limitRef.current) {
      return
    }
    limitRef.current = true

    const chart = chartData
      ? chartData
      : new G2.Chart({
          container: 'income-chart',
          autoFit: true,
          renderer: 'canvas',
          padding: [48, 0, 50, 40],
        })

    if (!chartData) {
      setChartData(chart)
    }

    const dataSource = 获取图表数据(currentType)

    chart.clear()

    if (['附魔', '单点'].includes(currentType) || !currentType) {
      渲染属性收益柱状图(chart)
    } else if (['会破比', '招无比']?.includes(currentType)) {
      const 当前比例 = 获取当前比例(currentType, 装备信息?.装备基础属性)
      const { max } = 找到最大最小值(dataSource)
      const 当前收益 = dataSource?.find((item) => item.比例 === `${当前比例}%`)?.收益
      渲染会破招无比折线图(chart, max, 当前比例, 当前收益)
    }

    chart.data(dataSource)
    chart.render()

    setTimeout(() => {
      limitRef.current = false
    }, 10)
  }

  const 是否展示自定义图标 = ['属性置换']?.includes(currentIncomeType)

  const 获取自定义图表组件 = () => {
    if (currentIncomeType === '属性置换') {
      return <属性置换收益 />
    }
  }

  return (
    <div id='Guide_8'>
      <div className='income-wrap'>
        {是否展示自定义图标 ? <div className='income-custom'>{获取自定义图表组件()}</div> : null}
        <div
          className={`income-chart ${是否展示自定义图标 ? 'income-chart-hide' : ''}`}
          id='income-chart'
        />
      </div>
      <div className='income-type-wrapper'>
        <div className={'income-chart-title'}>收益图表</div>
        <Radio.Group
          className='income-type-select-radio'
          value={currentIncomeType}
          onChange={(e) => handleChangeType(e?.target.value)}
        >
          {checkTypeList.map((item) => {
            return (
              <Radio.Button key={item.label} value={item.label}>
                <Popover title='图表说明' content={item.tip}>
                  {item.label}
                </Popover>
              </Radio.Button>
            )
          })}
        </Radio.Group>
      </div>
    </div>
  )
}

export default forwardRef(收益图表)
