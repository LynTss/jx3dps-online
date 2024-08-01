import { Alert, Badge, Modal, ModalProps, Tabs } from 'antd'
import React from 'react'
import { useAppSelector } from '@/hooks'
import 识别装备对比 from './识别装备对比'
import 无封助手 from './无封助手'
import './index.css'

const 装备助手: React.FC<ModalProps> = (props) => {
  const 当前计算结果 = useAppSelector((state) => state?.data?.当前计算结果)

  const items = [
    {
      key: '识别装备对比',
      label: '识别装备对比',
      children: <识别装备对比 />,
    },
    {
      key: '无封助手',
      label: (
        <Badge offset={[5, -5]} count='New'>
          无封助手
        </Badge>
      ),
      children: <无封助手 />,
    },
  ]

  return (
    <Modal
      className={'equip-modal'}
      width={1160}
      maskClosable={false}
      title={''}
      centered
      footer={false}
      destroyOnClose
      {...props}
    >
      <Tabs className='equip-modal-tabs' items={items} destroyInactiveTabPane />
      <Alert className='equip-modal-old-dps' message={`当前秒伤：${当前计算结果?.秒伤}`} />
    </Modal>
  )
}

export default React.memo(装备助手)
