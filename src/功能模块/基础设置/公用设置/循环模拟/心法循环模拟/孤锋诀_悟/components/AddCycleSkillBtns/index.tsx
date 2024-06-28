import { Col, Radio, Row, Space, Tag, Tooltip } from 'antd'
import React from 'react'
import { 循环基础技能数据类型, 模拟信息类型 } from '../../simulator/type'
import AddCycleSkillBtn from './AddCycleSkillBtn'
import { 快捷添加数据, 快捷添加数据类型 } from './快捷添加'
import './index.css'

interface AddCycleSkillBtnsProps {
  新增循环技能: (data: 循环基础技能数据类型) => void
  批量新增循环: (data: 循环基础技能数据类型[]) => void
  处理循环结果对象: { 完整循环: 循环基础技能数据类型[] }
  模拟信息: 模拟信息类型
  大橙武模拟: boolean
  开启武学助手: boolean
  设置开启武学助手: (e: boolean) => void
}

function AddCycleSkillBtns(props: AddCycleSkillBtnsProps) {
  const { 新增循环技能, 批量新增循环, 处理循环结果对象, 模拟信息, 开启武学助手, 设置开启武学助手 } =
    props

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

  return (
    <div className={'cycle-simulator-setting-btns'}>
      <div className={'cycle-simulator-setting-item'}>
        <span className={'daozong-cycle-btn-type'}>傍身技能</span>
        <Space className={'cycle-simulator-setting-skills'} size={[8, 16]} wrap>
          {模拟信息?.技能基础数据
            ?.filter((item) => !item?.创建循环不可选 && item?.技能类型 === '傍身')
            .map((item) => {
              return (
                <AddCycleSkillBtn
                  onClick={() => 新增循环技能(item)}
                  key={item?.技能名称}
                  className={'daozong-cycle-simulator-setting-btn'}
                  完整循环={处理循环结果对象?.完整循环 || []}
                  技能={item}
                  模拟信息={模拟信息}
                />
              )
            })}
        </Space>
      </div>
      <div className={'cycle-simulator-setting-item'}>
        <span className={'daozong-cycle-btn-type'}>对阵技能</span>
        <Space className={'cycle-simulator-setting-skills'} size={[8, 16]} wrap>
          {模拟信息?.技能基础数据
            ?.filter((item) => !item?.创建循环不可选 && item?.技能类型 === '对阵')
            .map((item) => {
              return (
                <AddCycleSkillBtn
                  onClick={() => 新增循环技能(item)}
                  key={item?.技能名称}
                  className={'daozong-cycle-simulator-setting-btn'}
                  完整循环={处理循环结果对象?.完整循环 || []}
                  技能={item}
                  模拟信息={模拟信息}
                />
              )
            })}
        </Space>
      </div>
      <div className={'cycle-simulator-setting-item'}>
        <span className={'daozong-cycle-btn-type'}>绝技技能</span>
        <Space className={'cycle-simulator-setting-skills'} size={[8, 16]} wrap>
          {模拟信息?.技能基础数据
            ?.filter((item) => !item?.创建循环不可选 && item?.技能类型 === '绝技')
            .map((item) => {
              return (
                <AddCycleSkillBtn
                  onClick={() => 新增循环技能(item)}
                  key={item?.技能名称}
                  className={'daozong-cycle-simulator-setting-btn'}
                  完整循环={处理循环结果对象?.完整循环 || []}
                  技能={item}
                  模拟信息={模拟信息}
                />
              )
            })}
        </Space>
      </div>
      <div className={'cycle-simulator-setting-item'}>
        <span className={'daozong-cycle-btn-type'}>快捷添加</span>
        <Row className={'cycle-simulator-setting-quick'} style={{ width: 200 }} gutter={[16, 8]}>
          {快捷添加数据.map((item) => {
            return (
              <Col span={12} key={item?.名称}>
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
      <div className={'cycle-simulator-radio-item'}>
        <p className={'cycle-simulator-radio-item-title'}>武学助手模式</p>
        <Tooltip
          title={
            <div>
              <p>由于现在武学助手完全没有规律</p>
              <p>各种Bug包括但不限于</p>
              <p>1、异常跳过技能不按顺序释放</p>
              <p>2、相同武学助手打出不同效果</p>
              <p>所以暂时不放开武学助手的顺序编辑功能，等待后续机制修改和研究明白再放出。</p>
              <p style={{ fontWeight: 500 }}>
                目前经过欧测试，武学助手自带-1段加速，开启后将增加1帧延迟
              </p>
            </div>
          }
        >
          <Radio.Group
            value={开启武学助手}
            onChange={(e) => 设置开启武学助手(e?.target?.value)}
            size='small'
            optionType='button'
            buttonStyle='solid'
            // disabled
          >
            <Radio value={true}>开启</Radio>
            <Radio value={false}>关闭</Radio>
          </Radio.Group>
        </Tooltip>
      </div>
    </div>
  )
}

export default AddCycleSkillBtns
