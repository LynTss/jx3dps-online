/**
 * 属性置换收益
 */

import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { 秒伤计算 } from '@/计算模块/计算函数'
import { 收益增益属性计算, 获取当前各属性最大附魔 } from '../../工具'
import { 置换数据信息类型, 置换结果数据类型 } from './interface'
import './index.css'

// 会效收益从175%至300%
const 附魔收益列表 = 获取当前各属性最大附魔(undefined, true)?.filter(
  (item) => !['武伤', '会效']?.includes(item?.收益)
)
// 过滤武伤和会效

const 分隔 = Math.floor(24 / (附魔收益列表?.length + 1))

function 属性置换收益() {
  const [置换结果数据, 更新置换结果数据] = useState<置换结果数据类型[]>([])
  const [置换数据信息, 更新置换数据信息] = useState<置换数据信息类型>({ 最大值: 0, 最小值: 0 })
  const 装备信息 = useAppSelector((state) => state?.data?.装备信息)
  const 当前计算结果 = useAppSelector((state) => state?.data?.当前计算结果)

  const dispatch = useAppDispatch()

  useEffect(() => {
    初始化置换结果数据()
  }, [当前计算结果?.秒伤])

  const 初始化置换结果数据 = () => {
    const 结果数据 = 获取属性置换图表数据()
    更新置换结果数据(结果数据)

    console.log('结果数据', 结果数据)

    const 收益结果数组 = 结果数据.filter((obj) => obj.收益 !== undefined).map((obj) => obj.收益)
    console.log('收益结果数组', 收益结果数组)
    const 最大值 = Math.max(...收益结果数组)
    const 最小值 = Math.min(...收益结果数组)
    更新置换数据信息({
      最大值,
      最小值,
    })
  }

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

  const 获取属性置换图表数据 = () => {
    const 结果数组: any = []
    const { 秒伤: 旧秒伤 } = dispatch(
      秒伤计算({
        是否郭氏计算: false,
      })
    )
    附魔收益列表.forEach((增加数据) => {
      附魔收益列表.forEach((减少数据) => {
        // 增加对应数值
        const 增益后装备基础数据 = 收益增益属性计算(
          增加数据?.收益,
          增加数据?.值,
          装备信息?.装备基础属性
        )
        // 减少对应数值
        const 减少数据后装备基础数据 = 收益增益属性计算(
          减少数据?.收益,
          -减少数据?.值,
          增益后装备基础数据
        )
        const { 秒伤: 新秒伤 } = 计算增加后收益(减少数据后装备基础数据)
        const 收益 = Number(新秒伤 - 旧秒伤)
        const 收益结果 = Number(收益.toFixed(0))
        结果数组.push({
          增加属性: `+${增加数据?.收益}`,
          减少属性: `-${减少数据?.收益}`,
          收益: 收益结果 == 0 ? undefined : 收益结果,
        })
      })
    })

    return 结果数组
  }

  // 根据数值判断
  const 获取样式函数 = (显示结果?: 置换结果数据类型) => {
    if (!显示结果) {
      return ''
    } else if (显示结果?.收益 === 置换数据信息?.最大值) {
      return 'attr-value-max'
    } else if (显示结果?.收益 === 置换数据信息?.最小值) {
      return 'attr-value-min'
    } else if (显示结果?.收益 > 0) {
      // 获取三个等级的数值
      const 一级数据 = 置换数据信息?.最大值 / 2
      if (显示结果?.收益 < 一级数据) {
        return 'attr-value-up-1'
      } else {
        return 'attr-value-up-2'
      }
    } else if (显示结果?.收益 < 0) {
      // 获取三个等级的数值
      const 一级数据 = 置换数据信息?.最小值 / 2
      if (显示结果?.收益 > 一级数据) {
        return 'attr-value-low-1'
      } else {
        return 'attr-value-low-2'
      }
    }
  }

  return (
    <div className='attr-replace'>
      <Row className='attr-replace-table'>
        <Col className='attr-replace-header' span={分隔}>
          收益
        </Col>
        {附魔收益列表.map((附魔) => {
          return (
            <Col className='attr-replace-item' span={分隔} key={`header_${附魔?.收益}`}>
              <h1 className='attr-replace-name'>{附魔?.收益}</h1>
              <p className='attr-replace-name-value'>+{附魔?.值}</p>
            </Col>
          )
        })}
      </Row>
      {附魔收益列表.map((减少属性, 索引) => {
        return (
          <Row key={`减少属性_${索引}`}>
            <Col className='attr-replace-item attr-replace-sider' span={分隔}>
              <div>
                <h1 className='attr-replace-name'>{减少属性?.收益}</h1>
                <p className='attr-replace-name-value'>-{减少属性?.值}</p>
              </div>
            </Col>
            {附魔收益列表.map((增加属性) => {
              const 显示结果 = 置换结果数据?.find(
                (item) =>
                  item?.增加属性 === `+${增加属性?.收益}` && item?.减少属性 === `-${减少属性?.收益}`
              )
              const 样式函数 = 获取样式函数(显示结果)
              return (
                <Col
                  className={`attr-replace-item attr-replace-res`}
                  span={分隔}
                  key={`减少属性_${增加属性?.收益}_${索引}`}
                >
                  <div className={`attr-replace-res-text`}>
                    {显示结果?.收益 && 显示结果?.收益 > 0 ? '+' : ''}
                    {显示结果?.收益 || '-'}
                  </div>
                  <div className={`attr-replace-res-bg ${样式函数}`} />
                </Col>
              )
            })}
          </Row>
        )
      })}
    </div>
  )
}

export default React.memo(属性置换收益)

export const 附魔属性置换收益信息 = [
  {
    label: '属性置换',
    list: [],
    tip: (
      <div>
        <p>既同分容量下，该属性替换为另一个属性后秒伤变化展示</p>
        <p>用于局部分析当前某属性收益较其他属性收益低的情况</p>
        <p>X轴：增加对应属性附魔数值</p>
        <p>Y轴：减少增加对应属性附魔数值</p>
        <p>由于【郭氏计算】增益不线性</p>
        <p>收益部分采用【非郭氏计算】仅供参考</p>
      </div>
    ),
  },
]
