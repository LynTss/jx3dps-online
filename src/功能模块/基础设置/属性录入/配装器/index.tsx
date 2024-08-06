import React, { useEffect, useState } from 'react'
import { Badge, Button, Form, Modal, ModalProps } from 'antd'
import { 装备信息数据类型, 装备位置部位枚举 } from '@/@types/装备'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { 秒伤计算, 触发秒伤计算 } from '@/计算模块/计算函数'
import { 更新方案数据 } from '@/store/data'
import ValueCheckBox from '@/组件/ValueCheckBox'
import { 获取页面参数 } from '@/工具函数/help'

import 根据表单选项获取装备信息 from './工具函数/根据表单选项获取装备信息'
import 配装导入 from './功能组件/配装导入'
import 配装组件标题 from './功能组件/配装组件标题'
import 五彩石选择 from './功能组件/五彩石选择'
import 装备选择 from './功能组件/装备选择'
import 面板展示 from './功能组件/面板展示'
import 装备增益展示 from './功能组件/装备增益展示'
import 秒伤结果对比 from './功能组件/秒伤结果对比'

import 头部组件 from './头部组件'
import './index.css'

function 配装器(props: ModalProps) {
  const { open, onCancel } = props
  const dispatch = useAppDispatch()

  const 新手引导流程状态 = useAppSelector((state) => state.system.新手引导流程状态)
  const 当前引导步骤 = useAppSelector((state) => state.system.当前引导步骤)
  const 当前计算结果 = useAppSelector((state) => state?.data?.当前计算结果)
  const 装备信息 = useAppSelector((state) => state?.data?.装备信息)

  const [当前装备信息, 更新当前装备信息] = useState<装备信息数据类型>()
  const [更换装备后秒伤, 设置更换装备后秒伤] = useState<number>(0)
  const [导入弹窗, 设置导入弹窗] = useState(false)
  const [开启装备智能对比, 设置开启装备智能对比] = useState<boolean>(false)
  const [默认镶嵌宝石等级, 设置默认镶嵌宝石等级] = useState<number>(8)

  useEffect(() => {
    if (open) {
      更新当前装备信息(装备信息)
      设置更换装备后秒伤(0)
      // 设置开启装备智能对比(false) // 关闭弹窗不重置
      设置默认镶嵌宝石等级(8)
      初始化表单(装备信息)
    } else {
      设置导入弹窗(false)
    }
  }, [open])

  const urlServer = 获取页面参数('server')
  const urlName = 获取页面参数('name')

  useEffect(() => {
    if (urlServer && urlName) {
      设置导入弹窗(true)
    }
  }, [urlServer, urlName])

  const [form] = Form.useForm()

  const 初始化表单 = (装备信息: 装备信息数据类型) => {
    const newObj = {
      五彩石: 装备信息.五彩石,
      大附魔_伤帽: 装备信息?.装备增益?.大附魔_伤帽,
      大附魔_伤衣: 装备信息?.装备增益?.大附魔_伤衣,
      大附魔_伤腰: 装备信息?.装备增益?.大附魔_伤腰,
      大附魔_伤腕: 装备信息?.装备增益?.大附魔_伤腕,
      大附魔_伤鞋: 装备信息?.装备增益?.大附魔_伤鞋,
    }
    Object.keys(装备位置部位枚举).map((item, index) => {
      const o = 装备信息.装备列表?.find(
        (a, i) => a.装备部位 === 装备位置部位枚举[item] && index === i
      )
      if (o) {
        newObj[`${item}`] = o
      }
    })
    form.setFieldsValue(newObj)
  }

  const 更换装备计算秒伤 = (_, value) => {
    try {
      const 装备信息 = 根据表单选项获取装备信息(value)
      const { 秒伤 } = dispatch(秒伤计算({ 更新装备信息: 装备信息 }))
      设置更换装备后秒伤(秒伤)
      更新当前装备信息(装备信息)
    } catch (_) {
      更新当前装备信息(undefined)
      设置更换装备后秒伤(0)
    }
  }

  // 导入配装数据
  const 保存数据并计算 = (e) => {
    form.setFieldsValue({ ...e })
    更换装备计算秒伤(undefined, e)
  }

  const onOk = () => {
    form.validateFields().then((value) => {
      const 装备信息 = 根据表单选项获取装备信息(value)
      dispatch(更新方案数据({ 数据: 装备信息, 属性: '装备信息' }))
      dispatch(触发秒伤计算({ 是否更新显示计算结果: true }))
      onCancel?.({} as any)
    })
  }

  return (
    <Modal
      maskClosable={false}
      // keyboard={false}
      closable={![1, 2, 3, 4, 5]?.includes(当前引导步骤) || !新手引导流程状态}
      title={
        <头部组件
          更换装备计算秒伤={更换装备计算秒伤}
          对比秒伤={更换装备后秒伤 || 当前计算结果?.秒伤}
          对比装备信息={当前装备信息 || 装备信息}
          form={form}
        />
      }
      className={'zhuangbei-input-set-modal'}
      open={open}
      width={1178}
      destroyOnClose
      footer={
        <div>
          <Badge count='New' size='small' offset={[-10, 0]}>
            <Button
              id='Guide_2'
              onClick={() => {
                if (新手引导流程状态) {
                  return
                }
                设置导入弹窗(true)
              }}
            >
              配装导入
            </Button>
          </Badge>
          <Button id='Guide_6' style={{ marginLeft: 12 }} type='primary' onClick={() => onOk()}>
            保存并计算
          </Button>
        </div>
      }
      centered
      onCancel={(e) => onCancel?.(e)}
    >
      <配装组件标题
        开启装备智能对比={开启装备智能对比}
        设置开启装备智能对比={设置开启装备智能对比}
        设置默认镶嵌宝石等级={设置默认镶嵌宝石等级}
        保存数据并计算={保存数据并计算}
        form={form}
      />
      <Form
        colon={false}
        onValuesChange={更换装备计算秒伤}
        className='zhuangbei-input-set-modal-form'
        form={form}
      >
        <div className='zhuangbei-input-set-modal-form-left'>
          {Object.keys(装备位置部位枚举).map((部位索引) => {
            const 部位名称 = 装备位置部位枚举[部位索引]
            return (
              <Form.Item label={部位名称} name={`${部位索引}`} key={`${部位索引}`}>
                <装备选择
                  form={form}
                  默认镶嵌宝石等级={默认镶嵌宝石等级}
                  部位={部位名称}
                  部位索引={部位索引}
                  开启装备智能对比={开启装备智能对比}
                />
              </Form.Item>
            )
          })}
        </div>
        <div className='zhuangbei-set-dafumo-wrapper'>
          <Form.Item name={`大附魔_伤帽`}>
            <ValueCheckBox>伤帽</ValueCheckBox>
          </Form.Item>
          <Form.Item name={`大附魔_伤衣`}>
            <ValueCheckBox>伤衣</ValueCheckBox>
          </Form.Item>
          <Form.Item name={`大附魔_伤腰`}>
            <ValueCheckBox>伤腰</ValueCheckBox>
          </Form.Item>
          <Form.Item name={`大附魔_伤腕`}>
            <ValueCheckBox>伤腕</ValueCheckBox>
          </Form.Item>
          <Form.Item name={`大附魔_伤鞋`}>
            <ValueCheckBox>伤鞋</ValueCheckBox>
          </Form.Item>
        </div>
        <div className='zhuangbei-input-set-modal-form-right'>
          <Form.Item name={`五彩石`}>
            <五彩石选择 />
          </Form.Item>
          <面板展示 当前装备信息={当前装备信息 || 装备信息} />
          <装备增益展示 装备增益={当前装备信息?.装备增益 || 装备信息?.装备增益} />
          <秒伤结果对比 更换装备后秒伤={更换装备后秒伤} />
        </div>
      </Form>
      <配装导入
        visible={导入弹窗}
        onClose={() => 设置导入弹窗(false)}
        onOk={(e) => 保存数据并计算(e)}
      />
    </Modal>
  )
}

export default 配装器
