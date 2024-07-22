import React from 'react'
import 当前版本 from './当前版本'
import 获取当前数据 from '@/数据/数据工具/获取当前数据'
import './index.css'

const { 数据提供 } = 获取当前数据()

function 顶部说明() {
  return (
    <>
      <h1 className={'title-tip'}>
        {数据提供}
        <span className='service-tip'>；服务支持：可乐 冰糖雪梨橙</span>
      </h1>
      <当前版本 />
    </>
  )
}

export default 顶部说明
