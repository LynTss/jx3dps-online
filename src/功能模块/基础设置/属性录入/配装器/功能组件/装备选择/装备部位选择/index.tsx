/**
 * 装备选择
 */
import React, { forwardRef, useMemo, useState } from 'react'
import { Select } from 'antd'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { 装备部位枚举 } from '@/@types/枚举'
import { 装备位置部位枚举, 装备属性信息模型, 装备类型枚举 } from '@/@types/装备'
import classnames from 'classnames'
import { 秒伤计算 } from '@/计算模块/计算函数'
import { 属性类型 } from '@/@types/属性'
import 根据表单选项获取装备信息 from '../../../工具函数/根据表单选项获取装备信息'
import { 获取最大精炼等级 } from '..'
import './index.css'

interface 装备部位选择入参 {
  value?: number // 装备ID
  allValue?: any // 选择装备的全部信息包含附魔等
  onChange?: (e: number) => void
  装备数据列表: 装备属性信息模型[]
  部位: 装备部位枚举
  部位索引: string
  默认镶嵌宝石等级: number
  form: any
  开启装备智能对比: boolean
}

function 装备部位选择(props: 装备部位选择入参, ref) {
  const {
    装备数据列表,
    部位,
    部位索引,
    默认镶嵌宝石等级,
    allValue,
    form,
    开启装备智能对比,
    ...options
  } = props

  const 当前计算结果 = useAppSelector((state) => state?.data?.当前计算结果)
  const [dpsUpList, setDpsUpList] = useState<{ uuid: string; dpsUp: number }[]>()
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  // const 当前精炼等级 = useMemo(() => {
  //   return allValue?.当前精炼等级 || 0
  // }, [allValue])

  const 当前镶嵌等级数组 = useMemo(() => {
    return allValue?.镶嵌孔数组?.map((item) => item.镶嵌宝石等级) || []
  }, [allValue])

  // 获取dps提升装备列表
  const getDpsUpList = () => {
    if (开启装备智能对比) {
      setLoading(true)
      // 获取旧装备列表
      const 当前装备列表信息 = form?.getFieldsValue()
      const 当前装备信息 = 根据表单选项获取装备信息(当前装备列表信息)

      const { 秒伤: 旧秒伤 } = dispatch(秒伤计算({ 更新装备信息: 当前装备信息 }))

      // 传入新的装备
      const newDpsUpList = 装备数据列表
        .filter((item) => item.装备品级 >= 13200 || item.装备类型 === '橙武')
        .map((item) => {
          const 装备最大精炼等级 = 获取最大精炼等级(item)
          // const 切换后精炼等级 = 当前精炼等级 > 装备最大精炼等级 ? 装备最大精炼等级 : 当前精炼等级

          const 新装备数据 = {
            ...allValue,
            镶嵌孔数组: item?.镶嵌孔数组?.map((a, index) => {
              return {
                ...a,
                镶嵌宝石等级: 当前镶嵌等级数组?.[index] || 默认镶嵌宝石等级,
              }
            }),
            当前精炼等级: 装备最大精炼等级,
            id: item?.id,
            装备部位: 装备位置部位枚举[部位索引],
          }

          const 更新后装备信息 = 根据表单选项获取装备信息({
            ...当前装备列表信息,
            [`${部位索引}`]: 新装备数据,
          })

          const { 秒伤: 更新后秒伤 } = dispatch(秒伤计算({ 更新装备信息: 更新后装备信息 }))

          return {
            uuid: `${item?.uid}${item?.id}` || '',
            dpsUp: 更新后秒伤 - (旧秒伤 || 当前计算结果?.秒伤),
          }
        })

      if (newDpsUpList?.length) {
        setDpsUpList(newDpsUpList)
      }
      setLoading(false)
    }
  }

  return (
    <div id='Guide_4'>
      <Select
        showSearch
        loading={loading}
        className='zhuangbei-select'
        placeholder={`请选择${部位}`}
        popupMatchSelectWidth={400}
        optionFilterProp='label'
        onDropdownVisibleChange={(e) => {
          if (e) {
            getDpsUpList()
          } else {
            setDpsUpList([])
          }
        }}
        listHeight={400}
        ref={ref}
        filterOption={(input, option) => {
          const findObj = 装备数据列表?.find((item) => item.id === option?.value)
          if (findObj) {
            const filterStr = `${findObj.装备名称}${获取装备数据描述(findObj).join('')}${
              findObj.装备品级
            }`
            return filterStr.includes(input.toLowerCase())
          }
          return false
        }}
        {...options}
      >
        {装备数据列表.map((item, i) => {
          const upItem = dpsUpList?.find((up) => up.uuid === `${item?.uid}${item?.id}`) || {
            dpsUp: 0,
          }
          return (
            <Select.Option
              className={'zhuangbei-select-item'}
              key={`${item.装备名称}-${部位索引}-${i}`}
              value={item.id}
              label={item.装备名称}
            >
              <div>
                <span
                  className={`zhuangbei-select-name ${
                    [装备类型枚举.橙武].includes(item.装备类型) ? 'zhuangbei-select-name-cw' : ''
                  }`}
                >
                  {item.装备名称}
                </span>
                <span className={'zhuangbei-select-shuoming'}>
                  {`(`}
                  {(获取装备数据描述(item) || []).map((a) => {
                    const 装备描述文本样式 = classnames(
                      'zhuangbei-miaoshu-label',
                      a === '精简' || a === '特效' ? 'zhuangbei-miaoshu-label-jingjian' : '',
                      a === 'PVX' ? 'zhuangbei-miaoshu-label-pvx' : ''
                    )

                    return (
                      <span className={装备描述文本样式} key={`${item.装备名称}-${a}-${部位索引}`}>
                        {a}
                      </span>
                    )
                  })}
                  {`)`}
                </span>
              </div>
              <div>
                {upItem?.dpsUp !== 0 ? (
                  <span
                    className={`zhuangbei-diff ${
                      upItem?.dpsUp > 0 ? 'zhuangbei-up' : 'zhuangbei-down'
                    }`}
                  >
                    {upItem?.dpsUp > 0 ? '+' : ''}
                    {upItem?.dpsUp}
                  </span>
                ) : null}
                <span className={'zhuangbei-select-level'}>{item.装备品级}品</span>
              </div>
            </Select.Option>
          )
        })}
      </Select>
    </div>
  )
}

