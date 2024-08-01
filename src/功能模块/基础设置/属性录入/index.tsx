import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { 获取页面参数 } from '@/工具函数/help'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { 切换配装器弹窗显示状态, 更新当前引导步骤 } from '@/store/system'

import 装备助手弹窗 from './装备助手'
import 配装器 from './配装器'

import './index.css'

function 属性录入() {
  const 配装器弹窗显示状态 = useAppSelector((state) => state.system.配装器弹窗显示状态)
  const 当前引导步骤 = useAppSelector((state) => state.system.当前引导步骤)
  const dispatch = useAppDispatch()

  const 修改显示状态 = (e) => {
    dispatch(切换配装器弹窗显示状态(e))
  }

  const [装备助手, 设置装备助手] = useState<boolean>(false)

  const urlServer = 获取页面参数('server')
  const urlName = 获取页面参数('name')

  useEffect(() => {
    if (urlServer && urlName) {
      修改显示状态(true)
    }
  }, [urlServer, urlName])

  const 校验引导状态 = () => {
    if (当前引导步骤 === 0) {
      setTimeout(() => {
        dispatch(更新当前引导步骤(1))
      }, 200)
    }
  }

  return (
    <div className={'character-set'}>
      <Button
        id='Guide_1'
        className={'character-set-btn'}
        onClick={() => {
          修改显示状态(true)
          校验引导状态()
        }}
        danger
      >
        配装器
      </Button>
      <Button
        className={'character-set-btn'}
        onClick={() => {
          设置装备助手(true)
        }}
      >
        装备助手
      </Button>
      <配装器
        open={配装器弹窗显示状态}
        onCancel={() => {
          修改显示状态(false)
        }}
      />
      <装备助手弹窗 open={装备助手} onCancel={() => 设置装备助手(false)} />
    </div>
  )
}

export default 属性录入
