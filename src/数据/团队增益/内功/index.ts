import { 团队增益数据类型 } from '@/@types/团队增益'
import { 属性类型 } from '@/@types/属性'
import 通用团队增益数据 from '../通用'

const 内功团队增益数据: 团队增益数据类型[] = [
  {
    增益名称: '撼如雷',
    层数: 1,
    覆盖率: 100,
    增益图片: 'https://icon.jx3box.com/icon/635.png',
    增益描述: '外功基础攻击力提高【5%】，气血最大值提高【5%】',
    增益来源: '天策',
    团队增益类型: '常用增益',
    增益集合: [
      { 属性: 属性类型.郭氏外功基础攻击, 值: 51 },
      { 属性: 属性类型.郭氏最终气血上限, 值: 51 },
    ],
  },
  {
    增益名称: '立地成佛',
    层数: 5,
    覆盖率: 100,
    增益图片: 'https://icon.jx3box.com/icon/420.png',
    增益描述: '每层内功防御等级降低【3%】，最多叠加五层',
    增益来源: '洗髓经',
    团队增益类型: '目标减益',
    增益集合: [{ 属性: 属性类型.郭氏内功基础防御, 值: -30 }],
  },
  {
    增益名称: '归去来棍·悟',
    增益心法端: '无界',
    层数: 1,
    覆盖率: 100,
    增益图片: 'https://icon.jx3box.com/icon/101768.png',
    增益描述: '受到的内功伤害提高【5%】',
    增益来源: '洗髓经·悟',
    团队增益类型: '目标减益',
    增益集合: [{ 属性: 属性类型.易伤增伤, 值: 51 / 1024 }],
  },
  {
    增益名称: '芝麻杆',
    层数: 1,
    覆盖率: 100,
    增益图片: 'https://icon.jx3box.com/icon/6906.png',
    增益描述: '增加【1160】内功攻击',
    增益来源: '端午节日活动',
    团队增益类型: '节日增益',
    增益集合: [{ 属性: 属性类型.内功基础攻击, 值: 1160 }],
  },
  {
    增益名称: '蛋黄粽',
    层数: 1,
    覆盖率: 100,
    增益图片: 'https://icon.jx3box.com/icon/2584.png',
    增益描述: '增加【1082】内功攻击',
    增益来源: '端午节日活动',
    团队增益类型: '节日增益',
    冲突增益: ['瘦肉粽', '瓜仁粽', '瑰栗粽'],
    增益集合: [{ 属性: 属性类型.内功基础攻击, 值: 1082 }],
  },
  {
    增益名称: '破苍穹',
    层数: 1,
    覆盖率: 50,
    覆盖率支持手动录入: true,
    增益图片: 'https://icon.jx3box.com/icon/1449.png',
    增益描述: '内功会心效果提高【10%】',
    增益来源: '紫霞功',
    团队增益类型: '稀缺增益',
    增益集合: [{ 属性: 属性类型.郭氏内功会心效果等级, 值: 102 }],
  },
  ...通用团队增益数据,
]

export default 内功团队增益数据
