import { 按数字生成数组 } from '@/工具函数/help'
import 获取当前数据 from '@/数据/数据工具/获取当前数据'

const { 系统配置 } = 获取当前数据()
const 百分比数组 = 按数字生成数组(101)

export const 会破招无比收益信息 = [
  {
    label: '会破比',
    list: 百分比数组.map((item) => ({
      label: `${item - 1}%`,
      value: item - 1,
    })),
    tip: (
      <div>
        <p>
          根据角色目前的<b style={{ color: 系统配置?.主题色 }}> 会心/破防 </b>
          属性总和，按比例重新分配后的收益曲线
        </p>
        <p>
          X轴： <b style={{ color: 系统配置?.主题色 }}> 会心 </b> 在 会心破防属性总和 的重新分布占比
        </p>
        <p>比例和结果秒伤为近似值，仅参考作为配装的属性收益趋向参考</p>
        <p style={{ color: 'red' }}>会计算一百次，电脑性能差的慎用</p>
      </div>
    ),
  },
  {
    label: '招无比',
    list: 百分比数组.map((item) => ({
      label: `${item - 1}%`,
      value: item - 1,
    })),
    tip: (
      <div>
        <p>
          根据角色目前的<b style={{ color: 系统配置?.主题色 }}> 破招/无双 </b>
          属性总和，按比例重新分配后的收益曲线
        </p>
        <p>
          X轴： <b style={{ color: 系统配置?.主题色 }}> 破招 </b> 在 破招无双属性总和 的重新分布占比
        </p>
        <p>比例和结果秒伤为近似值，仅参考作为配装的属性收益趋向参考</p>
        <p style={{ color: 'red' }}>会计算一百次，电脑性能差的慎用</p>
      </div>
    ),
  },
]

export const 渲染会破招无比折线图 = (chart, max, 当前比例, 当前收益) => {
  chart.axis('收益', false)

  chart
    .line()
    .position('比例*收益')
    .size(3)
    .color(系统配置?.收益柱形图颜色 || 系统配置?.主题色)

  if (max) {
    chart.annotation().dataMarker({
      top: true,
      position: max,
      text: {
        content: '最佳比例：' + max.比例,
        style: { fill: '#FFF', fontSize: 16, fontWeight: 500 },
      },
      line: {
        length: 100,
      },
    })
  }

  chart.annotation().dataMarker({
    position: [当前比例, 当前收益],
    text: {
      content: '当前比例：' + `${当前比例}%`,
      style: { fill: '#FFF', fontSize: 16, fontWeight: 500 },
    },
    line: {
      length: 50,
    },
  })
}

export const 获取会破招无图表数据 = (type, data, 装备信息, 计算增加后收益) => {
  if (type === '会破比') {
    const list = data || []

    const 当前会心破防总和 =
      (装备信息?.装备基础属性?.破防等级 || 0) + (装备信息?.装备基础属性?.会心等级 || 0)

    const res = list.map((item) => {
      const 计算会心等级 = (item?.value / 100) * 当前会心破防总和
      const 计算破防等级 = 当前会心破防总和 - 计算会心等级

      const { 秒伤: 新秒伤 } = 计算增加后收益({
        ...装备信息?.装备基础属性,
        会心等级: 计算会心等级,
        破防等级: 计算破防等级,
      })

      return {
        比例: item.label,
        收益: Number(新秒伤.toFixed(3)),
      }
    })
    return res
  } else if (type === '招无比') {
    const list = data || []

    const 当前破招无双总和 =
      (装备信息?.装备基础属性?.破招值 || 0) + (装备信息?.装备基础属性?.无双等级 || 0)

    const res = list.map((item) => {
      const 计算破招值 = (item?.value / 100) * 当前破招无双总和
      const 计算无双等级 = 当前破招无双总和 - 计算破招值

      const { 秒伤: 新秒伤 } = 计算增加后收益({
        ...装备信息?.装备基础属性,
        破招值: 计算破招值,
        无双等级: 计算无双等级,
      })

      return {
        比例: item.label,
        收益: Number(新秒伤.toFixed(3)),
      }
    })
    return res
  } else {
    return []
  }
}
