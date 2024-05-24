import { 角色默认基础属性 } from '@/工具函数/init/默认数据'
import 根据装备信息获取基础属性 from '../根据装备信息获取基础属性'
import { 装备位置部位枚举 } from '@/@types/装备'

const 根据表单选项获取装备信息 = (data) => {
  const 装备列表 = Object.keys(data)
    .filter((key) => 装备位置部位枚举[key])
    .map((key) => data[key])
    .filter((data) => !!data)

  const { 大附魔_伤帽, 大附魔_伤衣, 大附魔_伤腰, 大附魔_伤腕, 大附魔_伤鞋, 五彩石 } = data || {}

  const 装备信息 = 根据装备信息获取基础属性({
    装备基础属性: { ...角色默认基础属性?.() },
    装备列表: 装备列表,
    五彩石,
    装备增益: { 大附魔_伤帽, 大附魔_伤衣, 大附魔_伤腰, 大附魔_伤腕, 大附魔_伤鞋 },
  })
  return 装备信息
}

export default 根据表单选项获取装备信息
