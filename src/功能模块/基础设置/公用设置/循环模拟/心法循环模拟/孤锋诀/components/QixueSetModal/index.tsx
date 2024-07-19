// 奇穴数据，只在模拟循环内生效
import { Drawer, Form, Select } from 'antd'
import React, { useEffect } from 'react'
import 获取当前数据 from '@/数据/数据工具/获取当前数据'
import './index.css'
import { useAppSelector } from '@/hooks'

const { 奇穴数据 = [] } = 获取当前数据()

interface QixueSetProps {
  className?: string
  奇穴信息: string[]
  更新奇穴信息: (e: string[]) => void
  奇穴弹窗展示: boolean
  更新奇穴弹窗展示: (e: boolean) => void
}

const QixueSetModal: React.FC<QixueSetProps> = (props) => {
  const 当前奇穴信息 = useAppSelector((state) => state?.data?.当前奇穴信息)
  const { 奇穴信息, 更新奇穴信息, 奇穴弹窗展示, 更新奇穴弹窗展示 } = props

  const [form] = Form.useForm()

  const handleChangeQixue = () => {
    setTimeout(() => {
      form?.validateFields().then((values) => {
        const newArray = Object.keys(values).map((key) => {
          return values[key] as string
        })
        更新奇穴信息(newArray)
      })
    }, 0)
  }

  // 监听表单变化
  useEffect(() => {
    const obj = {}
    奇穴信息.map((item, index) => {
      obj[index] = item || 当前奇穴信息[index]
    })
    form?.setFieldsValue({
      ...obj,
    })
  }, [奇穴信息])

  return (
    <Drawer
      title={'奇穴设置'}
      open={奇穴弹窗展示}
      onClose={() => 更新奇穴弹窗展示(false)}
      placement='bottom'
      height={140}
      mask={false}
      className={'qixue-simulator-set-drawer'}
    >
      <Form form={form} className={'qixue-simulator-set-drawer-wrap'}>
        {奇穴数据.map((重, index) => {
          return (
            <Form.Item className={'qixue-simulator-set-item'} name={index} key={index + 1}>
              <Select
                className={'qixue-simulator-set-item-select'}
                onChange={handleChangeQixue}
                dropdownMatchSelectWidth={false}
                optionLabelProp='label'
                showArrow={false}
                popupClassName={'qixue-simulator-set-item-select-popup'}
              >
                {重?.奇穴列表.map((奇穴) => {
                  return (
                    <Select.Option
                      value={奇穴?.奇穴名称}
                      key={奇穴?.奇穴名称}
                      className={'qixue-simulator-set-item-select-option'}
                      label={
                        <div className={'qixue-simulator-label'}>
                          <img className={'qixue-simulator-label-img'} src={奇穴?.奇穴图片} />
                          <span className={'qixue-simulator-label-text'}>{奇穴?.奇穴名称}</span>
                        </div>
                      }
                    >
                      <div className='qixue-simulator-set-item-select-img-wrap'>
                        <img
                          className={'qixue-simulator-set-item-select-img'}
                          src={奇穴?.奇穴图片}
                        />
                      </div>
                      <span className={'qixue-simulator-set-item-select-text'}>
                        {奇穴?.奇穴名称}
                      </span>
                    </Select.Option>
                  )
                })}
              </Select>
            </Form.Item>
          )
        })}
      </Form>
    </Drawer>
  )
}

export default QixueSetModal
