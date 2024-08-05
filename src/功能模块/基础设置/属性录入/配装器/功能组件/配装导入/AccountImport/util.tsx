import { 属性简写枚举 } from '@/@types/枚举'
import 获取当前数据 from '@/数据/数据工具/获取当前数据'

// 获取配装数据
export const getEquipData = (data) => {
  const { 装备数据, 附魔, 五彩石 } = 获取当前数据()

  const 全部五彩石数据 = 五彩石?.[6]

  const equip: any = {}
  const equipList = data?.Equips || []
  let 已经计算过一个戒指 = false
  const 未内置附魔列表: string[] = []
  const 未识别装备列表: string[] = []
  const 额外消息: string[] = []
  // try {
  equipList.map((item) => {
    let 装备附魔: string | undefined = undefined
    // 判断附魔
    if (item?.WPermanentEnchant) {
      const 附魔数据 = item?.WPermanentEnchant?.Attributes?.[0]
      if (
        附魔数据 &&
        ![
          'atDecriticalDamageBase',
          'atDecriticalDamagePowerBase',
          // 'atDamageToLifeForSelf',
          'atToughnessBase',
        ].includes(附魔数据?.Desc)
      ) {
        const 附魔属性 = 附魔数据?.Desc
        const 附魔属性枚举 = 属性简写枚举?.[附魔属性]
        const 附魔值 = +附魔数据?.Attribute1Value1
        if (!附魔属性枚举) {
          未内置附魔列表.push(未支持附魔属性枚举[附魔属性] || 附魔属性)
          console.warn(`存在计算器未内置附魔${未支持附魔属性枚举[附魔属性]}`)
        } else {
          const 附魔数据判断 = 附魔?.some((item) => item?.附魔名称 === `${附魔属性枚举}+${附魔值}`)

          if (!附魔数据判断) {
            未内置附魔列表.push(`${附魔属性枚举}${附魔值}`)
            console.warn(`存在计算器未内置附魔${附魔属性枚举}${附魔值}`)
          } else {
            装备附魔 = `${附魔属性枚举}+${附魔值}`
          }
        }
      }
    }

    const 装备部位 = 装备部位格式化(item?.Icon)

    if (装备部位) {
      const 装备位置映射 =
        装备部位 === '戒指' ? (已经计算过一个戒指 ? '_10' : '_9') : EquipPositionMap[装备部位]

      const 装备原始数据 = 装备数据[装备部位]?.find((data) => +(data.id || 0) === +item.ID)

      if (装备原始数据) {
        equip[装备位置映射] = {
          当前精炼等级: +item?.StrengthLevel || +item?.MaxStrengthLevel,
          id: 装备原始数据?.id,
          装备部位: 装备部位,
          镶嵌孔数组: (装备原始数据?.镶嵌孔数组 || [])?.map((a, index) => {
            return {
              ...a,
              镶嵌宝石等级: +item?.FiveStone?.[index]?.Level || 8,
            }
          }),
          附魔: 装备附魔,
        }
      } else {
        未识别装备列表.push(item?.Name)
      }

      // 判断大附魔
      if (DaFuMoMap[装备部位]) {
        equip[DaFuMoMap[装备部位]] = item?.WCommonEnchant ? 1 : 0
      }

      if (item?.effectColorStone && item?.effectColorStone?.Type === '五彩石') {
        let 五彩石名称 = item?.effectColorStone?.Name

        // 对内功五彩石做映射
        Object.keys(五彩石转换).forEach((key) => {
          if (五彩石名称?.includes(key)) {
            五彩石名称 = 五彩石名称.replace(key, 五彩石转换[key])
          }
        })

        if (
          !全部五彩石数据?.some((item) => item.五彩石名称 === 五彩石名称.replace('(伍)', '(陆)'))
        ) {
          额外消息.push(`装备库未内置五彩石${item?.effectColorStone?.Name}`)
          五彩石名称 = ''
        } else {
          // if (五彩石名称?.includes('(伍)')) {
          //   五彩石名称 = 五彩石名称.replace('(伍)', '(陆)')
          //   额外消息.push('五彩石自动转换为六级')
          // }
        }

        if (五彩石名称) {
          equip.五彩石 = 五彩石名称
        }
      }

      if (装备部位 === '戒指') {
        已经计算过一个戒指 = true
      }
    }
  })

  return {
    equip,
    未内置附魔列表,
    未识别装备列表,
  }
}

const 装备部位格式化 = (传入装备: any = {}) => {
  const { Kind, SubKind } = 传入装备
  if (Kind === '武器') {
    if (SubKind === '投掷囊') {
      return '暗器'
    } else {
      return '武器'
    }
  } else {
    return 装备部位转化枚举[SubKind]
  }
}

const 装备部位转化枚举 = {
  上衣: '衣服',
  帽子: '帽子',
  项链: '项链',
  戒指: '戒指',
  腰带: '腰带',
  腰坠: '腰坠',
  裤子: '下装',
  鞋: '鞋子',
  护臂: '护腕',
}

const DaFuMoMap = {
  帽子: '大附魔_伤帽',
  衣服: '大附魔_伤衣',
  腰带: '大附魔_伤腰',
  护腕: '大附魔_伤腕',
  鞋子: '大附魔_伤鞋',
}

const EquipPositionMap = {
  帽子: '_1',
  衣服: '_2',
  腰带: '_3',
  护腕: '_4',
  下装: '_5',
  鞋子: '_6',
  项链: '_7',
  腰坠: '_8',
  戒指: '_9',
  戒指_2: '_10',
  暗器: '_11',
  武器: '_12',
}

const 五彩石转换 = {
  // 混元
  融天: '星见', // 内功会心
  霹雳: '月华', // 内功会效
  雷鸣: '激流', // 内功攻击
  混沌: '灭气', // 内功破防
  // 阴性
  化雪: '星见', // 内功会心
  杯雪: '月华', // 内功会效
  霜冷: '激流', // 内功攻击
  冻髓: '灭气', // 内功破防
  // 阳性
  燎原: '星见', // 内功会心
  浴火: '月华', // 内功会效
  烈阳: '激流', // 内功攻击
  日炎: '灭气', // 内功破防
  // 阴阳
  虹卷: '星见', // 内功会心
  界影: '月华', // 内功会效
  琉璃: '激流', // 内功攻击
  焚虚: '灭气', // 内功破防
  // 毒性
  蚀骨: '星见', // 内功会心
  穿石: '月华', // 内功会效
  鹤顶: '激流', // 内功攻击
  腐心: '灭气', // 内功破防
}

const 未支持附魔属性枚举 = {
  atDamageToLifeForSelf: '龙血磨石',
}
