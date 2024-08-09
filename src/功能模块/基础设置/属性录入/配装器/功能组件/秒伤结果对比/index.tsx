import { useAppSelector } from '@/hooks'
import React from 'react'

function 秒伤结果对比({ 更换装备后秒伤 }) {
  const 当前计算结果秒伤 = useAppSelector((state) => state?.data?.当前计算结果)?.秒伤
  const 百分比变化率 = (((更换装备后秒伤 - 当前计算结果秒伤) / 当前计算结果秒伤) * 100).toFixed(2);
  const bool = 更换装备后秒伤 > 当前计算结果秒伤
  return 当前计算结果秒伤 !== 更换装备后秒伤 && 更换装备后秒伤 ? (
    <div className={'dps-diff'}>
      <div className='dps-diff-item'>
        <div className='dps-diff-title'>更换前</div>
        <p className='dps-diff-dps'>{当前计算结果秒伤}</p>
      </div>
      <div className='dps-diff-item'>
        <div className='dps-diff-title'>替换后</div>
        <p className={`dps-diff-dps ${bool ? 'dps-diff-up' : 'dps-diff-down'}`}>
          {更换装备后秒伤}
        </p>
        <p className={`dps-diff-dps ${bool ? 'dps-diff-up' : 'dps-diff-down'}`}>
          {bool ? '+' : ''}{百分比变化率}%
        </p>
      </div>
    </div>
  ) : null
}

export default 秒伤结果对比
