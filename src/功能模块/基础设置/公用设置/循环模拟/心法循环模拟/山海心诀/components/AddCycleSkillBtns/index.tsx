import { Col, Row, Space, Tag } from 'antd'
import React from 'react'
import { 循环基础技能数据类型, 模拟信息类型 } from '../../simulator/type'
import AddCycleSkillBtn from './AddCycleSkillBtn'
import { 快捷添加数据, 快捷添加数据类型 } from './快捷添加'
import './index.css'
import AddPetBtns from './AddPetBtns'

interface AddCycleSkillBtnsProps {
  新增循环技能: (data: 循环基础技能数据类型) => void
  批量新增循环: (data: 循环基础技能数据类型[]) => void
  处理循环结果对象: { 完整循环: 循环基础技能数据类型[] }
  模拟信息: 模拟信息类型
  大橙武模拟: boolean
  奇穴信息: string[]
  宠物顺序: string[]
  更新宠物顺序: (e: string[]) => void
}

function AddCycleSkillBtns(props: AddCycleSkillBtnsProps) {
  const {
    新增循环技能,
    批量新增循环,
    处理循环结果对象,
    模拟信息,
    大橙武模拟,
    奇穴信息,
    宠物顺序,
    更新宠物顺序,
  } = props

  const 批量新增循环技能 = (数据: 快捷添加数据类型) => {
    const 技能原始数据: 循环基础技能数据类型[] = 数据?.技能序列
      .map((item) => {
        return 模拟信息?.技能基础数据?.find((a) => a.技能名称 === item) || ({} as any)
      })
      .filter((item) => item)
    if (技能原始数据?.length) {
      批量新增循环(技能原始数据)
    }
  }

  const hrefDev = location.href?.includes('dev=1')
  const DEV = hrefDev

  return (
    <div className={'cycle-simulator-setting-btns'}>
      <div className={'cycle-simulator-setting-item'}>
        <span className={'wanling-cycle-btn-type'}>箭系</span>
        <Space className={'cycle-simulator-setting-skills'} size={[8, 16]} wrap>
          {模拟信息?.技能基础数据
            ?.filter((item) => {
              if (!奇穴信息?.includes('朝仪万汇') && item?.技能名称 === '朝仪万汇') {
                return false
              }
              return !item?.创建循环不可选 && item?.技能类型 === '箭系'
            })
            .map((item) => {
              return (
                <AddCycleSkillBtn
                  onClick={() => 新增循环技能(item)}
                  key={item?.技能名称}
                  className={'wanling-cycle-simulator-setting-btn'}
                  完整循环={处理循环结果对象?.完整循环 || []}
                  技能={item}
                  模拟信息={模拟信息}
                />
              )
            })}
        </Space>
      </div>
      <div className={'cycle-simulator-setting-item'}>
        <span className={'wanling-cycle-btn-type'}>万方携游</span>
        <Space className={'cycle-simulator-setting-skills'} size={[8, 16]} wrap>
          {模拟信息?.技能基础数据
            ?.filter((item) => !item?.创建循环不可选 && item?.技能类型 === '宠物')
            .map((item) => {
              return (
                <AddCycleSkillBtn
                  onClick={() => 新增循环技能(item)}
                  key={item?.技能名称}
                  className={'wanling-cycle-simulator-setting-btn'}
                  完整循环={处理循环结果对象?.完整循环 || []}
                  技能={item}
                  模拟信息={模拟信息}
                />
              )
            })}
        </Space>
      </div>
      <div className={'cycle-simulator-setting-item'}>
        <span className={'wanling-cycle-btn-type'}>其他</span>
        <Space className={'cycle-simulator-setting-skills'} size={[8, 16]} wrap>
          {模拟信息?.技能基础数据
            ?.filter((item) => {
              if (!大橙武模拟 && item?.显示类型 === '大橙武模拟') {
                return false
              }
              if (!DEV && item?.技能名称 === '空弦惊雁') {
                return false
              }
              if (item?.显示类型 === '奇穴技能') {
                const 依赖名称 = item?.依赖奇穴名 || item?.技能名称
                return 奇穴信息?.includes(依赖名称)
              }
              return !item?.创建循环不可选 && item?.技能类型 === '其他'
            })
            .map((item) => {
              return (
                <AddCycleSkillBtn
                  onClick={() => 新增循环技能(item)}
                  key={item?.技能名称}
                  className={'wanling-cycle-simulator-setting-btn'}
                  完整循环={处理循环结果对象?.完整循环 || []}
                  技能={item}
                  模拟信息={模拟信息}
                />
              )
            })}
        </Space>
      </div>
      {/* 添加宠物 */}
      <div className={'cycle-simulator-setting-item'}>
        <span className={'wanling-cycle-btn-type'}>宠物</span>
        <AddPetBtns 宠物顺序={宠物顺序} 更新宠物顺序={更新宠物顺序} />
      </div>
      <div className={`cycle-simulator-setting-item cycle-simulator-setting-fast-item`}>
        <span className={'wanling-cycle-btn-type'}>快捷添加</span>
        <Row className={'cycle-simulator-setting-quick'} gutter={[16, 8]}>
          {快捷添加数据.map((item) => {
            return (
              <Col span={24} key={item?.名称}>
                <Tag
                  color={item?.color || 'blue'}
                  onClick={() => 批量新增循环技能(item)}
                  className={'cycle-simulator-setting-quick-item'}
                >
                  {item?.名称}
                </Tag>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default AddCycleSkillBtns
