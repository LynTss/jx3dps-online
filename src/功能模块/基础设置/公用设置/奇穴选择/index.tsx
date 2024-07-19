import React, { useEffect, useState } from 'react'
import { Button, Drawer, Form, Select } from 'antd'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { 更新方案数据 } from '@/store/data'
import 获取当前数据 from '@/数据/数据工具/获取当前数据'
import { 触发秒伤计算 } from '@/计算模块/计算函数'
import './index.css'

const { 奇穴数据 = [] } = 获取当前数据()

const 奇穴选择: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [form] = Form.useForm()

  const dispatch = useAppDispatch()
  const 当前奇穴信息 = useAppSelector((state) => state?.data?.当前奇穴信息)

  const handleChangeQixue = (_, values) => {
    const newArray = Object.keys(values).map((key) => {
      return values[key]
    })

    dispatch(更新方案数据({ 数据: newArray, 属性: '当前奇穴信息' }))
    dispatch(触发秒伤计算({ 是否更新显示计算结果: true }))
  }

  // 监听表单变化
  useEffect(() => {
    const obj = {}
    当前奇穴信息.map((item, index) => {
      obj[index] = item
    })
    form?.setFieldsValue({
      ...obj,
    })
  }, [当前奇穴信息])

  return (
    <>
      <Button size='small' className='qixue-set-button' onClick={() => setDrawerOpen(true)}>
        奇穴设置
      </Button>
      <Drawer
        title={'奇穴设置'}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        placement='bottom'
        height={200}
        className={'qixue-set-drawer'}
      >
        <Form
          onValuesChange={handleChangeQixue}
          form={form}
          className={`qixue-set-drawer-wrap ${
            奇穴数据?.length === 4 ? 'qixue-set-drawer-wrap-small' : ''
          }`}
        >
          {奇穴数据.map((重, index) => {
            return (
              <Form.Item className={'qixue-set-item'} name={index} key={index + 1}>
                <Select
                  className={'qixue-set-item-select'}
                  disabled={重?.是否不可编辑}
                  // onChange={handleChangeQixue}
                  dropdownMatchSelectWidth={false}
                  optionLabelProp='label'
                  showArrow={false}
                  popupClassName={'qixue-set-item-select-popup'}
                >
                  {重?.奇穴列表.map((奇穴) => {
                    return (
                      <Select.Option
                        value={奇穴?.奇穴名称}
                        key={奇穴?.奇穴名称}
                        disabled={奇穴?.是否不可编辑}
                        className={'qixue-set-item-select-option'}
                        label={
                          <div className={'qixue-label'}>
                            <img className={'qixue-label-img'} src={奇穴?.奇穴图片} />
                            <span className={'qixue-label-text'}>{奇穴?.奇穴名称}</span>
                          </div>
                        }
                      >
                        <div className='qixue-set-item-select-img-wrap'>
                          <img className={'qixue-set-item-select-img'} src={奇穴?.奇穴图片} />
                        </div>
                        <span className={'qixue-set-item-select-text'}>{奇穴?.奇穴名称}</span>
                      </Select.Option>
                    )
                  })}
                </Select>
              </Form.Item>
            )
          })}
        </Form>
      </Drawer>
    </>
  )
}

export default 奇穴选择
