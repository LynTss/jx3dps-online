import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { Select, SelectProps, Tooltip } from 'antd'
import { 秒伤计算 } from '@/计算模块/计算函数'
import 获取当前数据 from '@/数据/数据工具/获取当前数据'
import { 阵眼数据类型 } from '@/数据/阵眼/interface'
import './index.css'

const { 阵眼 } = 获取当前数据()
interface 阵眼选择类型 extends SelectProps {
  开启智能对比?: boolean
}

const 阵眼选择: React.FC<阵眼选择类型> = (props) => {
  const { 开启智能对比, ...rest } = props
  const 增益数据 = useAppSelector((state) => state?.data?.增益数据)
  const 增益启用 = useAppSelector((state) => state?.data?.增益启用)
  const 当前计算结果 = useAppSelector((state) => state?.data?.当前计算结果)
  const dispatch = useAppDispatch()

  const [selectOpen, setSelectOpen] = useState<boolean>(false)

  // 计算阵眼收益
  const 计算更换后秒伤 = (阵眼名称) => {
    const { 秒伤 } = dispatch(
      秒伤计算({
        更新增益数据: { ...增益数据, 阵眼: 阵眼名称 },
      })
    )
    return 秒伤 || 0
  }

  const 展示的阵眼数组 = () => {
    if (!selectOpen) {
      return 阵眼
    }
    let list: 阵眼数据类型[] = [...阵眼]

    if (增益启用 && 开启智能对比 && 当前计算结果?.秒伤) {
      list = list.map((item) => {
        const dps = 计算更换后秒伤(item?.阵眼名称)

        return {
          ...item,
          伤害提升百分比: Number((dps / 当前计算结果?.秒伤) * 100) || 100,
          伤害是否提升: dps > 当前计算结果?.秒伤,
        }
      })

      list.sort((a, b) => (b?.伤害提升百分比 || 0) - (a?.伤害提升百分比 || 0))
      list = list.map((item, index) => {
        // 只展示前三名
        return index < 3
          ? {
              ...item,
              伤害排名: index + 1,
            }
          : item
      })
    }

    return list
  }

  return (
    <Select
      className={'xuanze-zhenyan'}
      allowClear
      placeholder='请选择阵眼'
      optionFilterProp='label'
      open={selectOpen}
      onDropdownVisibleChange={setSelectOpen}
      {...rest}
    >
      {(展示的阵眼数组() || [])?.map((item) => {
        return (
          <Select.Option
            className={'zhenyan-option'}
            key={item.阵眼名称}
            value={item.阵眼名称}
            label={item.阵眼名称}
          >
            <Tooltip
              title={item.覆盖率 ? <span>覆盖率：{item.覆盖率?.toFixed(0)}%</span> : ''}
              placement='topLeft'
            >
              <div className={'zhenyan-option-text'}>
                {item.伤害排名 ? (
                  <img
                    className={`zhenyan-paiming`}
                    src={require(`@/assets/paiming/paiming-${item.伤害排名}.png`)}
                  />
                ) : null}
                {item.阵眼名称}
              </div>
            </Tooltip>
            <div>
              {item.伤害提升百分比 ? (
                <span
                  className={`zhenyan-baifenbi ${
                    item.阵眼名称 !== 增益数据?.阵眼
                      ? item.伤害是否提升
                        ? 'zhenyan-up'
                        : 'zhenyan-down'
                      : ''
                  }`}
                >
                  {item.伤害提升百分比?.toFixed(2)}%
                </span>
              ) : null}
            </div>
          </Select.Option>
        )
      })}
    </Select>
  )
}

export default 阵眼选择