export default forwardRef(装备部位选择)

export const 获取装备数据描述 = (data: 装备属性信息模型, 携带描述 = true) => {
  const { 装备增益, 装备类型 } = data
  const strList: string[] = []
  if (携带描述) {
    if ([装备类型枚举.特效武器].includes(装备类型)) {
      strList.push('特效')
    }
    if ([装备类型枚举.PVX].includes(装备类型)) {
      strList.push('PVX')
    }
    if ([装备类型枚举.副本精简, 装备类型枚举.试炼精简].includes(装备类型)) {
      strList.push('精简')
    }
  }
  装备增益.forEach((item) => {
    switch (item.属性) {
      case 属性类型.体质:
        if (装备类型 === 装备类型枚举.副本精简) {
          strList.push('体')
        }
        break
      case 属性类型.全会心等级:
      case 属性类型.外功会心等级:
      case 属性类型.内功会心等级:
        strList.push('会心')
        break
      case 属性类型.全会心效果等级:
      case 属性类型.外功会心效果等级:
      case 属性类型.内功会心效果等级:
        strList.push('会效')
        break
      case 属性类型.全破防等级:
      case 属性类型.外功破防等级:
      case 属性类型.内功破防等级:
        strList.push('破防')
        break
      case 属性类型.无双等级:
        strList.push('无双')
        break
      case 属性类型.破招值:
        strList.push('破招')
        break
      case 属性类型.全能等级:
        strList.push('全能')
        break
      case 属性类型.加速等级:
        strList.push('加速')
        break
    }
  })
  return strList
}
